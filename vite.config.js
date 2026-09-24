import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  // The preview renders a captured site whose replayed scripts throw non-fatal
  // errors; don't let Vite's HMR overlay cover the page.
  server: { hmr: { overlay: false } },
});
