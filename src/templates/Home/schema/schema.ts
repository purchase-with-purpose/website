import type { Category } from "@/entities/categories/";
import { type Props as DataBlockProps } from "@/components/DataBlock";
import { type Software } from "@/entities/software/";

type Action = {
  type: "USER_CHANGES_CATEGORY";
  payload: {
    index: number;
    id: Category["id"];
  };
};

export type Incumbent = {
  label: string;
  logo: string;
  url: string;
};

export type Item = {
  id: string;
  label: string;
  logo: string;
  swatch: string;
  recommended: Omit<DataBlockProps, "variant">[];
};

export type Section = {
  id: Category["id"];
  title: string;
  incumbents: Incumbent[];
  items: Item[];
};

export type Props = {
  sections: Section[];
  dispatch: (action: Action) => void;
};

export type ContainerProps = {
  software: Software[];
};
