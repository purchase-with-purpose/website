import * as u from "@/helpers/utilities";

export const CATEGORY_ID_ARRAY = [
  "photo-management",
  "browser",
  "file-storage",
  "office-suite",
  "search-engine",
  "audio-book",
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
  browser: "Browser",
  "file-storage": "File Storage",
  "office-suite": "Office Suite",
  "search-engine": "Search Engine",
  "audio-book": "Audio Book",
  none: "None",
};

const CATEGORY_DESCRIPTIONS: Record<CategoryId, string> = {
  "photo-management": "...",
  browser: "...",
  "file-storage": "...",
  "office-suite": "...",
  "search-engine": "...",
  "audio-book": "...",
  none: "...",
};

const categories = u.fromArray(
  CATEGORY_ID_ARRAY.map((id) => ({
    id,
    label: CATEGORY_LABELS[id],
    description: CATEGORY_DESCRIPTIONS[id],
  }))
);

export { categories };
export type { Category };
