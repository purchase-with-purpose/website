import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PWP Web Client",
  description: "Developer documentation for Purchase with Purpose web client.",
  themeConfig: {
    nav: [
      // { text: "📄", link: "/src/docs" },
      // { text: "🚧", link: "/entities" },
      // { text: "⚡", link: "/data" },
      // { text: "🔨", link: "/helpers" },
      // { text: "💎", link: "/components" },
      // { text: "📺", link: "/views" },
    ],
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
          items: [
            {
              text: "Software",
              link: "/entities/software",
            },
            { text: "Categories", link: "/entities/categories" },
          ],
        },
        {
          text: "🔨 Helpers",
          items: [{ text: "Utilities", link: "/helpers/utilities" }],
        },
        {
          text: "💎 Components",
          items: [
            { text: "DataBlock", link: "/components/Datablock" },
            {
              text: "Icon",
              link: "/components/Icon",
            },
          ],
        },
      ],

      // "/data": [
      //   {
      //     text: "⚡ Data",
      //     items: [{ text: "4", link: "/" }],
      //   },
      // ],
      // "/helpers": ,
      // "/components": [

      // ],
      // "/views": [
      //   {
      //     text: "📺 Views",
      //     items: [{ text: "4", link: "/" }],
      //   },
      // ],
      // "/": [
      //   {
      //     text: "📄 Overview",
      //     items: [{ text: "4", link: "/" }],
      //   },
      // ],
    },
  },
});
