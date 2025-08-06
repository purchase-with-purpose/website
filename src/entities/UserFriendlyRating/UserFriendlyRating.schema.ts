import { z } from "zod";

export const USER_FRIENDLY_RATING_ID_ARRAY = [
  "easy",
  "medium",
  "hard",
] as const;

export const validation = {
  item: z.object({
    id: z.enum(USER_FRIENDLY_RATING_ID_ARRAY),
    label: z.string().min(1, "Label cannot be empty"),
    description: z.string().min(10, "Description must be at least 10 characters").optional(),
  }),
};

export type Item = z.infer<typeof validation.item>;