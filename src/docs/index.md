# 📄 Overview

## Structure

The PWP web client codebase is made up of six types of code modules, each located in a corresponding folder within the `src` directory:

---

### [🚧 Entities](/entities)
`src/entities/`

Location of [TypeScript](https://www.typescriptlang.org/) types, [Zod](https://zod.dev/) validation and helper  unctions associated with common pre-defined data structures, for example "users", "categories", etc.

---

### ⚡ [Data](/data)    

`src/data/`

Contains methods that allow getting, setting and subscribing to specific pieces of application data during runtime and/or the build pipeline. 

Due to the content-driven nature of PWP, there is very little runtime data fetching and/or mutation. Most data is retrieved dynamically via HTTP from the [Contentful](https://www.contentful.com/) CMS instance when building/rebuilding the site.

---

### 🔨 [Helpers](/helpers)  

`src/helpers/`

Similar to `Entities`, however mostly consists of general-purpose functions that are often bound to built-in JavaScript types such as [`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), [`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String),  
etc., instead of domain-specific data structures.

---

### 💎 [Components](/components)  

`src/components/`

Reusable [React](https://react.dev/) UI-only components that are used across different `Views` components. These components should never have direct access to `Data` and should only receive props from their parent `Views` logic.

---

### 📺 [Views](/views)  

`src/views/`

React UI components that are meant to render a specific type of full-page route. In terms of behaviour, `Views` are identical to `Components`, however they are meant to represent a single full-page UI — meaning they are mutually exclusive when used in `Routers`.

---

### 🚦 Routes  

`src/routes`

Note that this is simply the built-in `pages` folder in a standard [Astro](https://astro.build/) project, renamed to `routes` for semantic clarity. Consult the Astro [documentation for the pages folder](https://docs.astro.build/en/basics/astro-pages/) for more details.

Since this folder doesn't contain any custom abstraction and is simply used to facilitate Astro's built-in routing system, there is (unlike the above types of modules) no section with individual documentation per route abstraction.

Note that each route file typically imports content from `Data` and passes it down to a `View` component, thereby acting as the glue between the data and UI to be rendered at a specific URL.
