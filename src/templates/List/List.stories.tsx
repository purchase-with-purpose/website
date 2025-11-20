import { List } from "./List";
import { CATEGORY_VARIANTS } from "@/entities/categories";
import * as __mocking__ from "@/entities/software/__mocking__";

export default {
  title: "Templates/List",
  parameters: {
    layout: "fullscreen",
  },
};

const items = Array.from({ length: 20 }).map(() => __mocking__.createItem());

export const Basic = () => (
  <List category={CATEGORY_VARIANTS.browser} items={items} />
);
