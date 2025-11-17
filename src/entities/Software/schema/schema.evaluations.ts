import * as u from "@/helpers/utilities";

const ARRAY = [
  "trustpilot",
  "android",
  "ios",
  "privacy-tools",
  "privacy-guide",
] as const;

export type Evaluation = {
  id: (typeof ARRAY)[number];
  label: string;
  url: string;
  scale: number;
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

export const EVALUATION_VARIANTS = u.fromArray(
  ARRAY.map(
    (id): Evaluation => ({
      id,
      label: LABELS[id],
      url: URLS[id],
      scale: SCALES[id],
    })
  )
);
