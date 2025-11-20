import type { IconVariant } from "@/entities/icons";
import * as u from "@/helpers/utilities";

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
  type Software,
  EVALUATION_VARIANTS,
} from "@/entities/software";

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

export const calcColour = (props: {
  id: Block["id"];
  value: number | string | boolean;
}): string => {
  const { id, value } = props;

  if (id.startsWith("software.tiers.")) {
    return "#543BF1";
  }

  if (id.startsWith("software.evaluations.")) {
    const evaluation = id.replace("software.evaluations.", "");

    const match =
      EVALUATION_VARIANTS[evaluation as keyof typeof EVALUATION_VARIANTS];

    if (match.system === "boolean") {
      return value === 1 ? "#22AE29" : "#ED6C02";
    }

    if (match.system === "out-of-5") {
      if (Number(value) >= 3) return "#22AE29";
      if (Number(value) > 1) return "#ED6C02";
      return "red";
    }

    throw new Error(`Unknown evaluation system for id: ${id}`);
  }

  return "black";
};

export const calcValue = (props: {
  id: Block["id"];
  value: number | string | boolean;
}): string | null => {
  const { id, value } = props;
  if (value === null) return null;

  if (
    id === "software.company.headquarters" ||
    id === "software.company.ownership"
  ) {
    if (typeof value !== "string") return null;
    const match = (ORIGIN_VARIANTS as any)[value];
    return match.label;
  }

  if (id.startsWith("software.platforms.")) {
    const platform = id.replace("software.platforms.", "");
    return (PLATFORM_VARIANTS as any)[platform].label;
  }

  if (id.startsWith("software.features.")) {
    const feature = id.replace("software.features.", "");
    return (FEATURE_VARIANTS as any)[feature].label;
  }

  if (id.startsWith("software.evaluations.")) {
    const evaluation = id.replace("software.evaluations.", "");

    const match =
      EVALUATION_VARIANTS[evaluation as keyof typeof EVALUATION_VARIANTS];

    if (match.system === "boolean") {
      return value === 1 ? "Pass" : "Fail";
    }

    if (match.system === "out-of-5") {
      const percentage = Math.round((Number(value) / 5) * 100);
      return `${percentage} %`;
    }

    throw new Error(`Unknown evaluation system for id: ${id}`);
  }

  return value.toString();
};

export const calcIcon = (props: {
  id: Block["id"];
  value: number | string | boolean | null;
}): null | IconVariant => {
  const { id, value } = props;
  if (value === null) return null;

  if (id === "software.company.headquarters") {
    return `flag-${value.toString().toLowerCase()}` as any;
  }

  if (id === "software.company.ownership") {
    return `flag-${value.toString().toLowerCase()}` as any;
  }

  if (id.startsWith("software.platforms.")) {
    const platform = id.replace("software.platforms.", "");
    return PLATFORM_VARIANTS[platform as keyof typeof PLATFORM_VARIANTS].icon;
  }

  if (id.startsWith("software.features.")) {
    const feature = id.replace("software.features.", "");
    return FEATURE_VARIANTS[feature as keyof typeof FEATURE_VARIANTS].icon;
  }

  if (id.startsWith("software.evaluations.")) {
    const evaluation = id.replace("software.evaluations.", "");

    const match =
      EVALUATION_VARIANTS[evaluation as keyof typeof EVALUATION_VARIANTS];

    if (match.system === "boolean") {
      return value === 1 ? "check" : "cross";
    }

    if (match.system === "out-of-5") {
      if (Number(value) >= 3) return "check";
      if (Number(value) > 2) return "cross";
      return "cross";
    }

    throw new Error(`Unknown evaluation system for id: ${id}`);
  }

  return BLOCK_VARIANTS[id].icon;
};

export const calcGroupBlocks = (props: {
  group: Group["id"];
  software: Software;
}): Block[] => {
  const { group, software } = props;

  if (group === "recommended") {
    const ownership =
      software.company.ownership && ORIGIN_VARIANTS[software.company.ownership];

    const headquarters =
      software.company.headquarters &&
      ORIGIN_VARIANTS[software.company.headquarters];

    return u.filter([
      ownership && {
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

  throw new Error(`Unsupported group id: ${group}`);
};

type PreviewData = {
  id: Software["id"];
  software: Software;
  max: number;
  blocks: Record<Exclude<Group["id"], "other">, Block[]>;
};

export const calcCardPreview = (props: { software: Software }): PreviewData => {
  const { software } = props;

  if (CACHE.calcCardPreview.has(software.id)) {
    return CACHE.calcCardPreview.get(software.id)!;
  }

  const result: PreviewData = {
    id: software.id,
    software,
    blocks: {
      recommended: [],
      features: [],
      platforms: [],
      pricing: [],
      ratings: [],
      // other: [],
    },
    max: 0,
  };

  u.keys(GROUP_VARIANTS).forEach((x) => {
    if (x === "other") return;
    const inner = calcGroupBlocks({ group: x, software });

    if (inner.length > result.max) {
      result.max = inner.length;
    }

    result.blocks[x] = inner;
  });

  CACHE.calcCardPreview.set(software.id, result);
  return result;
};

export const getValueFromSoftware = (props: {
  software: Software;
  id: Block["id"];
}): number | string | boolean | null => {
  const { software, id } = props;

  if (id.startsWith("software.features.")) {
    const feature = id.replace("software.features.", "");
    return software.features.includes(feature as any);
  }

  if (id.startsWith("software.platforms.")) {
    const platform = id.replace("software.platforms.", "");
    return software.platforms.includes(platform as any);
  }

  const match = u.getFromKeys({ software }, id);
  return match;
};
