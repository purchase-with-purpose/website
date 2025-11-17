import * as u from "@/helpers/utilities";

const ARRAY = [
  "recommended",
  "company",
  "pricing",
  "features",
  "platforms",
  "ratings",
  "other",
] as const;

export type Group = {
  id: (typeof ARRAY)[number];
  label: string;
  description: string;
};

const LABELS: Record<Group["id"], string> = {
  recommended: "Recommended",
  features: "Features",
  company: "Company",
  pricing: "Pricing",
  platforms: "Platforms",
  ratings: "Ratings",
  other: "Other",
};

const DESCRIPTIONS: Record<Group["id"], string> = {
  recommended: "",
  features: "",
  company: "",
  pricing: "",
  platforms: "",
  ratings: "",
  other: "",
};

export const GROUP_VARIANTS = u.fromArray(
  ARRAY.map(
    (id): Group => ({
      id,
      label: LABELS[id],
      description: DESCRIPTIONS[id],
    })
  )
);
