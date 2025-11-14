import * as u from "@/helpers/utilities";
const EVALUATION_ID_ARRAY = [
  "trustpilot",
  "android",
  "ios",
  "privacy-tools",
  "privacy-guide",
] as const;

type Evaluation = {
  id: (typeof EVALUATION_ID_ARRAY)[number];
  label: string;
  group: "privacy" | "reviews";
  url: string;
  scale: 3 | 5;
};

const LABELS: Record<Evaluation["id"], string> = {
  trustpilot: "Trustpilot",
  android: "Google Play Store",
  ios: "Apple App Store",
  "privacy-tools": "Privacy Tools",
  "privacy-guide": "Privacy Guides",
};

const URLS: Record<Evaluation["id"], string> = {
  android: "https://play.google.com/store/apps",
  trustpilot: "https://www.trustpilot.com/",
  ios: "https://www.apple.com/app-store/",
  "privacy-guide": "https://www.privacyguides.org",
  "privacy-tools": "https://www.privacytools.io/",
};

const SCALES: Record<Evaluation["id"], number> = {
  trustpilot: 5,
  android: 5,
  ios: 5,
  "privacy-tools": 1,
  "privacy-guide": 1,
};

const evaluations = u.fromArray(
  EVALUATION_ID_ARRAY.map((id) => ({
    id,
    label: LABELS[id],
    url: URLS[id],
    scale: SCALES[id],
  }))
);

export { EVALUATION_ID_ARRAY, evaluations };
export type { Evaluation };
