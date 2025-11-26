import { Card } from "./Card";
import { useState } from "react";
import * as __mocking__ from "@/entities/software/__mocking__";
import { calcItems } from "../../helpers";

export default {
  title: "Templates/List/Card",
};

const inner = calcItems([__mocking__.createItem()]);

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
      <Card active={active} {...inner[0]} innerWidth={window.innerWidth} />
    </>
  );
};
