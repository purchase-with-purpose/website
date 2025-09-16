import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import * as entity from "./schemas/software";

const software = defineCollection({
  loader: file("./src/data/software.json"),
  schema: entity.validation,
});

export const collections = { software };
