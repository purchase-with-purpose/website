import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PWP Web Client",
  description: "Developer documentation for Purchase with Purpose web client.",
  base: "/website/",
  themeConfig: {
    sidebar: {
      "/": [
        {
          text: "📄 Overview",
          items: [{ text: "✅ Architecture", link: "/" }],
        },
        {
          text: "🚧 Entities",
          items: [
            {
              text: "✅ Software",
              link: "/entities/software",
            },
            { text: "Categories", link: "/entities/categories" },
            {
              text: "Icons",
              link: "/entities/icons",
            },
            {
              text: "Blocks",
              link: "/entities/blocks",
            },
          ],
        },
        {
          text: "⚡ Data",
          items: [],
        },
        {
          text: "🔨 Helpers",
          items: [],
        },
        {
          text: "💎 Components",
          items: [],
        },
      ],
    },
  },
});
