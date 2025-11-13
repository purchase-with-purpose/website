import * as u from "@/helpers/utilities";

export const GROUP_ID_ARRAY = [
  "recommended",
  "company",
  "pricing",
  "features",
  "platforms",
  "ratings",
] as const;

export const GROUP_LABELS: Record<(typeof GROUP_ID_ARRAY)[number], string> = {
  recommended: "Recommended",
  features: "Features",
  company: "Company",
  pricing: "Pricing",
  platforms: "Platforms",
  ratings: "Ratings",
};

export type Group = {
  id: (typeof GROUP_ID_ARRAY)[number];
  label: string;
};

export const groups = u.fromArray(
  GROUP_ID_ARRAY.map((id) => ({
    id,
    label: GROUP_LABELS[id],
  }))
);
