import { createCollection } from "@/helpers/collection";
import { type Software } from "@/entities/software";
import * as u from "@/helpers/utilities";

export const getCollection = () => {
  return createCollection<Software>("software");
};
