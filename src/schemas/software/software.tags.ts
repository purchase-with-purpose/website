import * as u from "@/helpers/utilities";

export const TAGS_ID_ARRAY = [
  "global.web",
  "global.android",
  "global.ios",
  "global.windows",
  "global.mac",
  "photo-management.a",
  "photo-management.b",
] as const;

type TagId = (typeof TAGS_ID_ARRAY)[number];

type Tag = {
  id: TagId;
  label: string;
  description: string;
};

const TAG_LABELS: Record<TagId, string> = {
  "photo-management.a": "Photo Management A",
  "photo-management.b": "Photo Management B",
  "global.web": "Web",
  "global.android": "Android",
  "global.ios": "iOS",
  "global.windows": "Windows",
  "global.mac": "macOS",
};

const TAG_DESCRIPTIONS: Record<TagId, string> = {
  "global.web": "...",
  "global.android": "...",
  "global.ios": "...",
  "global.windows": "...",
  "global.mac": "...",
  "photo-management.a": "...",
  "photo-management.b": "...",
};

const tags = u.fromArray(
  TAGS_ID_ARRAY.map((id) => ({
    id,
    label: TAG_LABELS[id],
    description: TAG_DESCRIPTIONS[id],
  }))
);

export { tags };
export type { Tag };
