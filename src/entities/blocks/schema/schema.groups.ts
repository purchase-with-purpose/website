import * as u from "@/helpers/utilities";
import { type Block } from "./schema.core";

import {
  EVALUATION_VARIANTS,
  FEATURE_VARIANTS,
  INDICATOR_VARIANTS,
  PLATFORM_VARIANTS,
  TIER_VARIANTS,
} from "@/entities/software";

const GROUP_ID_ARRAY = [
  "software.card.recommended",
  "software.card.features",
  "software.card.pricing",
  "software.card.platforms",
  "software.card.ratings",
];

export type Grouped = {
  id: (typeof GROUP_ID_ARRAY)[number];
  blocks: Block["id"][];
  label: string;
  description: string;
};

const LABELS: Record<Grouped["id"], string> = {
  "software.card.recommended": "Recommended",
  "software.card.features": "Features",
  "software.card.pricing": "Pricing",
  "software.card.platforms": "Platforms",
  "software.card.ratings": "Ratings",
};

const DESCRIPTIONS: Record<Grouped["id"], string> = {
  "software.card.recommended": "Recommended",
  "software.card.features": "Features",
  "software.card.pricing": "Pricing",
  "software.card.platforms": "Platforms",
  "software.card.ratings": "Ratings",
};

const BLOCKS: Record<Grouped["id"], Block["id"][]> = {
  "software.card.recommended": [
    ...u
      .keys(INDICATOR_VARIANTS)
      .map((x) => `software.indicators.${x}` as const),
    "software.company.ownership",
    "software.company.headquarters",
  ],
  "software.card.features": [
    ...u.keys(FEATURE_VARIANTS).map((x) => `software.features.${x}` as const),
  ],
  "software.card.pricing": [
    ...u.keys(TIER_VARIANTS).map((x) => `software.tiers.${x}` as const),
  ],
  "software.card.platforms": [
    ...u.keys(PLATFORM_VARIANTS).map((x) => `software.platforms.${x}` as const),
  ],
  "software.card.ratings": [
    ...u
      .keys(EVALUATION_VARIANTS)
      .map((x) => `software.evaluations.${x}.value` as const),
  ],
};

export const GROUP_VARIANTS: Record<Grouped["id"], Grouped> = u.fromArray(
  GROUP_ID_ARRAY.map(
    (id): Grouped => ({
      id,
      label: LABELS[id],
      description: DESCRIPTIONS[id],
      blocks: BLOCKS[id],
    })
  )
);
