import * as u from "@/helpers/utilities";
export const TIER_ID_ARRAY = ["free", "basic", "premium"] as const;

type Tier = {
  id: (typeof TIER_ID_ARRAY)[number];
  label: string;
};

const LABELS: Record<Tier["id"], string> = {
  free: "Free Tier",
  basic: "Basic Plan",
  premium: "Premium Plan",
};

const tiers = u.fromArray(
  TIER_ID_ARRAY.map((id) => ({
    id,
    label: LABELS[id],
  }))
);

export { tiers };
export type { Tier };
