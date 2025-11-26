import { display, BLOCK_VARIANTS, getValue } from "@/entities/blocks";

import { type Props } from "@/components/DataBlock";
import { createItem as mockSoftware } from "@/entities/software/__mocking__";

/**
 * Retrieves the value associated with a specific block from a single software
 * object. The `value` returned will either be a `string` or `number` if it
 * exists, alternatively `null` will be returned.
 *
 * Note that in cases where you are simply looking for the existence of a value,
 * for example in the example below you simply want to see if
 * `audiobooks-subscription` is associated with this software (and not what the
 * actual values is) it will simply return the `id` itself if it exists (i.e.
 * `"software.features.audiobooks-subscription"`). If it is not there it will
 * return `null`.
 *
 * If you are retrieving `software.evaluations.trustpilot` for example, it would
 * return either `null` or the actual value of the rating (e.g. `2.5`). Likewise
 * if you are retrieving `software.label` it would return either `null` or the
 * name of the software as a label (e.g. `"Chrome"`).
 */
const value = getValue({
  id: "software.features.audiobooks-subscription",
  software: mockSoftware(),
});

/**
 * The `calcValue`, `calcColour` and `calcIcon` helpers can be used (then
 * alongside the `value`) to determine the display value, colour and icon to show a user
 * based on the combination of the actual value and the associated block ID.
 *
 * This is used, for example, in the DataBlock component to create the UI-facing
 * values based exclusively only on these two values (as below).
 *
 * Note that if the `value` passed to any of these helpers are `null`, it will
 * simply re-return `null`. Thus the reason why icon is asserted as true (since
 * we know `2.5` is not null).
 */
const props: Props = {
  variant: "compact",
  label: BLOCK_VARIANTS["software.evaluations.trustpilot.value"].label,
  fill: false,
  url: null,

  value: display.calcValue({
    id: "software.evaluations.trustpilot.value",
    value: 2.5,
  }),

  color: display.calcColour({
    id: "software.evaluations.trustpilot.value",
    value: 2.5,
  }),

  icon: display.calcIcon({
    id: "software.evaluations.trustpilot.value",
    value: 2.5,
  })!,
};
