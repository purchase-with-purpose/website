import { type Props as IconProps } from "@/components/Icon";
import { type Item } from "@/entities/Software";

export const ICON_MAP: Record<
  Item["features"][number]["id"],
  IconProps["variant"]
> = {
  "search.meta": "check",
  "search.index": "check",
  "search.private": "check",

  "photo.facial": "check",
  "photo.memories": "check",

  "audio.library": "check",
  "audio.drm": "check",
  "audio.subscription": "check",

  "music.purchase": "check",
  "music.royalties": "check",
  "music.hd": "check",

  "email.client": "check",
  "email.ecosystem": "check",

  "browser.telemetry": "check",
  "browser.independent": "check",
};
