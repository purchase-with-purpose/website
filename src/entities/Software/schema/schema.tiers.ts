import * as u from "@/helpers/utilities";
const TIER_ID_ARRAY = ["free", "basic", "premium"] as const;

export type Tier = {
  id: (typeof TIER_ID_ARRAY)[number];
  label: string;
  description: string;
};

const LABELS: Record<Tier["id"], string> = {
  free: "Free Tier",
  basic: "Basic Plan",
  premium: "Premium Plan",
};

const DESCRIPTIONS: Record<Tier["id"], string> = {
  free: "Free Tier",
  basic: "Basic Plan",
  premium: "Premium Plan",
};

export const TIER_VARIANTS = u.fromArray(
  TIER_ID_ARRAY.map(
    (id): Tier => ({
      id,
      label: LABELS[id],
      description: DESCRIPTIONS[id],
    })
  )
);
