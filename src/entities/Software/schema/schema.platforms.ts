import * as u from "@/helpers/utilities";
import { type GeneralIconVariant } from "@/entities/icons";

const PLATFORMS_ID_ARRAY = [
  "windows",
  "mac",
  "linux",
  "web",
  "android",
  "ios",
] as const;

export type Platform = {
  id: (typeof PLATFORMS_ID_ARRAY)[number];
  label: string;
  icon: GeneralIconVariant;
};

const LABELS: Record<Platform["id"], string> = {
  windows: "Windows",
  mac: "Mac OS",
  linux: "Linux",
  web: "Browser",
  android: "Android",
  ios: "iOS",
};

const ICONS: Record<Platform["id"], GeneralIconVariant> = {
  android: "smartphone",
  ios: "smartphone",
  linux: "desktop",
  mac: "desktop",
  web: "globe",
  windows: "desktop",
};

const DESCRIPTIONS: Record<Platform["id"], string> = {
  android: "...",
  ios: "..",
  linux: "..",
  mac: "...",
  web: "...",
  windows: "...",
};

export const PLATFORM_VARIANTS = u.fromArray(
  PLATFORMS_ID_ARRAY.map((id) => ({
    id,
    label: LABELS[id],
    icon: ICONS[id],
    description: DESCRIPTIONS[id],
  }))
);
