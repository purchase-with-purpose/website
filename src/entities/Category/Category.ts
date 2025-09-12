import * as u from "../../helpers/utilities";
import * as schema from "./Category.schema";

export const items: u.Collection<schema.Item> = {
  "audio-book": {
    id: "audio-book",
    label: "Audio Book",
    tags: [],
  },
  "file-storage": {
    id: "file-storage",
    label: "File Storage",
    tags: [],
  },
  "office-suite": {
    id: "office-suite",
    label: "Office Suite",
    tags: [],
  },
  "photo-management": {
    id: "photo-management",
    label: "Photo Management",
    tags: [],
  },
  "search-engine": {
    id: "search-engine",
    label: "Search Engine",
    tags: [],
  },
  browser: {
    id: "browser",
    label: "Browser",
    tags: [],
  },
  none: {
    id: "none",
    label: "None",
    tags: [],
  },
};
