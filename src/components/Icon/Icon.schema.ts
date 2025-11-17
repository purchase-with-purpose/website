import { type IconVariant } from "@/entities/icons";

export type Props = {
  variant: IconVariant;
  size?: "xs" | "s" | "m" | "l";
  importance?: "primary" | "secondary";
};
