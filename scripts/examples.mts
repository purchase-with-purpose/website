import { writeFileSync } from "fs";
import { createItem } from "../src/entities/software/__mocking__";

const inner = createItem();

writeFileSync(
  "docs/entities/software/examples/example.json",
  JSON.stringify(inner, null, 2),
  "utf-8"
);
