import { z } from "zod";

export const schema = z.object({
  CONTENTFUL_SPACE_ID: z.string().min(1),
  CONTENTFUL_DELIVERY_TOKEN: z.string().min(1),
});

export const getEnv = () => {
  const inner = schema.parse(import.meta.env);
  return schema.parse(inner);
};
