import * as u from "@/helpers/utilities";

export const INDICATOR_ID_ARRAY = [
  "environmental",
  "open-source",
  "privacy",
  "self-hosted",
] as const;

type IndicatorId = (typeof INDICATOR_ID_ARRAY)[number];

/**
 * Primarily centered around the `Indicator` type. This is used primarily used
 * to indicate whether a software tool adheres to one of the core areas of
 * concerns highlighted within Purchase with Purpose.
 */
type Indicator = {
  /**
   * A unique string identifier used to indicate a specific instance amongst the
   * set of predefined options.
   */
  id: IndicatorId;

  /**
   * The human-readable name of specific area of concern.
   */
  label: string;

  /**
   * The HEX colour value associated with the specific area of concern. This is
   * used in the tags that represent the indicator.
   */
  swatch: string;
};

const INDICATOR_LABELS: Record<IndicatorId, string> = {
  environmental: "🌳 Environmental",
  "open-source": "🌍 Open Source",
  privacy: "🔒 Privacy",
  "self-hosted": "📦 Self-Hosted",
};

const INDICATOR_SWATCHES: Record<IndicatorId, string> = {
  environmental: "#4CAF50",
  "open-source": "#2196F3",
  privacy: "#FF9800",
  "self-hosted": "#9C27B0",
};

const indicators: u.Collection<Indicator> = u.fromArray(
  Object.entries(INDICATOR_LABELS).map(([id, label]) => ({
    id: id as IndicatorId,
    label,
    swatch: INDICATOR_SWATCHES[id as IndicatorId],
  }))
);

export { indicators };
export type { Indicator };
