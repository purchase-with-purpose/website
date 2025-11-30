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
  windows: "desktop",
  mac: "desktop",
  linux: "desktop",
  web: "globe",
  android: "smartphone",
  ios: "smartphone",
};

const DESCRIPTIONS: Record<Platform["id"], string> = {
  windows: "Compatible with Windows computers",
  mac: "Compatible with macOS computers",
  linux: "Compatible with Linux computers",
  web: "Accessible through any web browser",
  android: "Available on Android devices and tablets",
  ios: "Available on iPhone or iPad",
};

export const PLATFORM_VARIANTS = u.fromArray(
  PLATFORMS_ID_ARRAY.map((id) => ({
    id,
    label: LABELS[id],
    icon: ICONS[id],
    description: DESCRIPTIONS[id],
  }))
);
