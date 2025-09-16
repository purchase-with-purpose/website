import * as u from "@/helpers/utilities";

export const ORIGIN_ID_ARRAY = ["us", "eu"] as const;
type OriginId = (typeof ORIGIN_ID_ARRAY)[number];

/**
 * This is used to indicate where a specific company's headquarters is located.
 */
type Origin = {
  /**
   * A unique string identifier used to indicate a specific instance amongst the
   * set of predefined options.
   */
  id: OriginId;

  /**
   * Human-friendly name of the location.
   */
  label: string;
};

const ORIGIN_LABELS: Record<OriginId, string> = {
  us: "United States",
  eu: "European Union",
};

const origins = u.fromArray(
  ORIGIN_ID_ARRAY.map((id) => ({
    id,
    label: ORIGIN_LABELS[id],
  }))
);

export { origins };
export type { Origin };
