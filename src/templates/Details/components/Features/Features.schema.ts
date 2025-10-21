import { type Feature } from "@/entities/Software";

export type Props = {
  features: { id: Feature["id"]; value: string | null }[];
};
