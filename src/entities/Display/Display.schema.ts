import * as u from "@/helpers/utilities";

import {
  type Origin,
  type Item as Software,
  type Feature,
  type Tier,
  type Platform,
  type Evaluation,
} from "@/entities/Software";

export const GENERAL_ICON_VARIANTS = [
  "company",
  "person",
  "check",
  "warning",
  "cross",
  "none",
  "unknown",
  "slice",
  "tag",
  "shapes",
  "database",
  "combine",
  "face",
  "lock",
  "bookmark",
  "country",
  "trophy",
  "smartphone",
  "eye",
  "desktop",
  "globe",
  "notes",
  "star",
  "level-one",
  "level-two",
  "level-three",
] as const;

export type GeneralIconVariant = (typeof GENERAL_ICON_VARIANTS)[number];
export type FlagIconVariant = `flag-${Origin["id"]}`;

export type IconVariant = GeneralIconVariant | FlagIconVariant;

export type ItemId =
  | `software.${NonNullable<u.ToPrimitivePaths<Software>>}`
  | `software.features.${Feature["id"]}`
  | `software.tiers.${Tier["id"]}`
  | `software.platforms.${Platform["id"]}`
  | `software.evaluations.${Evaluation["id"]}`;

type Item = {
  id: ItemId;
  icon: IconVariant;
  label: string;
};

export const LABELS: Record<ItemId, string> = {
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
  "software.platforms.mac": "macOS",
  "software.platforms.web": "Web",
  "software.platforms.windows": "Windows",

  "software.tiers.free": "Free Tier",
  "software.tiers.basic": "Basic Plan",
  "software.tiers.premium": "Premium Plan",

  "software.company.headquarters": "Headquarters",
  "software.company.id": "ID",
  "software.company.name": "Name",
  "software.company.ownership": "Ownership",
  "software.company.url": "URL",

  "software.features.search.meta": "Meta-Search",
  "software.features.search.index": "Independent Index",
  "software.features.search.private": "Private Search",

  "software.features.photo.facial": "Facial Recognition",
  "software.features.photo.memories": "Memories",

  "software.features.audio.library": "Library App",
  "software.features.audio.subscription": "Subscription",
  "software.features.audio.drm": "DRM Free",

  "software.features.music.purchase": "Purchase Music",
  "software.features.music.royalties": "Generous Royalties",
  "software.features.music.hd": "High-Res Streaming",

  "software.features.email.client": "Client App",
  "software.features.email.ecosystem": "Ecosystem",

  "software.features.browser.telemetry": "Zero Telemetry",
  "software.features.browser.independent": "bolt",

  "software.evaluations.capterra": "Capterra",
  "software.evaluations.cspp": "Common Sense Privacy",
  "software.evaluations.trustpilot": "Trustpilot",
};

export const ICONS: Record<ItemId, GeneralIconVariant> = {
  "software.swatch": "check",
  "software.category": "shapes",
  "software.description": "notes",
  "software.id": "check",
  "software.incumbent": "trophy",
  "software.label": "check",
  "software.logo": "star",
  "software.url": "globe",

  "software.platforms.android": "smartphone",
  "software.platforms.ios": "smartphone",
  "software.platforms.linux": "desktop",
  "software.platforms.mac": "desktop",
  "software.platforms.web": "globe",
  "software.platforms.windows": "desktop",

  "software.tiers.free": "level-one",
  "software.tiers.basic": "level-two",
  "software.tiers.premium": "level-three",

  "software.company.headquarters": "company",
  "software.company.id": "check",
  "software.company.name": "tag",
  "software.company.ownership": "country",
  "software.company.url": "globe",

  "software.features.search.meta": "combine",
  "software.features.search.index": "database",
  "software.features.search.private": "lock",

  "software.features.photo.facial": "face",
  "software.features.photo.memories": "bookmark",

  "software.features.audio.library": "bookmark",
  "software.features.audio.subscription": "star",
  "software.features.audio.drm": "lock",

  "software.features.music.purchase": "person",
  "software.features.music.royalties": "slice",
  "software.features.music.hd": "eye",

  "software.features.email.client": "desktop",
  "software.features.email.ecosystem": "combine",

  "software.features.browser.telemetry": "lock",
  "software.features.browser.independent": "database",

  "software.evaluations.capterra": "star",
  "software.evaluations.cspp": "lock",
  "software.evaluations.trustpilot": "star",
};

export const display: u.Collection<Item> = u.fromArray(
  u.entries(LABELS).map(([id, label]) => ({ id, label, icon: ICONS[id] }))
);

export const GROUP_ID_ARRAY = [
  // "summary",
  "company",
  "pricing",
  "features",
  "platforms",
  "ratings",
  "privacy",
] as const;

export const GROUP_LABELS: Record<(typeof GROUP_ID_ARRAY)[number], string> = {
  // summary: "Summary",
  features: "Features",
  company: "Company",
  pricing: "Pricing",
  platforms: "Platforms",
  ratings: "Reviews",
  privacy: "Privacy",
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
