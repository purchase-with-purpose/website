import { z } from "zod";

export const validation = {
  item: z.object({
    id: z.string(),
    label: z.string(),
    icon: z.string(),
  }),
};

export type Item = z.infer<typeof validation.item>;
