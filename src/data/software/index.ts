import { z, ZodType } from "zod";
import { type Software } from "../../entities/software";
export * from "./software";
export * from "./software.collection";

export const schema = z.any({}) as ZodType<Software>;
