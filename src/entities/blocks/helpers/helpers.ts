import type { IconVariant } from "@/entities/icons";
import * as u from "@/helpers/utilities";
import { type Block, BLOCK_VARIANTS } from "../schema";

import {
  type Software,
  ORIGIN_VARIANTS,
  FEATURE_VARIANTS,
  PLATFORM_VARIANTS,
  EVALUATION_VARIANTS,
  INDICATOR_VARIANTS,
} from "@/entities/software";

const calcColour = (props: {
  id: Block["id"];
  value: number | string | boolean;
}): string => {
  const { id, value } = props;

  if (
    id === "software.company.headquarters" ||
    id === "software.company.ownership"
  ) {
    return "rgba(0, 0, 0, 0.9)";
  }

  if (id.startsWith("software.indicators.")) {
    const inner = id.replace("software.indicators.", "");
    return INDICATOR_VARIANTS[inner as keyof typeof INDICATOR_VARIANTS].swatch;
  }

  if (id.startsWith("software.features.")) {
    return "#543BF1";
  }

  if (id.startsWith("software.evaluations.")) {
    const evaluation = id
      .replace("software.evaluations.", "")
      .replace(".value", "");

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

  return "#24224b";
};

const calcValue = (props: {
  id: Block["id"];
  value: number | string | boolean;
}): string | null => {
  const { id, value } = props;
  if (value === null) return null;
  if(id === "software.tiers.free") 
    {
      return value.toString();
    }

  if (
    id === "software.company.headquarters" ||
    id === "software.company.ownership"
  ) {
    if (typeof value !== "string") return null;
    const match = (ORIGIN_VARIANTS as any)[value];
    return match.label;
  }

  if (id.startsWith("software.indicators.")) {
    const platform = id.replace("software.indicators.", "");
    return (INDICATOR_VARIANTS as any)[platform].label;
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
    const evaluation = id
      .replace("software.evaluations.", "")
      .replace(".value", "");

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

const calcIcon = (props: {
  id: Block["id"];
  value: number | string | boolean | null;
}): null | IconVariant => {
  const { id, value } = props;
  if (value === null) return null;

  if (
    id === "software.company.headquarters" ||
    id === "software.company.ownership"
  ) {
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
    const evaluation = id
      .replace("software.evaluations.", "")
      .replace(".value", "");

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

export const getValue = (props: {
  software: Software;
  id: Block["id"];
}): number | string | boolean | null => {
  const { software, id } = props;

  if (id.startsWith("software.features.")) {
    const feature = id.replace("software.features.", "");
    if (software.features.includes(feature as any)) return id;
    return null;
  }

  if (id.startsWith("software.indicators.")) {
    const feature = id.replace("software.indicators.", "");
    if (software.indicators.includes(feature as any)) return id;
    return null;
  }

  if (id.startsWith("software.platforms.")) {
    const platform = id.replace("software.platforms.", "");
    if (software.platforms.includes(platform as any)) return id;
    return null;
  }

  const match = u.getFromKeys({ software }, id);
  return match;
};

export const calcUrl = (props: {
  software: Software;
  id: Block["id"];
}): string | null => {
  const { software, id } = props;

  if (id === "software.evaluations.ios.value") {
    return software.evaluations.ios.url || null;
  }

  if (id === "software.evaluations.android.value") {
    return software.evaluations.android.url || null;
  }

  if (id === "software.evaluations.privacy-guide.value") {
    return software.evaluations["privacy-guide"].url || null;
  }

  if (id === "software.evaluations.privacy-tools.value") {
    return software.evaluations["privacy-tools"].url || null;
  }

  if (id === "software.evaluations.trustpilot.value") {
    return software.evaluations.trustpilot.url || null;
  }

  return null;
};

export const display = {
  calcColour,
  calcValue,
  calcIcon,
  calcUrl,
};
