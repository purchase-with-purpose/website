import { z, ZodType } from "zod";
import { type Item as Software } from "../../entities/Software";
export * from "./software";

export const schema = z.any({}) as ZodType<Software>;
