import * as u from "@/helpers/utilities";
const NOTE_VARIANT_ID_ARRAY = ["info", "disclaimer", "warning"] as const;

type NoteVariant = {
  id: (typeof NOTE_VARIANT_ID_ARRAY)[number];
  label: string;
  swatch: string;
};

const NOTE_LABELS: Record<NoteVariant["id"], string> = {
  info: "Info",
  disclaimer: "Disclaimer",
  warning: "Warning",
};

const NOTE_SWATCHES: Record<NoteVariant["id"], string> = {
  info: "blue",
  disclaimer: "yellow",
  warning: "red",
};

const noteVariants = u.fromArray(
  NOTE_VARIANT_ID_ARRAY.map((id) => ({
    id,
    label: NOTE_LABELS[id],
    swatch: NOTE_SWATCHES[id],
  }))
);

export { NOTE_VARIANT_ID_ARRAY, noteVariants };
export type { NoteVariant };
