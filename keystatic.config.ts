import { config } from "@keystatic/core";
import type { LocalConfig, GitHubConfig } from "@keystatic/core";
import * as Software from "./src/entities/Software";

// const GITHUB_REPO = process.env.GITHUB_REPO;
// const GITHUB_OWNER = process.env.GITHUB_OWNER;

// const storage: GitHubConfig["storage"] | LocalConfig["storage"] =
//   GITHUB_REPO && GITHUB_OWNER
//     ? {
//         kind: "github",
//         repo: {
//           owner: GITHUB_OWNER,
//           name: GITHUB_REPO,
//         },
//       }
//     : {
//         kind: "local",
//       };

export default config({
  storage: {
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
