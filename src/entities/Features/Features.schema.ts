import { z } from "zod";

export const TAG_ID_ARRAY = [
  "open-source",
  "proprietary",
  "cross-platform",
  "cloud-based",
  "on-premise",
  "free-tier",
  "premium",
  "subscription-based",
  "mobile-app",
  "desktop-app",
  "web-app",
  "privacy-focused",
  "drm-free",
  "api-support",
  "offline-capable",
  "real-time-collaboration",
  "enterprise",
  "individual-use",
  "multi-language",
] as const;

export const FEATURES_ID_ARRAY = [
  "project-management",
  "file-storage",
  "photo-management",
  "video-editing",
  "audio-editing",
  "code-editor",
  "collaboration-tools",
  "cloud-sync",
  "version-control",
  "task-automation",
  "data-analytics",
  "communication",
  "security",
  "backup",
  "none",
] as const;

export const validation = {
  item: z.object({
    id: z.enum(FEATURES_ID_ARRAY),
    label: z.string().min(1, "Label cannot be empty"),
    tags: z.array(z.enum(TAG_ID_ARRAY)).min(1, "At least one tag is required"),
    version: z.string().optional(),
    supportedPlatforms: z.array(z.string()).optional(),
    lastUpdated: z.string().datetime().optional(),
  }),
};

export type Item = z.infer<typeof validation.item>;