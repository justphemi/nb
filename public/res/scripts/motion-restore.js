/*
 * motion-restore.js  offline motion restoration shim.
 *
 * Injected at the end of <body> on every cloned page. Re-instantiates scroll
 * libraries whose init never ran offline, refreshes ScrollTrigger geometry
 * after fonts/images settle, and re-runs AOS. Does NOT touch the backend.
 * Also neutralizes surviving fetch/XHR so animation loops don't throw.
 */
(function () {
  "use strict";

  /* ------------------------------------------------ network neutralizer -- */
  var STATIC_RE =
    /\.(css|js|mjs|json|png|jpe?g|gif|webp|avif|svg|woff2?|ttf|otf|eot|mp4|webm|mp3|ogg|wav|glb|gltf|wasm|riv|bin)([?#].*)?$/i;

  function isStatic(u) {
    if (typeof u === "string") return STATIC_RE.test(u);
    if (u && typeof u.url === "string") return STATIC_RE.test(u.url);
    return true;
  }

  function emptyResponse() {
    var r = {
      ok: true,
      status: 200,
      statusText: "OK",
      json: function () {
        return Promise.resolve({});
      },
      text: function () {
        return Promise.resolve("{}");
      },
      blob: function () {
        return Promise.resolve(new Blob(["{}"]));
      },
    };
    return r;
  }

  if (typeof window !== "undefined") {
    var _fetch = window.fetch;
    if (typeof _fetch === "function") {
      window.fetch = function (input, opts) {
        if (!isStatic(input)) {
          try {
            return Promise.resolve(
              new Response("{}", {
                status: 200,
                headers: { "Content-Type": "application/json" },
              }),
            );
          } catch (e) {
            return Promise.resolve(emptyResponse());
          }
        }
        return _fetch.apply(this, arguments);
      };
    }

    var _open = XMLHttpRequest.prototype.open;
    var _send = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.open = function (method, url, async, user, pass) {
      if (!isStatic(url)) {
        this.__mambaOffline = true;
        return;
      }
      this.__mambaOffline = false;
      return _open.apply(this, arguments);
    };
    XMLHttpRequest.prototype.send = function () {
      if (this.__mambaOffline) {
        var self = this;
        try {
          Object.defineProperties(this, {
            readyState: { value: 4, writable: true },
            status: { value: 200, writable: true },
            responseText: { value: "", writable: true },
            response: { value: "", writable: true },
          });
        } catch (e) {}
        // eslint-disable-next-line no-self-assign
        this.status = 200;
        this.readyState = 4;
        if (this.onreadystatechange) {
          try {
            this.onreadystatechange.call(this);
          } catch (e) {}
        }
        if (this.onload) {
          try {
            this.onload.call(this);
          } catch (e) {}
        }
        if (this.onerror) {
          try {
            this.onerror.call(this);
          } catch (e) {}
        }
        return;
      }
      return _send.apply(this, arguments);
    };

    if (window.WebSocket) {
      window.WebSocket = function (url, protocols) {
        this.readyState = WebSocket.CLOSED;
        this.url = String(url || "");
        this.close = function () {
          this.readyState = WebSocket.CLOSED;
        };
        this.send = function () {};
      };
      window.WebSocket.CONNECTING = 0;
      window.WebSocket.OPEN = 1;
      window.WebSocket.CLOSING = 2;
      window.WebSocket.CLOSED = 3;
    }

    if (navigator.sendBeacon) {
      navigator.sendBeacon = function () {
        return true;
      };
    }
  }

  /* ------------------------------------------------ SRI recovery ------
   * The engine rewrites url() refs inside CSS (CDN → res/), which breaks the
   * published `integrity` hash, so browsers silently drop the stylesheet.
   * Older artifacts keep those attrs: detect them failing and re-apply the
   * CSS by re-fetching the (byte-modified) file and injecting it as a <style>.
   * --------------------------------------------------------------------- */
  function recoverBlockedStyle(link) {
    if (link.__mambaRecovering) return;
    link.__mambaRecovering = true;
    var href = link.getAttribute("href");
    if (!href) return;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", href, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status !== 200) return;
      // Only inject if the original <link> never became usable.
      if (link.sheet !== null && link.sheet !== undefined) return;
      if (document.querySelector('style[data-mamba-recovered="' + href + '"]'))
        return;
      var style = document.createElement("style");
      style.setAttribute("data-mamba-recovered", href);
      style.textContent = xhr.responseText;
      document.head.appendChild(style);
    };
    try {
      xhr.send();
    } catch (e) {}
  }

  function sweepSRI() {
    var links = Array.prototype.slice.call(
      document.querySelectorAll('link[rel="stylesheet"][href]'),
    );
    links.forEach(function (link) {
      if (link.sheet === null || link.sheet === undefined)
        recoverBlockedStyle(link);
    });
  }

  // Catch failures as they happen (SRI mismatch fires `error` on the <link>).
  var headLinks = Array.prototype.slice.call(
    document.querySelectorAll('link[rel="stylesheet"][href]'),
  );
  headLinks.forEach(function (link) {
    link.addEventListener("error", function () {
      recoverBlockedStyle(link);
    });
  });

  // Final sweep once everything has had a chance to settle.
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    window.addEventListener("load", function () {
      setTimeout(sweepSRI, 800);
    });
  } else {
    document.addEventListener("DOMContentLoaded", function () {
      setTimeout(sweepSRI, 900);
    });
  }

  /* ------------------------------------------------ motion restore ---- */

  function onReady(fn) {
    if (
      document.readyState === "complete" ||
      document.readyState === "interactive"
    ) {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }

  onReady(function () {
    var html = document.documentElement;

    /* Lenis re-init ---------------------------------------------------- */
    if (
      html.classList.contains("lenis") &&
      typeof window.Lenis === "function" &&
      !window.__lenisInited
    ) {
      try {
        var lenis = new window.Lenis({ smoothWheel: true, lerp: 0.1 });
        window.__lenisInited = true;
        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      } catch (e) {}
    }

    /* LocomotiveScroll re-init ------------------------------------------ */
    var locoEl = document.querySelector("[data-scroll-container]");
    if (
      locoEl &&
      typeof window.LocomotiveScroll === "function" &&
      !window.__locoInited
    ) {
      try {
        new window.LocomotiveScroll({
          el: locoEl,
          smooth: true,
          multiplier: 1,
          smartphone: { smooth: true },
          tablet: { smooth: true },
        });
        window.__locoInited = true;
      } catch (e) {}
    }

    /* ScrollTrigger.refresh after fonts + images ------------------------ */
    function refreshScrollTrigger() {
      if (
        typeof window.ScrollTrigger === "object" &&
        typeof window.ScrollTrigger.refresh === "function"
      ) {
        try {
          window.ScrollTrigger.refresh();
        } catch (e) {}
      }
      if (typeof window.gsap !== "undefined" && window.ScrollTrigger) {
        try {
          window.ScrollTrigger.refresh();
        } catch (e) {}
      }
    }

    if (document.fonts && typeof document.fonts.ready === "object") {
      document.fonts.ready.then(function () {
        refreshScrollTrigger();
        setTimeout(refreshScrollTrigger, 600);
      });
    } else {
      setTimeout(refreshScrollTrigger, 800);
    }
    window.addEventListener("load", function () {
      setTimeout(refreshScrollTrigger, 400);
    });

    /* Re-observe images → refresh scroll positions when they settle ------ */
    var imgs = document.querySelectorAll("img");
    var pending = Array.prototype.slice.call(imgs).filter(function (i) {
      return !i.complete;
    });
    if (pending.length === 0) {
      setTimeout(refreshScrollTrigger, 300);
    } else {
      var seen = 0;
      pending.forEach(function (img) {
        img.addEventListener("load", function () {
          seen += 1;
          if (seen >= pending.length) setTimeout(refreshScrollTrigger, 250);
        });
        img.addEventListener("error", function () {
          seen += 1;
          if (seen >= pending.length) setTimeout(refreshScrollTrigger, 250);
        });
      });
    }

    /* AOS re-init ------------------------------------------------------- */
    if (
      typeof window.AOS === "object" &&
      typeof window.AOS.init === "function"
    ) {
      var els = document.querySelectorAll("[data-aos]");
      if (els.length && !window.__aosInited) {
        var opts = {};
        var d = document.body.getAttribute("data-aos-duration");
        if (d) opts.duration = parseInt(d, 10);
        try {
          window.AOS.init(opts);
          window.__aosInited = true;
        } catch (e) {}
      }
    }
  });

  /* Rebuild scroll-driven entrance states on resize after first paint. */
  window.addEventListener("resize", function () {
    if (
      typeof window.ScrollTrigger === "object" &&
      window.ScrollTrigger.refresh
    ) {
      setTimeout(function () {
        try {
          window.ScrollTrigger.refresh();
        } catch (e) {}
      }, 200);
    }
  });
})();
