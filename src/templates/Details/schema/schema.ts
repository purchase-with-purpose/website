import { type Props as DataBlockProps } from "@/components/DataBlock";
import { type Note } from "@/entities/software";
import { type IconVariant } from "@/entities/icons";

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
  platforms: DataBlockProps[];
  indicators: DataBlockProps[];
  logo: string;
  url: string;
};
