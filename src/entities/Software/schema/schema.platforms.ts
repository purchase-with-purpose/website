import * as u from "@/helpers/utilities";

export const PLATFORMS_ID_ARRAY = [
  "windows",
  "mac",
  "linux",
  "web",
  "android",
  "ios",
] as const;

export const PLATFORMS_LABELS: Record<
  (typeof PLATFORMS_ID_ARRAY)[number],
  string
> = {
  windows: "Windows",
  mac: "Mac OS",
  linux: "Linux",
  web: "Browser",
  android: "Android",
  ios: "iOS",
};

export type Platform = {
  id: (typeof PLATFORMS_ID_ARRAY)[number];
  label: string;
};

export const platforms = u.fromArray(
  PLATFORMS_ID_ARRAY.map((id) => ({
    id,
    label: PLATFORMS_LABELS[id],
  }))
);
