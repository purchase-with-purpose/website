import fs from "fs";
import * as software from "../src/schemas/software";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

const file = zodToJsonSchema(z.array(software.validation));

fs.writeFileSync(
  "src/data/software.schema.json",
  JSON.stringify(file, null, 2)
);
