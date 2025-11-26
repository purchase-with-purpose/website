import { type Category } from "@/entities/categories";
import * as schema from "../schema";

const CACHE = {
  getByCategory: new Map<Category["id"], schema.Software[]>(),
};

export const getByCategory = (props: {
  software: schema.Software[];
  category: Category["id"];
}): schema.Software[] => {
  const { software, category } = props;
  if (CACHE.getByCategory.has(category)) {
    return CACHE.getByCategory.get(category)!;
  }

  const result = software.filter((s) => s.category === category);
  CACHE.getByCategory.set(category, result);
  return result;
};
