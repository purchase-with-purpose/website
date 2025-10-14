import fs from "fs";
import * as Software from "../src/entities/Software";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

const file = zodToJsonSchema(z.array(Software.validation));

fs.writeFileSync(
  "src/data/software.schema.json",
  JSON.stringify(file, null, 2)
);
