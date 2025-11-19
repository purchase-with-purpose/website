import {
  getFromGroup,
  calcGroupBlocks,
  calcColour,
  calcIcon,
  calcValue,
  type Block,
  BLOCK_VARIANTS,
} from "@/entities/blocks";

import { type BaseProps } from "@/components/DataBlock";
import { createItem as mockSoftware } from "@/entities/software/__mocking__";

/**
 * Returns all blocks matching a specific group. Note that result is memoized,
 * meaning that if called again it will not perform a second calculation.
 */
const allBlocks = getFromGroup({ group: "platforms" });

/**
 *  Similar to `calcCardPreview`, but only returns valid preview blocks that
 *  have associated values on a specific `software` object. In other words, if
 *  there is no `software.evaluations.android` value, the "Google Play Rating"
 *  block will not be returned, regardless of the fact that it is part of the
 *  "ratings" group.
 */
const validBlock = calcGroupBlocks({
  group: "ratings",
  software: mockSoftware(),
});

/**
 * The `calcValue`, `calcColour` and `calcIcon` helpers can be used to determine
 * the value, colour and icon to show a user based on the combination of the
 * actual value and the associated block ID.
 *
 * This is used, for example, in the DataBlock component to create the UI-facing
 * values based exclusively only on these two values (as below).
 *
 * Note that if the `value` passed to any of these helpers are `null`, it will
 * simply re-return `null`. Thus the reason why icon is asserted as true (since
 * we know `2.5` is not null).
 */
const props: BaseProps = {
  label: BLOCK_VARIANTS["software.evaluations.trustpilot"].label,

  value: calcValue({
    id: "software.evaluations.trustpilot",
    value: 2.5,
  }),

  color: calcColour({
    id: "software.evaluations.trustpilot",
    value: 2.5,
  }),

  icon: calcIcon({
    id: "software.evaluations.trustpilot",
    value: 2.5,
  })!,
};
