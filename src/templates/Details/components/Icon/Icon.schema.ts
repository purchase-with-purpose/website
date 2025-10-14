import * as Software from "@/entities/Software";

export const VARIANTS_ARRAY = [
  "capterra",
  "company",
  "person",
  "tier",
  "check",
  "warning",
  "cross",
  "lock",
  "none",
  "unknown",
  "level-one",
  "level-two",
  "level-three",
] as const;

export type Props = {
  variant: (typeof VARIANTS_ARRAY)[number] | `flag-${Software.Origin["id"]}`;
  size?: "s" | "m" | "l";
};
