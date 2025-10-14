export const FEATURE_ICON_ARRAY = [
  "check",
  "warning",
  "cross",
  "lock",
  "none",
  "unknown",
] as const;

export type Feature = {
  label: string;
  value: string;
  icon: (typeof FEATURE_ICON_ARRAY)[number];
};
