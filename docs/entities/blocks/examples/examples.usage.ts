import {
  getFromGroup,
  calcCardPreview,
  calcGroupBlocks,
  calcRating,
} from "@/entities/blocks";

import { createItem as mockSoftware } from "@/entities/software/__mocking__";

/**
 * Returns null if the provided `value` is null, generally the case if the
 * specific software does not have an evaluation value of the specific type.
 *
 * - `colour`: Will be the swatch that can optionally be applied to show the
 *   "status". E.g. red for "Fail", green for "Pass", etc.
 *
 * - `icon`: An icon that summarizes the "status". E.g. a checkmark for "Pass",
 *   a cross for "Fail", etc.
 *
 * - `label`: A human-readable label of the "status". I.e. "Fail", "81 %", etc."
 */
const { colour, icon, label } = calcRating({
  /**
   * The actual rating value, generally derived from for example
   * `software.evaluations.android`.
   */
  value: 2,

  /**
   * The type of rating system, can be retrieved from for example the
   * `EVALUATION_VARIANTS.trustpilot.system`.
   *
   * - `boolean`: Accepts `0` for "Fail" and `1` for "Pass".
   *
   * - `out-of-5`: Accepts decimal values from `0` to `5`, that get converted to
   *   a percentage.
   */
  system: "out-of-5",
})!;

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
