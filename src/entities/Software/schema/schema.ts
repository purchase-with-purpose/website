import { type Category } from "@/entities/categories";
import { type Indicator } from "./schema.indicators";
import { type Origin } from "./schema.origins";
import { type Platform } from "./schema.platforms";
import { type Note } from "./schema.notes";
import { type Tier } from "./schema.tiers";
import { type Evaluation } from "./schema.evaluations";
import { type Feature } from "./schema.features";
import * as u from "@/helpers/utilities";

export type Software = {
  id: u.Brand<"SOFTWARE_ID">;
  label: string;
  swatch: string;
  url: string;
  logo: string;
  description: string;
  features: Feature["id"][];
  indicators: Indicator["id"][];
  incumbent: boolean;
  category: Category["id"];
  platforms: Platform["id"][];
  notes: { value: string; variant: Note["id"] }[];
  tiers: Record<Tier["id"], string | null>;
  evaluations: Record<Evaluation["id"], number | null>;

  company: {
    name: string;
    url: string;
    ownership: Origin["id"];
    headquarters: Origin["id"] | null;
  };
};
