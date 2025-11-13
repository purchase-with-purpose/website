import { Card } from "./Card";
import * as __mocking__ from "@/entities/Software/__mocking__";
import { calcColumns } from "@/entities/Display";

export default {
  title: "Templates/List/Card",
};

const item = __mocking__.createItem();

export const Basic = () => (
  <Card
    offset={0}
    active={0}
    item={item}
    columns={
      calcColumns({
        item,
      }).columns
    }
  />
);
