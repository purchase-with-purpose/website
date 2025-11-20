import * as schema from "./DataBlock.schema";
import { Compact } from "./Compact";
import {
  BLOCK_VARIANTS,
  calcColour,
  calcIcon,
  calcValue,
} from "@/entities/blocks";
import { Sidebar } from "./Sidebar";
import * as u from "@/helpers/utilities";

export const DataBlock = (props: schema.Props) => {
  const { variant, id, value } = props;
  if (!value) return null;
  const match = u.assert(BLOCK_VARIANTS[id]);

  const inner: schema.BaseProps = {
    label: match.label,
    fill: id.includes(".indicators."),

    value: calcValue({
      id,
      value,
    }),

    color: calcColour({
      id,
      value,
    }),

    icon:
      calcIcon({
        id,
        value,
      }) || "star",
  };

  if (variant === "compact") {
    return <Compact {...inner} />;
  }

  if (variant === "sidebar") {
    return <Sidebar {...inner} />;
  }

  throw new Error(`Unsupported DataBlock variant: ${variant}`);
};
