import { type Props as IconProps } from "@/components/Icon";
import * as Display from "@/entities/Display";

export type BaseProps = {
  label: string;
  value: string | null;
  icon: IconProps["variant"];
};

export type Props = {
  id: Display.ItemId;
  value: string | null;
};
