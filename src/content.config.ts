import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";
import * as Category from "./entities/Category";
import * as Indicator from "./entities/Indicator";
import * as Origin from "./entities/Origin";
import * as Software from "./entities/Software";

// const categories = defineCollection({
//   loader: file("src/data/categories.json"),
//   schema: Category.validation.item,
// });

// const indicators = defineCollection({
//   loader: file("src/data/indicators.json"),
//   schema: Indicator.validation.item,
// });

const origins = defineCollection({
  loader: file("src/data/origins.json"),
  schema: Origin.validation.item,
});

// const software = defineCollection({
//   loader: file("src/data/software.json"),
//   schema: Software.validation.item,
// });

export const collections = { origins };
