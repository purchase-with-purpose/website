import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import * as Entity from "./entities/Software";

const software = defineCollection({
  loader: file("./src/data/software.json"),
  schema: Entity.validation,
});

export const collections = { software };
