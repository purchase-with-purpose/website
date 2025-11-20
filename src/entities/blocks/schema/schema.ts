import * as u from "@/helpers/utilities";
import { type IconVariant, type GeneralIconVariant } from "@/entities/icons";
import { type Group } from "./schema.groups";

import {
  type Software,
  type Feature,
  type Tier,
  type Platform,
} from "@/entities/software";

type Id =
  | `software.${NonNullable<u.ToPrimitivePaths<Software>>}`
  | `software.features.${Feature["id"]}`
  | `software.tiers.${Tier["id"]}`
  | `software.platforms.${Platform["id"]}`
  | `software.indicators.${Software["indicators"][number]}`;

export type Block = {
  id: Id;
  icon: IconVariant;
  label: string;
  group: Group["id"];
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
  "software.company.name": "Name",
  "software.company.ownership": "Ownership",
  "software.company.url": "URL",

  "software.indicators.environmental": "Environmental",
  "software.indicators.open-source": "Open Source",
  "software.indicators.profit-share": "Profit Share",
  "software.indicators.self-hosted": "Self-Hosted",

  "software.evaluations.android": "Google Play Store",
  "software.evaluations.ios": "Apple App Store",
  "software.evaluations.privacy-guide": "Privacy Guides",
  "software.evaluations.privacy-tools": "Privacy Tools",
  "software.evaluations.trustpilot": "Trustpilot",
  "software.features.audiobooks-drm-free": "",
  "software.features.audiobooks-ecosystem-support": "",
  "software.features.audiobooks-good-support": "",
  "software.features.audiobooks-rentals": "",
  "software.features.audiobooks-subscription": "",
  "software.features.browser-ai-helper": "",

  "software.features.browser-built-in-vpn": "",
  "software.features.browser-ecosystem-support": "",
  "software.features.browser-good-user-support": "",
  "software.features.browser-native-add-blocking": "",
  "software.features.browser-non-google-engine": "",
  "software.features.email-alias-creation": "",
  "software.features.email-automatic-categorization": "",

  "software.features.email-easy-unsubscribe": "",
  "software.features.email-ecosystem-support": "",
  "software.features.email-good-user-support": "",
  "software.features.email-schedule-send": "",
  "software.features.music-ai-content-flagged": "",
  "software.features.music-ecosystem-support": "",
  "software.features.music-generous-artist-royalties": "",
  "software.features.music-good-user-support": "",
  "software.features.music-high-res-streaming": "",
  "software.features.music-purchaseable-content": "",

  "software.features.office-ai-assistance": "",
  "software.features.office-good-support": "",
  "software.features.office-mobile-app": "",
  "software.features.office-online-service": "",
  "software.features.office-own-software": "",

  "software.features.photos-facial-recognition": "",
  "software.features.photos-file-storage-support": "",
  "software.features.photos-good-support": "",
  "software.features.photos-live-images": "",
  "software.features.search-ad-free-tier": "",
  "software.features.search-ai-summaries": "",
  "software.features.search-ecosystem-support": "",
  "software.features.search-good-user-support": "",
  "software.features.search-independent-index": "",
  "software.features.search-no-personal-identifiers": "",
};

const ICONS: Record<Id, GeneralIconVariant> = {
  "software.swatch": "check",
  "software.category": "shapes",
  "software.description": "notes",
  "software.id": "check",
  "software.incumbent": "trophy",
  "software.label": "check",
  "software.logo": "star",
  "software.url": "globe",

  "software.indicators.environmental": "star",
  "software.indicators.open-source": "star",
  "software.indicators.profit-share": "star",
  "software.indicators.self-hosted": "star",

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
  "software.company.name": "tag",
  "software.company.ownership": "country",
  "software.company.url": "globe",

  "software.evaluations.android": "star",
  "software.evaluations.ios": "star",
  "software.evaluations.privacy-guide": "star",
  "software.evaluations.privacy-tools": "star",
  "software.evaluations.trustpilot": "star",
  "software.features.audiobooks-drm-free": "star",
  "software.features.audiobooks-ecosystem-support": "star",
  "software.features.audiobooks-good-support": "star",
  "software.features.audiobooks-rentals": "star",
  "software.features.audiobooks-subscription": "star",
  "software.features.browser-ai-helper": "star",

  "software.features.browser-built-in-vpn": "star",
  "software.features.browser-ecosystem-support": "star",
  "software.features.browser-good-user-support": "star",
  "software.features.browser-native-add-blocking": "star",
  "software.features.browser-non-google-engine": "star",
  "software.features.email-alias-creation": "star",
  "software.features.email-automatic-categorization": "star",

  "software.features.email-easy-unsubscribe": "star",
  "software.features.email-ecosystem-support": "star",
  "software.features.email-good-user-support": "star",
  "software.features.email-schedule-send": "star",
  "software.features.music-ai-content-flagged": "star",
  "software.features.music-ecosystem-support": "star",
  "software.features.music-generous-artist-royalties": "star",
  "software.features.music-good-user-support": "star",
  "software.features.music-high-res-streaming": "star",
  "software.features.music-purchaseable-content": "star",

  "software.features.office-ai-assistance": "star",
  "software.features.office-good-support": "star",
  "software.features.office-mobile-app": "star",
  "software.features.office-online-service": "star",
  "software.features.office-own-software": "star",

  "software.features.photos-facial-recognition": "star",
  "software.features.photos-file-storage-support": "star",
  "software.features.photos-good-support": "star",
  "software.features.photos-live-images": "star",
  "software.features.search-ad-free-tier": "star",
  "software.features.search-ai-summaries": "star",
  "software.features.search-ecosystem-support": "star",
  "software.features.search-good-user-support": "star",
  "software.features.search-independent-index": "star",
  "software.features.search-no-personal-identifiers": "star",
};

