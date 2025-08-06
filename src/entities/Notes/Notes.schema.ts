import { z } from "zod";

export const validation = {
  note: z.object({
    id: z.string().uuid(),
    title: z.string().min(1).max(100),
    content: z.string().min(1),
    createdAt: z.date().default(() => new Date()),
    updatedAt: z.date().default(() => new Date()),
  }),
};

export type SoftwareNote = z.infer<typeof validation.note>;