import { Card } from "./Card";
import * as __mocking__ from "@/entities/software/__mocking__";
import { calcCardPreview } from "@/entities/blocks";
import * as u from "@/helpers/utilities";

export default {
  title: "Templates/List/Card",
};

const item = __mocking__.createItem();

const inner = calcCardPreview({
  software: item,
});

export const Basic = () => (
  <Card active={0} item={item} columns={u.values(inner.blocks)} />
);
