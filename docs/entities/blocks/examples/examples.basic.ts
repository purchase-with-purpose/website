import { type Block, type Group } from "@/entities/blocks";

/**
 * Example of a basic block data unit that can be rendered.
 */
const block: Block = {
  id: "software.evaluations.android",
  group: "ratings",
  icon: "smartphone",
  label: "Google Play Rating",
};

/**
 * Example of a block group that categorizes related blocks together.
 */
const group: Group = {
  id: "ratings",
  description: "User evaluations and ratings from various platforms.",
  label: "Evaluations",
};
