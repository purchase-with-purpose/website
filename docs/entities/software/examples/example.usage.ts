import * as software from "@/entities/software";

/**
 * All "variant" properties available in a `Software` entities have
 * corresponding collections with information associated with each.
 *
 * Below is all the available variant collections.
 *
 */
const all = [
  software.EVALUATION_VARIANTS,
  software.FEATURE_VARIANTS,
  software.INDICATOR_VARIANTS,
  software.NOTE_VARIANTS,
  software.ORIGIN_VARIANTS,
  software.PLATFORM_VARIANTS,
  software.TIER_VARIANTS,
];

/**
 * For example if you want to the user-friendly name of the premium pricing
 * tier, you can access it as follows:
 */
console.log(software.TIER_VARIANTS.premium.label);

/**
 * Alternatively, if you want to access the icon ID associated with a specific feature, you can do the following:
 */
console.log(software.FEATURE_VARIANTS["search-no-personal-identifiers"].icon);

/**
 * More often than not, you will likely be using dynamically provided variant
 * values (like from a software entity itself), for example to get the
 * user-friendly name and flag of a specific country you can do the following:
 */

const code = "US";
const { label, icon } = software.ORIGIN_VARIANTS[code];

// The `label` will be "USA" and `icon` will be `flag-us`
