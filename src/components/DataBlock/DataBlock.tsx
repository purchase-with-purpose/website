import * as schema from "./DataBlock.schema";
import { Compact } from "./Compact";
import { Sidebar } from "./Sidebar";
import { Square } from "./Square";

export const DataBlock = (props: schema.Props) => {
  const { variant } = props;

  if (variant === "compact") {
    return <Compact {...props} />;
  }

  if (variant === "sidebar") {
    return <Sidebar {...props} />;
  }

  if (variant === "square") {
    return <Square {...props} />;
  }

  throw new Error(`Unsupported DataBlock variant: ${variant}`);
};
