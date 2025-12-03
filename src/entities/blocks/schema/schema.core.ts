import * as u from "@/helpers/utilities";
import { type IconVariant } from "@/entities/icons";

import {
  type Software,
  type Feature,
  type Tier,
  type Platform,
  FEATURE_VARIANTS,
} from "@/entities/software";

type Id =
  | `software.${NonNullable<u.ToPrimitivePaths<Software>>}`
  | `software.features.${Feature["id"]}`
  | `software.tiers.${Tier["id"]}`
  | `software.platforms.${Platform["id"]}`
  | `software.indicators.${Software["indicators"][number]}`
  | "software.derived.app";

export type Block = {
  id: Id;
  icon: IconVariant | null;
  label: string;
};

const LABELS: Record<Id, string> = {
  "software.swatch": "Swatch",
  "software.category": "Category",
  "software.description": "Description",
  "software.id": "ID",
  "software.incumbent": "Incumbent",
  "software.label": "Label",
  "software.logo": "Logo",
  "software.url": "URL",

  "software.platforms.android": "Android",
  "software.platforms.ios": "iOS",
  "software.platforms.linux": "Linux",
  "software.platforms.mac": "Mac OS",
  "software.platforms.web": "Browser",
  "software.platforms.windows": "Windows",

  "software.tiers.free": "Free Tier",
  "software.tiers.basic": "Basic Plan",
  "software.tiers.premium": "Premium Plan",

  "software.company.headquarters": "Headquarters",
  "software.company.name": "Company Name",
  "software.company.ownership": "Ownership",
  "software.company.url": "URL",

  "software.indicators.environmental": "Environmental",
  "software.indicators.open-source": "Open Source",
  "software.indicators.profit-share": "Profit Share",
  "software.indicators.self-hosted": "Self-Hosted",

  "software.evaluations.android.value": "Google Play Store",
  "software.evaluations.ios.value": "Apple App Store",
  "software.evaluations.privacy-guide.value": "Privacy Guides",
  "software.evaluations.privacy-tools.value": "Privacy Tools",
  "software.evaluations.trustpilot.value": "Trustpilot",

  "software.evaluations.android.url": "Google Play Store URL",
  "software.evaluations.ios.url": "Apple App Store URL",
  "software.evaluations.privacy-guide.url": "Privacy Guides URL",
  "software.evaluations.privacy-tools.url": "Privacy Tools URL",
  "software.evaluations.trustpilot.url": "Trustpilot URL",

  "software.derived.app": "Mobile Apps",

  ...(Object.fromEntries(
    u.values(FEATURE_VARIANTS).map((x) => {
      return [`software.features.${x.id}`, x.label];
    })
  ) as any),
};

const ICONS: Record<Id, IconVariant | null> = {
  "software.swatch": "check",
  "software.category": "shapes",
  "software.description": "notes",
  "software.id": "check",
  "software.incumbent": "trophy",
  "software.label": "check",
  "software.logo": "star",
  "software.url": "globe",

  "software.indicators.environmental": "leaf",
  "software.indicators.open-source": "notebook-text",
  "software.indicators.profit-share": "chart-pie",
  "software.indicators.self-hosted": "harddrive",

  "software.platforms.android": "smartphone",
  "software.platforms.ios": "smartphone",
  "software.platforms.linux": "desktop",
  "software.platforms.mac": "desktop",
  "software.platforms.web": "globe",
  "software.platforms.windows": "desktop",

  "software.tiers.free": "level-one",
  "software.tiers.basic": "level-two",
  "software.tiers.premium": "level-three",

  "software.company.headquarters": null,
  "software.company.name": "tag",
  "software.company.ownership": null,
  "software.company.url": "globe",

  "software.evaluations.android.value": null,
  "software.evaluations.ios.value": null,
  "software.evaluations.privacy-guide.value": null,
  "software.evaluations.privacy-tools.value": null,
  "software.evaluations.trustpilot.value": null,

  "software.evaluations.android.url": null,
  "software.evaluations.ios.url": null,
  "software.evaluations.privacy-guide.url": null,
  "software.evaluations.privacy-tools.url": null,
  "software.evaluations.trustpilot.url": null,

  "software.derived.app": "smartphone",

  ...(Object.fromEntries(
    u.values(FEATURE_VARIANTS).map((x) => {
      return [`software.features.${x.id}`, x.icon];
    })
  ) as any),
};

export const BLOCK_VARIANTS = u.fromArray(
  u.keys(LABELS).map(
    (id): Block => ({
      id,
      label: LABELS[id],
      icon: ICONS[id],
    })
  )
);
