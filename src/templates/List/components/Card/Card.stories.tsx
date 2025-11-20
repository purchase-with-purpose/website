import { Card } from "./Card";
import { useState } from "react";
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

export const Basic = () => {
  const [active, setActive] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          if (active < 1) return;
          setActive((x) => x - 1);
        }}
      >
        -
      </button>

      <button
        onClick={() => {
          if (active > 3) return;
          setActive((x) => x + 1);
        }}
      >
        +
      </button>
      <Card active={active} item={item} columns={u.values(inner.blocks)} />
    </>
  );
};
