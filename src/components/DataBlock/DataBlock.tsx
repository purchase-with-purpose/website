import * as schema from "./DataBlock.schema";
import { Compact } from "./Compact";
import { Sidebar } from "./Sidebar";

export const DataBlock = (props: schema.Props) => {
  const { variant } = props;

  if (variant === "compact") {
    return <Compact {...props} />;
  }

  if (variant === "sidebar") {
    return <Sidebar {...props} />;
  }

  throw new Error(`Unsupported DataBlock variant: ${variant}`);
};
