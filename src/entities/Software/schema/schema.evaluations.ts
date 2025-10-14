import * as u from "@/helpers/utilities";
const EVALUATION_ID_ARRAY = ["capterra", "trustpilot", "cspp"] as const;

type Evaluation = {
  id: (typeof EVALUATION_ID_ARRAY)[number];
  label: string;
  group: "privacy" | "reviews";
  url: string;
  scale: 3 | 5;
};

const LABELS: Record<Evaluation["id"], string> = {
  cspp: "Common Sense Privacy Program",
  trustpilot: "Trustpilot",
  capterra: "Capterra",
};

const URLS: Record<Evaluation["id"], string> = {
  cspp: "https://privacy.commonsense.org/",
  trustpilot: "https://www.trustpilot.com/",
  capterra: "https://www.capterra.com/",
};

const evaluations = u.fromArray(
  EVALUATION_ID_ARRAY.map((id) => ({
    id,
    label: LABELS[id],
    url: URLS[id],
    scale: id === "cspp" ? 3 : 5,
  }))
);

export { EVALUATION_ID_ARRAY, evaluations };
export type { Evaluation };
