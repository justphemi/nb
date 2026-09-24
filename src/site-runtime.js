const SCRIPT_PLAN = [
  {
    kind: "inline",
    code: '!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);',
  },
  {
    kind: "external",
    src: "/res/scripts/8dkgLJeTTIDIRVjodlDX-fb6d57a2.js",
  },
  {
    kind: "external",
    src: "https://embed.wized.com",
  },
  {
    kind: "inline",
    code: 'window.__WEBFLOW_CURRENCY_SETTINGS = {"currencyCode":"USD","$init":true,"symbol":"$","decimal":".","fractionDigits":2,"group":",","template":"{{wf {\\"path\\":\\"symbol\\",\\"type\\":\\"PlainText\\"} }} {{wf {\\"path\\":\\"amount\\",\\"type\\":\\"CommercePrice\\"} }} {{wf {\\"path\\":\\"currencyCode\\",\\"type\\":\\"PlainText\\"} }}","hideDecimalForWholeNumbers":false};',
  },
  {
    kind: "inline",
    code: '{\n  "items": [\n    {\n      "url": "https://www.youtube.com/watch?v=Rl_vsFznVxM",\n      "originalUrl": "https://www.youtube.com/watch?v=Rl_vsFznVxM",\n      "width": 940,\n      "height": 528,\n      "thumbnailUrl": "https://i.ytimg.com/vi/Rl_vsFznVxM/hqdefault.jpg",\n      "html": "<iframe class=\\"embedly-embed\\" src=\\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FRl_vsFznVxM%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DRl_vsFznVxM&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FRl_vsFznVxM%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube\\" width=\\"940\\" height=\\"528\\" scrolling=\\"no\\" title=\\"YouTube embed\\" frameborder=\\"0\\" allow=\\"autoplay; fullscreen\\" allowfullscreen=\\"true\\"></iframe>",\n      "type": "video"\n    }\n  ],\n  "group": ""\n}',
  },
  {
    kind: "external",
    src: "/res/scripts/js/jquery-3.5.1.min.dc5e7f18c8-c8e1c8b3.js",
  },
  {
    kind: "external",
    src: "/res/scripts/62898f38a920a93141b23acd/js/webflow.ca2e23350-ea4ea91d.js",
  },
  {
    kind: "external",
    src: "/res/scripts/motion-restore.js",
  },
];
const STYLE_PLAN = [
  "/res/styles/62898f38a920a93141b23acd/css/lightin.webflow.bf5c95e2c.min-dbb99597.css",
  {
    inline: '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
  },
  {
    inline:
      "\n.award-text-blod-stoke {-webkit-text-stroke: 2px #E8C547; color:#0D100D !important; -webkit-font-smoothing: subpixel-antialiased;}\n",
  },
];
const DOCUMENT_ATTRIBUTES = {
  html: {
    class: "w-mod-js w-mod-ix",
    "data-wf-domain": "nexusbert-tech.com",
    "data-wf-page": "62898f38a920a92b73b23ace",
    "data-wf-site": "62898f38a920a93141b23acd",
    lang: "en",
  },
  body: {},
};

let runtimeBooted = false;
const loadedScripts = new Set();
const loadedStyles = new Set();

function applyDocumentAttributes() {
  for (const [name, value] of Object.entries(DOCUMENT_ATTRIBUTES.html || {}))
    document.documentElement.setAttribute(name, value);
  for (const [name, value] of Object.entries(DOCUMENT_ATTRIBUTES.body || {}))
    document.body.setAttribute(name, value);
}

// Source scripts are replayed AFTER first paint. If any legacy/analytics script
// calls document.write()/writeln() at that point, the browser implicitly runs
// document.open() first and wipes the entire rendered page. In the raw-HTML
// preview those same writes run inline during parsing and merely append, which
// is why HTML is flawless but frameworks went blank. The page is already in the
// DOM, so turn post-load writes into safe no-ops (script deps we need are loaded
// explicitly from SCRIPT_PLAN, not via document.write).
function neutralizeDocumentWrite() {
  try {
    const noop = function () {};
    // @ts-ignore - intentional override
    document.write = noop;
    // @ts-ignore - intentional override
    document.writeln = noop;
  } catch {}
}

function injectClassicScript(src) {
  return new Promise((resolve) => {
    const el = document.createElement("script");
    el.src = src;
    el.async = false;
    el.charset = "utf-8";
    el.onload = () => resolve(true);
    el.onerror = () => {
      console.warn("[maamba] failed to load site script", src);
      resolve(false);
    };
    document.head.appendChild(el);
  });
}

function injectModuleScript(src) {
  return new Promise((resolve) => {
    // Framer runtime is an ES module (.mjs via modulepreload + data-framer-bundle)
    // Must be loaded as module, not classic script, to preserve its import map and breakpoints logic
    const el = document.createElement("script");
    el.type = "module";
    el.src = src;
    el.onload = () => resolve(true);
    el.onerror = () => {
      console.warn("[maamba] failed to load module script", src);
      resolve(false);
    };
    document.head.appendChild(el);
  });
}