const GROUPS: Record<Id, Group["id"]> = {
  "software.swatch": "other",
  "software.category": "other",
  "software.description": "other",
  "software.id": "other",
  "software.incumbent": "other",
  "software.label": "other",
  "software.logo": "other",
  "software.url": "other",

  "software.platforms.android": "platforms",
  "software.platforms.ios": "platforms",
  "software.platforms.linux": "platforms",
  "software.platforms.mac": "platforms",
  "software.platforms.web": "platforms",
  "software.platforms.windows": "platforms",

  "software.tiers.free": "pricing",
  "software.tiers.basic": "pricing",
  "software.tiers.premium": "pricing",

  "software.company.headquarters": "other",
  "software.company.name": "other",
  "software.company.ownership": "recommended",
  "software.company.url": "other",

  "software.evaluations.android": "ratings",
  "software.evaluations.ios": "ratings",
  "software.evaluations.privacy-guide": "ratings",
  "software.evaluations.privacy-tools": "ratings",
  "software.evaluations.trustpilot": "ratings",

  "software.features.audiobooks-drm-free": "features",
  "software.features.audiobooks-ecosystem-support": "features",
  "software.features.audiobooks-good-support": "features",
  "software.features.audiobooks-rentals": "features",
  "software.features.audiobooks-subscription": "features",
  "software.features.browser-ai-helper": "features",

  "software.features.browser-built-in-vpn": "features",
  "software.features.browser-ecosystem-support": "features",
  "software.features.browser-good-user-support": "features",
  "software.features.browser-native-add-blocking": "features",
  "software.features.browser-non-google-engine": "features",
  "software.features.email-alias-creation": "features",
  "software.features.email-automatic-categorization": "features",

  "software.features.email-easy-unsubscribe": "features",
  "software.features.email-ecosystem-support": "features",
  "software.features.email-good-user-support": "features",
  "software.features.email-schedule-send": "features",
  "software.features.music-ai-content-flagged": "features",
  "software.features.music-ecosystem-support": "features",
  "software.features.music-generous-artist-royalties": "features",
  "software.features.music-good-user-support": "features",
  "software.features.music-high-res-streaming": "features",
  "software.features.music-purchaseable-content": "features",

  "software.features.office-ai-assistance": "features",
  "software.features.office-good-support": "features",
  "software.features.office-mobile-app": "features",
  "software.features.office-online-service": "features",
  "software.features.office-own-software": "features",

  "software.features.photos-facial-recognition": "features",
  "software.features.photos-file-storage-support": "features",
  "software.features.photos-good-support": "features",
  "software.features.photos-live-images": "features",
  "software.features.search-ad-free-tier": "features",
  "software.features.search-ai-summaries": "features",
  "software.features.search-ecosystem-support": "features",
  "software.features.search-good-user-support": "features",
  "software.features.search-independent-index": "features",
  "software.features.search-no-personal-identifiers": "features",

  "software.indicators.environmental": "recommended",
  "software.indicators.open-source": "recommended",
  "software.indicators.profit-share": "recommended",
  "software.indicators.self-hosted": "recommended",
};

export const BLOCK_VARIANTS = u.fromArray(
  u.keys(LABELS).map(
    (id): Block => ({
      id,
      label: LABELS[id],
      icon: ICONS[id],
      group: GROUPS[id],
    })
  )
);
