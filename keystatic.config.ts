import { config } from "@keystatic/core";
import * as Software from "./src/entities/Software";

export default config({
  storage: {
    // kind: "local", When working locally uncomment above and comment out all
    // storage options below
    kind: "github",
    repo: {
      owner: "purchase-with-purpose",
      name: "website",
    },
  },
  collections: {
    software: Software.cms,
  },
  ui: {
    brand: {
      name: "Purchase with Purpose",
    },
  },
});
