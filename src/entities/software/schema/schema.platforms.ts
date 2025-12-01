import * as u from "@/helpers/utilities";
import { type GeneralIconVariant } from "@/entities/icons";

const PLATFORMS_ID_ARRAY = [
  "web",
  "windows",
  "mac",
  "linux",
  "android",
  "ios",
] as const;

export type Platform = {
  id: (typeof PLATFORMS_ID_ARRAY)[number];
  label: string;
  icon: GeneralIconVariant;
};

const LABELS: Record<Platform["id"], string> = {
  web: "Browser",
  windows: "Windows",
  mac: "Mac OS",
  linux: "Linux",
  android: "Android",
  ios: "iOS",
};

const ICONS: Record<Platform["id"], GeneralIconVariant> = {
  web: "globe",
  windows: "desktop",
  mac: "desktop",
  linux: "desktop",
  android: "smartphone",
  ios: "smartphone",
};

const DESCRIPTIONS: Record<Platform["id"], string> = {
  web: "Accessible through any web browser",
  windows: "Compatible with Windows computers",
  mac: "Compatible with macOS computers",
  linux: "Compatible with Linux computers",
  android: "Available on any Android devices",
  ios: "Available on any iOS devices",
};

export const PLATFORM_VARIANTS = u.fromArray(
  PLATFORMS_ID_ARRAY.map((id) => ({
    id,
    label: LABELS[id],
    icon: ICONS[id],
    description: DESCRIPTIONS[id],
  }))
);
