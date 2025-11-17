import * as u from "@/helpers/utilities";
import { type GeneralIconVariant } from "@/entities/icons";

const CATEGORY_ID_ARRAY = [
  "browser",
  "search-engine",
  "office-suite",
  "music-streaming",
  "file-storage",
  "photo-management",
  "audio-book",
  "email",
  "none",
] as const;

export type Category = {
  id: (typeof CATEGORY_ID_ARRAY)[number];
  label: string;
  description: string;
};

const CATEGORY_LABELS: Record<Category["id"], string> = {
  "photo-management": "Photo Management",
  browser: "Browsers",
  email: "Email",
  "file-storage": "File Storage",
  "office-suite": "Office Suite",
  "search-engine": "Search Engines",
  "audio-book": "Audio Books",
  "music-streaming": "Music Streaming",
  none: "Other",
};

const CATEGORY_ICONS: Record<Category["id"], GeneralIconVariant> = {
  "photo-management": "image",
  "audio-book": "audiobook",
  email: "star",
  "file-storage": "box",
  "office-suite": "writing",
  "search-engine": "search",
  browser: "globe",
  "music-streaming": "speaker",
  none: "info",
};

const CATEGORY_DESCRIPTIONS: Record<Category["id"], string> = {
  "photo-management": "...",
  browser: "...",
  email: "...",
  "file-storage": "...",
  "office-suite": "...",
  "search-engine": "...",
  "audio-book": "...",
  "music-streaming": "...",
  none: "...",
};

export const CATEGORY_VARIANTS = u.fromArray(
  CATEGORY_ID_ARRAY.map((id) => ({
    id,
    label: CATEGORY_LABELS[id],
    description: CATEGORY_DESCRIPTIONS[id],
    icon: CATEGORY_ICONS[id],
  }))
);
