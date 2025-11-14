import * as u from "@/helpers/utilities";
import { type GeneralIconVariant } from "@/entities/Display";

export const CATEGORY_ID_ARRAY = [
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

type CategoryId = (typeof CATEGORY_ID_ARRAY)[number];

/**
 * A specific category grouping that several software tools may belong to.
 */
type Category = {
  /**
   * A unique string identifier used to indicate a specific instance amongst the
   * set of predefined options.
   */
  id: CategoryId;

  /**
   * Human-friendly name of the location.
   */
  label: string;

  /**
   * A 1-3 paragraph description of the category.
   */
  description: string;
};

const CATEGORY_LABELS: Record<CategoryId, string> = {
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

const CATEGORY_ICONS: Record<CategoryId, GeneralIconVariant> = {
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

const CATEGORY_DESCRIPTIONS: Record<CategoryId, string> = {
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

const categories = u.fromArray(
  CATEGORY_ID_ARRAY.map((id) => ({
    id,
    label: CATEGORY_LABELS[id],
    description: CATEGORY_DESCRIPTIONS[id],
    icon: CATEGORY_ICONS[id],
  }))
);

export { categories };
export type { Category };
