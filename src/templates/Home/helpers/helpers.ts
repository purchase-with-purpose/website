import { type Software } from "@/entities/software";
import * as schema from "../schema";
import * as u from "@/helpers/utilities";

import {
  GROUP_VARIANTS,
  BLOCK_VARIANTS,
  getValue,
  display,
} from "@/entities/blocks";

export const calcItems = (items: Software[]): schema.Item[] => {
  const { blocks } = GROUP_VARIANTS["software.card.recommended"];

  return items.map((x): schema.Item => {
    return {
      id: x.id,
      label: x.label,
      logo: x.logo,
      swatch: x.swatch,
      isRecommended: x.recommended,
      recommended: u.filter(
        blocks.map((id) => {
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
            fill: true,
            icon: display.calcIcon(inner) || "star",
            label,

            url: display.calcUrl({
              software: x,
              id,
            }),

            value:
              id === "software.tiers.free"
                ? "Free Tier"
                : display.calcValue(inner),
          };
        })
      ),
    };
  });
};
