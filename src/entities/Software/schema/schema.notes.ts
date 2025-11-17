import * as u from "@/helpers/utilities";

const ARRAY = ["disclaimer", "warning"] as const;

export type Note = {
  id: (typeof ARRAY)[number];
  label: string;
  swatch: string;
  description: string;
};

const LABELS: Record<Note["id"], string> = {
  disclaimer: "Disclaimer",
  warning: "Warning",
};

const SWATCHES: Record<Note["id"], string> = {
  disclaimer: "yellow",
  warning: "red",
};

const DESCRIPTIONS: Record<Note["id"], string> = {
  disclaimer: "...",
  warning: "...",
};

export const NOTE_VARIANTS = u.fromArray(
  ARRAY.map(
    (id): Note => ({
      description: DESCRIPTIONS[id],
      label: LABELS[id],
      swatch: SWATCHES[id],
      id,
    })
  )
);
