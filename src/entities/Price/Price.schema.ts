import { z } from "zod";

export const PRICE_TIERS = ["free", "entry", "complete"] as const;

export const validation = {
  price: z.object({
    id: z.string().uuid(),
    tier: z.enum(PRICE_TIERS),
    label: z.string().min(1).max(50),
    description: z.string().optional(),
  }),
};

export type Price = z.infer<typeof validation.price>;
