import * as u from "@/helpers/utilities";

export const FEATURES_ID_ARRAY = [
  "search.meta",
  "search.index",
  "search.private",

  "photo.facial",
  "photo.memories",

  "audio.library",
  "audio.drm",
  "audio.subscription",

  "music.purchase",
  "music.royalties",
  "music.hd",

  "email.client",
  "email.ecosystem",

  "browser.telemetry",
  "browser.independent",
] as const;

export const FEATURE_LABELS: Record<
  (typeof FEATURES_ID_ARRAY)[number],
  string
> = {
  "search.meta": "Metasearch",
  "search.index": "Independent Index",
  "search.private": "Private Search",

  "photo.facial": "Facial Recognition",
  "photo.memories": "Memories",

  "audio.library": "Library App",
  "audio.drm": "DRM Free",
  "audio.subscription": "Subscription",

  "music.purchase": "Purchase Music",
  "music.royalties": "Generous Royalties",
  "music.hd": "High-Res Streaming",

  "email.client": "Client App",

  "email.ecosystem": "Ecosystem",

  "browser.telemetry": "Zero Telemetry",
  "browser.independent": "Non-Google Engine",
} as const;

export type Feature = {
  id: (typeof FEATURES_ID_ARRAY)[number];
  label: string;
};

export const features = u.fromArray(
  FEATURES_ID_ARRAY.map((id) => ({
    id,
    label: FEATURE_LABELS[id],
  }))
);
