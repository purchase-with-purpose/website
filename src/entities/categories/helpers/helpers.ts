import { calcCardPreview } from "@/entities/blocks";
import * as schema from "../schema";
import { type Software } from "@/entities/software";
import { type Block } from "@/entities/blocks";

export { calcCardPreview, type Group } from "@/entities/blocks";

const CACHE = {
  calcAllCategoryPreview: new Map<schema.Category["id"], Block[]>(),
};

export const calcAllCategoryPreviews = (props: {
  software: Software[];
  category: schema.Category["id"];
}): Record<Software['id'], Block[]> => {
  const { software, category } = props;

    const inner = 
};
