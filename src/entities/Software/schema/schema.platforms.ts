import * as u from "@/helpers/utilities";
import { type GeneralIconVariant } from "../../Display/schema/schema.icon";

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

const PLATFORM_ICONS: Record<
  (typeof PLATFORMS_ID_ARRAY)[number],
  GeneralIconVariant
> = {
  android: "smartphone",
  ios: "smartphone",
  linux: "desktop",
  mac: "desktop",
  web: "globe",
  windows: "desktop",
};

export type Platform = {
  id: (typeof PLATFORMS_ID_ARRAY)[number];
  label: string;
  icon: GeneralIconVariant;
};

export const platforms = u.fromArray(
  PLATFORMS_ID_ARRAY.map((id) => ({
    id,
    label: PLATFORMS_LABELS[id],
    icon: PLATFORM_ICONS[id],
  }))
);
