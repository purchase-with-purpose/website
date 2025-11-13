import { type Origin } from "@/entities/Software";

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
  "info",
  "box",
  "audiobook",
  "image",
  "search",
  "speaker",
  "writing",
] as const;

export type GeneralIconVariant = (typeof GENERAL_ICON_VARIANTS)[number];
export type FlagIconVariant = `flag-${Origin["id"]}`;

export type IconVariant = GeneralIconVariant | FlagIconVariant;
