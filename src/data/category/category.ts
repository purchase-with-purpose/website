import { categories, type Category } from "../../entities/Software";
import { z, ZodType } from "zod";

export const loader = () => {
  return categories;
};

export const schema = z.any({}) as ZodType<Category>;
