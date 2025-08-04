import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import * as Category from "./entities/Category";
import * as Indicator from "./entities/Indicator";
import * as Origin from "./entities/Origin";
import * as Software from "./entities/Software";

const categories = defineCollection({
  loader: () => Category.items,
  schema: Category.validation.item,
});

const indicators = defineCollection({
  loader: () => Indicator.items,
  schema: Indicator.validation.item,
});

const origins = defineCollection({
  loader: () => Origin.items,
  schema: Origin.validation.item,
});

const software = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/data/software" }),
  schema: Software.validation.item,
});

export const collections = { categories, indicators, software, origins };
