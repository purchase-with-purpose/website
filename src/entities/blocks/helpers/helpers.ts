import type { GeneralIconVariant } from "@/entities/icons";

import {
  type Block,
  type Group,
  BLOCK_VARIANTS,
  GROUP_VARIANTS,
} from "../schema";

import {
  ORIGIN_VARIANTS,
  FEATURE_VARIANTS,
  PLATFORM_VARIANTS,
  TIER_VARIANTS,
  type Evaluation,
  type Software,
} from "@/entities/software";

import * as u from "@/helpers/utilities";

const CACHE = {
  getFromGroup: new Map<Group["id"], Block[]>(),
  getValidFromGroup: new Map<Group["id"], Block[]>(),

  calcCardPreview: new Map<
    Software["id"],
    ReturnType<typeof calcCardPreview>
  >(),
};

export const getFromGroup = (props: { group: Group["id"] }): Block[] => {
  const { group } = props;
  if (CACHE.getFromGroup.has(group)) {
    return CACHE.getFromGroup.get(group)!;
  }

  const result = u.values(BLOCK_VARIANTS).filter((x) => x.group === group);
  CACHE.getFromGroup.set(group, result);
  return result;
};

export const calcRating = (props: {
  value: number | null;
  system: Evaluation["system"];
}): { label: string; colour: string; icon: GeneralIconVariant } | null => {
  const { value, system } = props;
  if (value === null) return null;

  if (system === "boolean" && value === 1) {
    return {
      label: "Pass",
      colour: "#22AE29",
      icon: "check",
    };
  }

  if (system === "boolean" && value === 0) {
    return {
      label: "Fail",
      colour: "red",
      icon: "cross",
    };
  }

  if (system === "out-of-5") {
    const percentage = Math.floor((value / 5) * 100);

    if (percentage >= 60) {
      return {
        label: `${percentage} %`,
        colour: "#22AE29",
        icon: "cross",
      };
    }
    if (percentage >= 40) {
      return {
        label: `${percentage} %`,
        colour: "#ED6C02",
        icon: "cross",
      };
    }

    return {
      label: `${percentage} %`,
      colour: "red",
      icon: "cross",
    };
  }

  throw new Error(`Unknown rating system: ${system}`);
};

export const calcGroupBlocks = (props: {
  group: Group["id"];
  software: Software;
}): Block[] => {
  const { group, software } = props;

  if (group === "recommended") {
    const ownership = ORIGIN_VARIANTS[software.company.ownership];

    const headquarters =
      software.company.headquarters &&
      ORIGIN_VARIANTS[software.company.headquarters];

    return u.filter([
      {
        id: "software.company.ownership",
        group: "recommended",
        icon: ownership.icon,
        label: ownership.label,
      },
      headquarters && {
        id: "software.company.headquarters",
        group: "recommended",
        icon: headquarters.icon,
        label: headquarters.label,
      },
    ]);
  }

  if (group === "features") {
    return software.features.map((x) => {
      const match = FEATURE_VARIANTS[x];

      return {
        id: `software.features.${x}` as const,
        icon: match.icon,
        group: "features",
        label: match.label,
      };
    });
  }

  if (group === "platforms") {
    return software.platforms.map((x) => {
      const match = PLATFORM_VARIANTS[x];

      return {
        group: "platforms",
        icon: match.icon,
        id: `software.platforms.${x}` as const,
        label: match.label,
      };
    });
  }

  if (group === "pricing") {
    return u.filter([
      software.tiers.free && {
        id: "software.tiers.free",
        group: "pricing",
        icon: TIER_VARIANTS.free.icon,
        label: software.tiers.free,
      },

      software.tiers.basic && {
        id: "software.tiers.basic",
        group: "pricing",
        icon: TIER_VARIANTS.basic.icon,
        label: software.tiers.basic,
      },

      software.tiers.premium && {
        id: "software.tiers.premium",
        group: "pricing",
        icon: TIER_VARIANTS.premium.icon,
        label: software.tiers.premium,
      },
    ]);
  }

  if (group === "ratings") {
    return u.filter([
      software.tiers.free && {
        id: "software.evaluations.android",
        group: "ratings",
        icon: TIER_VARIANTS.free.icon,
        label: software.tiers.free,
      },
    ]);
  }

  return [];
};

type PreviewData = {
  id: Software["id"];
  max: number;
  blocks: Record<Group["id"], Block[]>;
};

export const calcCardPreview = (props: { software: Software }): PreviewData => {
  const { software } = props;

  if (CACHE.calcCardPreview.has(software.id)) {
    return CACHE.calcCardPreview.get(software.id)!;
  }

  const result: PreviewData = {
    id: software.id,
    blocks: {
      features: [],
      other: [],
      platforms: [],
      pricing: [],
      ratings: [],
      recommended: [],
    },
    max: 0,
  };

  u.keys(GROUP_VARIANTS).forEach((x) => {
    const inner = calcGroupBlocks({ group: x, software });

    if (inner.length > result.max) {
      result.max = inner.length;
    }

    result.blocks[x] = inner;
  });

  CACHE.calcCardPreview.set(software.id, result);
  return result;
};
