import {
  type Block,
  type Grouped,
  BLOCK_VARIANTS,
  GROUP_VARIANTS,
} from "@/entities/blocks";

/**
 * Example of a basic block data unit that can be rendered.
 */
const block: Block = {
  id: "software.evaluations.android.value",
  icon: "smartphone",
  label: "Google Play Rating",
};

/**
 * Example of a block group that contains specific blocks.
 */
const grouped: Grouped = {
  id: "software.card.ratings",
  description: "User evaluations and ratings from various platforms.",
  label: "Ratings",
  blocks: [
    "software.evaluations.android.value",
    "software.evaluations.ios.value",
    "software.evaluations.trustpilot.value",
    "software.evaluations.privacy-guide.value",
    "software.evaluations.privacy-tools.value",
  ],
};

/**
 * The `BLOCK_VARIANTS` value contains every single supported block variant.
 *
 * The `GROUP_VARIANTS` value contains all groups, as well as a `blocks` array
 * containing all blocks assigned to that group.
 */
const variants = [BLOCK_VARIANTS, GROUP_VARIANTS];
