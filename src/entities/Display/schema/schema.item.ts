import * as u from "@/helpers/utilities";
import { type GeneralIconVariant } from "./schema.icon";

import {
  type Item as Software,
  type Feature,
  type Tier,
  type Platform,
} from "@/entities/Software";

export type ItemId =
  | `software.${NonNullable<u.ToPrimitivePaths<Software>>}`
  | `software.features.${Feature["id"]}`
  | `software.tiers.${Tier["id"]}`
  | `software.platforms.${Platform["id"]}`;

type Item = {
  id: ItemId;
  icon: GeneralIconVariant;
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

export const display: u.Collection<Item> = u.fromArray(
  u.entries(LABELS).map(([id, label]) => ({ id, label, icon: ICONS[id] }))
);
