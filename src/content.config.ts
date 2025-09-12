import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import * as Category from "./entities/Category";
import * as Origin from "./entities/Origin";
import * as Software from "./entities/Software";

const categories = defineCollection({
  loader: () => Category.items,
  schema: Category.validation.item,
});

const origins = defineCollection({
  loader: () => Origin.items,
  schema: Origin.validation.item,
});

const software = defineCollection({
  loader: file("./src/data/software.json"),
  schema: Software.validation.item,
});

export const collections = { categories, software, origins };
