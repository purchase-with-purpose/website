import { z } from "zod";

export const INDICATOR_ID_ARRAY = [
  "environmental",
  "open-source",
  "privacy",
  "self-hosted",
] as const;

export const validation = {
  item: z.object({
    id: z.enum(INDICATOR_ID_ARRAY),
    label: z.string(),
    swatch: z.string(),
  }),
};

export type Item = z.infer<typeof validation.item>;
