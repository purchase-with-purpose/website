import { type Props as ValueBlockProps } from "@/components/DataBlock";

export type Props = {
  title: string;
  blocks: Omit<ValueBlockProps, "variant">[];
};
