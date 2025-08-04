import { z } from "zod";
import * as Indicator from "../Indicator";
import * as Category from "../Category";
import * as Origin from "../Origin";

const initial = {
  note: z.object({
    id: z.string(),
    variant: z.enum(["info", "disclaimer"]),
    value: z.string(),
  }),
  resource: z.object({
    id: z.string(),
    label: z.string(),
    description: z.string(),
    url: z.string(),
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
    notes: z.array(initial.note),
    resources: z.array(initial.resource),
    origin: Origin.validation.item.shape.id,
  }),
};

export type Item = z.infer<typeof validation.item>;
export type Note = z.infer<typeof initial.note>;
export type Resource = z.infer<typeof initial.resource>;
