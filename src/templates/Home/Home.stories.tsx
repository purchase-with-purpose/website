import * as u from "@/helpers/utilities";
import { useState } from "react";
import { Home } from "./Home";
import { Shell } from "@/components/Shell";
import { calcItems } from "./helpers";
import * as schema from "./schema";
import { CATEGORY_VARIANTS } from "@/entities/categories";
import * as __mocking__ from "@/entities/software/__mocking__";

// import { Card } from "./Card";
// import * as __mocking__ from "@/entities/software/__mocking__";
// import { calcItems } from "../../helpers";

// export default {
//   title: "Templates/Home/Card",
// };

const array = new Array(100)
  .fill(null)
  .map(() => __mocking__.createItem())
  .filter((x) => {
    return x.recommended === true;
  });

export default {
  title: "Templates/Home",
  parameters: {
    layout: "fullscreen",
  },
};

const mocked = Array.from({ length: 100 }).map(() => __mocking__.createItem());

export const Basic = () => {
  const sections: schema.Props["sections"] = u
    .values(CATEGORY_VARIANTS)
    .map((x): schema.Props["sections"][number] => {
      const inner = mocked.filter((y) => y.category === x.id);
      const result = calcItems(inner)
        .sort((a, b) => b.recommended.length - a.recommended.length)
        .slice(0, 4);

      return {
        id: x.id,
        title: x.label,
        incumbents: CATEGORY_VARIANTS[x.id].incumbents,
        items: result,
      };
    });

  return <Home dispatch={console.log} sections={sections.flat()} />;
};
