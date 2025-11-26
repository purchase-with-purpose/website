import { type Software } from "@/entities/software";
import * as u from "@/helpers/utilities";
import { type Item } from "../schema";

import {
  BLOCK_VARIANTS,
  GROUP_VARIANTS,
  getValue,
  display,
} from "@/entities/blocks";

export const calcItems = (items: Software[]): Item[] => {
  return items.map((x): Item => {
    const cells: Item["cells"] = u.filter(
      u.values(GROUP_VARIANTS).map(({ blocks }): Item["cells"][number] => {
        const result = blocks.map(
          (id): Item["cells"][number][number] | null => {
            const { label } = BLOCK_VARIANTS[id];

            const value = getValue({
              software: x,
              id,
            });

            if (!value) return null;

            const inner = {
              id,
              value,
            };

            return {
              color: display.calcColour(inner),
              value: display.calcValue(inner),
              fill: id.includes(".indicators."),
              icon: display.calcIcon(inner) || "star",
              label,
              url: display.calcUrl({
                software: x,
                id,
              }),
            };
          }
        );

        return u.filter(result);
      })
    );

    const topHeight = 6;
    const max = Math.max(...cells.map((y) => y.length)) * 2;

    return {
      height: (topHeight + max) * 16,
      id: x.id,
      label: x.label,
      logo: x.logo,
      cells,
      swatch: x.swatch,
    };
  });
};
