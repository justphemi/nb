# https://nexusbert-tech.com/

A **React + Vite** app converted from nexusbert-tech.com by Maamba.
Every page section is a real, editable component — no HTML blobs.

## Run it

```bash
npm install
npm run dev        # local dev server (hot reload)
npm run build      # production build -> dist/
npm run preview    # serve the production build
```

## Where things live

- `src/components/` — one file per section, reused across pages (12 total). Edit these to change content.
- `src/pages.jsx` — each page composes its components in order; the route → page map lives here.
- `src/App.jsx` — picks the page for the current URL.
- `src/site-runtime.js` — boots the original site scripts (menus, animations) after render, in their original order.
- `public/` — all captured assets (images, fonts, CSS, JS), served at the same paths the markup references.
- Global stylesheets load in `index.html` in the original order, so styling is faithful. The class names match the source CSS.

## Pages

- `/` — imports 12 component(s)

## Components

- `src/components/Header.jsx`
- `src/components/Header2.jsx`
- `src/components/Section.jsx`
- `src/components/Services.jsx`
- `src/components/Works.jsx`
- `src/components/About.jsx`
- `src/components/Section2.jsx`
- `src/components/Section3.jsx`
- `src/components/Faq.jsx`
- `src/components/Section4.jsx`
- `src/components/Contact.jsx`
- `src/components/Footer.jsx`

## Hosting note

This is a single-page app with client-side routing. On static hosts, add an SPA fallback (rewrite all paths to `/index.html`) so deep links like `/about` resolve. Netlify/Vercel do this automatically; for plain static hosting configure a catch-all to `index.html`.
# nb
