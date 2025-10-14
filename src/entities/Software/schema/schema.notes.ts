import * as u from "@/helpers/utilities";
const NOTE_ID_ARRAY = ["disclaimer", "warning"] as const;

type Note = {
  id: (typeof NOTE_ID_ARRAY)[number];
  label: string;
  swatch: string;
};

const NOTE_LABELS: Record<Note["id"], string> = {
  disclaimer: "Disclaimer",
  warning: "Warning",
};

const NOTE_SWATCHES: Record<Note["id"], string> = {
  disclaimer: "yellow",
  warning: "red",
};

const noteVariants = u.fromArray(
  NOTE_ID_ARRAY.map((id) => ({
    id,
    label: NOTE_LABELS[id],
    swatch: NOTE_SWATCHES[id],
  }))
);

export { NOTE_ID_ARRAY, noteVariants };
export type { Note };
