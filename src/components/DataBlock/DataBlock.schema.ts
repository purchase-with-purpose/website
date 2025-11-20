import { type IconVariant } from "@/entities/icons";
import { type Block } from "@/entities/blocks";

export type BaseProps = {
  label: string;
  value: string | null;
  icon: IconVariant;
  url?: string;
  color?: string;
  fill: boolean;
};

export type Props = {
  id: Block["id"];
  value: string | number | null | boolean;
  variant: "compact" | "sidebar";
};
