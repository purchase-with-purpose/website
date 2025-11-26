import { type IconVariant } from "@/entities/icons";

export type Props = {
  label: string;
  value: string | null;
  icon: IconVariant;
  url: string | null;
  color: string;
  fill: boolean;
  variant: "compact" | "sidebar" | "square";
};
