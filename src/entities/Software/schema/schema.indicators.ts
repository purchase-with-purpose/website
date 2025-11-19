import * as u from "@/helpers/utilities";

const ARRAY = [
  "environmental",
  "open-source",
  "profit-share",
  "self-hosted",
] as const;

export type Indicator = {
  id: (typeof ARRAY)[number];
  label: string;
  swatch: string;
  emoji: string;
};

const LABELS: Record<Indicator["id"], string> = {
  environmental: "Environmental",
  "open-source": "Open Source",
  "profit-share": "Profit Share",
  "self-hosted": "Self-Hosted",
};

const SWATCHES: Record<Indicator["id"], string> = {
  environmental: "#4CAF50",
  "open-source": "#2196F3",
  "profit-share": "#FF9800",
  "self-hosted": "#9C27B0",
};

const EMOJI: Record<Indicator["id"], string> = {
  environmental: "🌳",
  "open-source": "🌍",
  "profit-share": "💰",
  "self-hosted": "📦",
};

export const INDICATOR_VARIANTS = u.fromArray(
  ARRAY.map((id): Indicator => {
    return {
      id,
      label: LABELS[id],
      swatch: SWATCHES[id],
      emoji: EMOJI[id],
    };
  })
);
