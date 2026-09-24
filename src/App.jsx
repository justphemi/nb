import { useEffect } from "react";
import { pages } from "./pages.jsx";

// Canonicalize the visited URL to a route key the same way the build does, so
// "/about", "/about/", "/about/index.html" and "/about/index" all resolve to the
// "/about" page instead of falling back to the homepage.
function routeKey(pathname) {
  try {
    let p = decodeURIComponent(pathname || "/");
    p = p
      .replace(/\.html?$/i, "")
      .replace(/\/index$/i, "")
      .replace(/\/+$/, "");
    return p || "/";
  } catch {
    return "/";
  }
}

export default function App() {
  const entry = pages[routeKey(window.location.pathname)] ?? pages["/"];
  const Page = entry.component;

  useEffect(() => {
    document.title = entry.title;
  }, [entry.title]);

  return <Page />;
}
