import { z } from "zod";
import * as Indicator from "../Indicator";
import * as Category from "../Category";
import * as Origin from "../Origin";

const initial = {
  additional: z.object({
    label: z.string(),
    variant: z.enum(["info", "disclaimer", "resource"]),
    description: z.string(),
    url: z.string().nullish(),
  }),
};

export const validation = {
  ...initial,
  item: z.object({
    id: z.string(),
    label: z.string(),
    logo: z.string(),
    description: z.string(),
    indicators: z.array(Indicator.validation.item.shape.id),
    category: Category.validation.item.shape.id,
    incumbent: z.boolean(),
    additional: z.array(initial.additional),
    origin: Origin.validation.item.shape.id,
  }),
};

export type Item = z.infer<typeof validation.item>;
export type Additional = z.infer<typeof initial.additional>;
