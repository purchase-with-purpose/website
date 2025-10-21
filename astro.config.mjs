import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [react(), markdoc()],

  vite: {
    plugins: [tailwindcss()],
  },
});