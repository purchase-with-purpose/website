import { type Props as DataBlockProps } from "@/components/DataBlock";
import { type Category } from "@/entities/categories";
import { type Note, type Software } from "@/entities/software";
import { type IconVariant } from "@/entities/icons";

type Action = {
  type: "USER_CHANGES_CATEGORY";
  payload: {
    index: number;
    id: Category["id"];
  };
};

export type Props = {
  title: string;
  breadcrumbs: { label: string; url: null | string }[];
  description: string;
  screenshots: string[];
  features: { label: string; icon: IconVariant; description: string }[];
  notes: { value: string; variant: Note["id"] }[];
  company: DataBlockProps[];
  tiers: DataBlockProps[];
  ratings: DataBlockProps[];
  platforms: (DataBlockProps & { description: string })[];
  indicators: DataBlockProps[];
  logo: string;
  url: string;
  dispatch: (action: Action) => void;
};

export type ContainerProps = {
  software: Software;
};
