import * as u from "../../helpers/utilities";
import * as schema from "./Notes.schema";

export const items: u.Collection<schema.Item> = {
  "open-source": {
    id: "open-source",
    label: "Open Source",
    swatch: "red",
  },
  "self-hosted": {
    id: "self-hosted",
    label: "Self Hosted",
    swatch: "blue",
  },
  environmental: {
    id: "environmental",
    label: "Environmental",
    swatch: "green",
  },
  privacy: {
    id: "privacy",
    label: "Privacy",
    swatch: "yellow",
  },
};
