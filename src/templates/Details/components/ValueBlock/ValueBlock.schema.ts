import { type Props as IconProps } from "@/components/Icon";

export type Props = {
  secondary: string;
  primary: string;
  icon?: IconProps["variant"];
  url?: string;
  color?: string;
};
