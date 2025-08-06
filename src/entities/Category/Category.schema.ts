import { z } from "zod";

export const TAG_ID_ARRAY = [
  "facial-recognition",
  "memories",
  "cross-platform",
  "free",
  "online",
  "mobile-app",
  "private",
  "drm-free",
  "subscription",
  "library",
  "independent",
  "meta",
  "client",
] as const;

export const CATEGORY_ID_ARRAY = [
  "photo-management",
  "browser",
  "file-storage",
  "office-suite",
  "video-streaming",
  "search-engine",
  "audio-book",
  "none",
] as const;

export const validation = {
  tag: z.object({
    id: z.enum(TAG_ID_ARRAY),
    label: z.string(),
    description: z.string(),
  }),
  item: z.object({
    id: z.enum(CATEGORY_ID_ARRAY),
    label: z.string(),
    tags: z.array(z.enum(TAG_ID_ARRAY)),
  }),
};

export type Tag = z.infer<typeof validation.tag>;
export type Item = z.infer<typeof validation.item>;