function injectStyleSheet(href) {
  return new Promise((resolve) => {
    const el = document.createElement("link");
    el.rel = "stylesheet";
    el.href = href;
    el.addEventListener("load", () => resolve(true));
    el.addEventListener("error", () => {
      console.warn("[maamba] failed to load stylesheet", href);
      resolve(false);
    });
    document.head.appendChild(el);
    if (el.sheet) resolve(true);
  });
}

export function reinitBuiltinLibraries() {
  const w = typeof window !== "undefined" ? window.Webflow : undefined;
  const jq =
    typeof window !== "undefined" ? window.jQuery || window.$ : undefined;
  // Fallback nav binder for React/Next.js where Webflow's jQuery ready was lost after JSX remount
  function bindFallbackNav() {
    document.querySelectorAll(".w-nav").forEach((nav) => {
      const btn = nav.querySelector(".w-nav-button");
      const menu = nav.querySelector(".w-nav-menu");
      const overlay = nav.querySelector(".w-nav-overlay");
      if (!btn || !menu) return;
      if (btn._maambaBound) return;
      btn._maambaBound = true;
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const isOpen = nav.classList.contains("w--open");
        nav.classList.toggle("w--open", !isOpen);
        btn.setAttribute("aria-expanded", String(!isOpen));
        if (menu) menu.style.display = isOpen ? "none" : "block";
        if (overlay) overlay.style.display = isOpen ? "none" : "block";
        // Lottie hamburger: try to play reverse
        const lottieEl = btn.querySelector('[data-animation-type="lottie"]');
        if (lottieEl) {
          try {
            const anim = lottieEl._lottie || lottieEl.lottie || window.lottie;
            if (anim && anim.setDirection) {
              anim.setDirection(isOpen ? -1 : 1);
              anim.play();
            }
          } catch {}
        }
      });
    });
  }
  if (w) {
    try {
      if (typeof w.destroy === "function") w.destroy();
    } catch (e) {
      console.warn("[maamba] Webflow.destroy failed", e);
    }
    try {
      if (typeof w.ready === "function") w.ready();
    } catch (e) {
      console.warn("[maamba] Webflow.ready failed", e);
    }
    try {
      const ix2 = typeof w.require === "function" ? w.require("ix2") : null;
      if (ix2 && typeof ix2.init === "function") {
        ix2.init();
        document.dispatchEvent(new Event("readystatechange"));
      }
    } catch (e) {
      console.warn("[maamba] Webflow ix2 re-init failed", e);
    }
    try {
      const lottie =
        typeof w.require === "function" ? w.require("lottie") : null;
      if (lottie) {
        if (typeof lottie.init === "function")
          try {
            lottie.init();
          } catch {}
        if (typeof lottie.create === "function") {
          document
            .querySelectorAll('[data-animation-type="lottie"]')
            .forEach((el) => {
              try {
                if (!el._lottie) lottie.create({ container: el });
              } catch {}
            });
        }
      }
    } catch {}
    try {
      if (jq && typeof jq === "function") jq(document).trigger("ready");
    } catch {}
  }
  try {
    window.dispatchEvent(new Event("resize"));
    window.dispatchEvent(new Event("scroll"));
    if (
      window.ScrollTrigger &&
      typeof window.ScrollTrigger.refresh === "function"
    ) {
      try {
        window.ScrollTrigger.refresh();
      } catch {}
    }
    // Ensure closed state initially
    document
      .querySelectorAll(".w-nav-button")
      .forEach((el) => el.setAttribute("aria-expanded", "false"));
    document
      .querySelectorAll(".w-nav-overlay, .w-nav-menu")
      .forEach((el) => el.style.removeProperty("display"));
    bindFallbackNav();
    setTimeout(() => {
      window.dispatchEvent(new Event("scroll"));
      window.dispatchEvent(new Event("resize"));
      if (
        window.ScrollTrigger &&
        typeof window.ScrollTrigger.refresh === "function"
      ) {
        try {
          window.ScrollTrigger.refresh();
        } catch {}
      }
      bindFallbackNav();
    }, 100);
    setTimeout(bindFallbackNav, 500);
  } catch {}
}

export async function bootSiteRuntime() {
  if (runtimeBooted) return;
  runtimeBooted = true;
  applyDocumentAttributes();
  neutralizeDocumentWrite();

  for (const item of SCRIPT_PLAN) {
    if (item.kind === "external") {
      if (loadedScripts.has(item.src)) continue;
      loadedScripts.add(item.src);
      if (item.isModule) {
        await injectModuleScript(item.src);
      } else {
        await injectClassicScript(item.src);
      }
    } else {
      try {
        (0, eval)(item.code);
      } catch (error) {
        console.warn("[maamba] inline site script failed", error);
      }
    }
  }
  // Source scripts are replayed after the framework commit; give initializers
  // that registered a DOMContentLoaded handler an equivalent lifecycle event.
  document.dispatchEvent(new Event("DOMContentLoaded"));

  // Stylesheets (and inline <style>) are preloaded in index.html <head> in
  // their original order, so first paint matches the raw site - nothing to
  // inject here.

  reinitBuiltinLibraries();
}
