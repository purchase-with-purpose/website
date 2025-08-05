import * as u from "../../helpers/utilities";
import * as schema from "./Origin.schema";

export const items: u.Collection<schema.Item> = {
  none: {
    id: "none",
    label: "None",
    icon: "",
  },
  eu: {
    id: "eu",
    label: "European Union",
    icon: "",
  },
  us: {
    id: "us",
    label: "United State of America",
    icon: "",
  },
};
