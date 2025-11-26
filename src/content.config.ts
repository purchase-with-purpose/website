import { defineCollection } from "astro:content";
import * as softwareData from "./data/software";
import * as categoriesData from "./data/category";

const software = defineCollection({
  loader: softwareData.loader,
  schema: softwareData.schema,
});

const categories = defineCollection({
  schema: categoriesData.schema,
  loader: categoriesData.loader,
});

export const collections = { software, categories };
