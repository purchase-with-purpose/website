# Architecture

The PWP codebase consists of six different types of structures, each located in a corresponding folder within the `src` directory. These are as follows:

---

## 🚧 Entities
`src/entities/`

Various [TypeScript](https://www.typescriptlang.org/) types, [Zod](https://zod.dev/) validation and helper functions closely associated with common pre-defined data structures used throughout the codebase.

---

## ⚡ Data  

`src/data/`

Methods for getting, setting and subscribing to data. 

Due to the content-driven nature of PWP, there is almost no fetching and/or mutation during runtime. Most data is retrieved dynamically via HTTP from the [Contentful](https://www.contentful.com/) CMS instance during building/rebuilding the site, and fed directly to `view` templates.

---

## 🔨 Helpers

`src/helpers/`

Similar to `entities`, however are not centered around domain-specific data structures, but instead general or built-in TypeScript structures like numbers, strings, promises, etc.

---

## 📺 Views

`src/views/`

Specific full-page [React](https://react.dev/) component meant to render a specific UI route in full. These components are usually combined with their corresponding data in `routes` to render a fully usable page. Note that `views` are not allowed to directly query/access `data` and should instead simply accept props from their parent `routes` logic. 

Due to `views` being full-page components, they are (definitionally) mutually exclusive and you are only allowed to render one `view` component per route.

Note that the reason why `views` are not allowed to talk directly to `data` is to make UI components easily testable in Storybook without coupling them to data-fetching logic.

---

## 💎 Components

`src/components/`

Effectively identical to `views`, however `components` are generally smaller, reusable UI spread across several views. Avoid preemptively abstracting UI logic into components unless it is used across two different views first.

---

## 🚦 Routes  

`src/routes`

Effectively, the built-in `pages` folder in a standard [Astro](https://astro.build/) project, renamed to `routes` for semantic clarity. Consult the Astro [documentation for the pages folder](https://docs.astro.build/en/basics/astro-pages/) for more details.

Since this folder doesn't contain any abstractions itself, and simply facilitates Astro's built-in routing system, there is (unlike all above sections) no individual documentation per route abstraction in the folder

The primary purpose of `routes` is to import both `data` and a `view` component, and then to pass the `data` to the `view` component. Effectively functioning as the glue between data and UI components.

