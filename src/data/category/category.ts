import { CATEGORY_VARIANTS, type Category } from "../../entities/categories";
import { z, ZodType } from "zod";

export const loader = () => {
  return CATEGORY_VARIANTS;
};

export const schema = z.any({}) as ZodType<Category>;
