import { z, ZodType } from "zod";
import { type Indicator, INDICATOR_ID_ARRAY } from "./software.indicators";
import { type Origin, ORIGIN_ID_ARRAY } from "./software.origins";
import { type Category, CATEGORY_ID_ARRAY } from "./software.categories";
import { type Tag, TAGS_ID_ARRAY } from "./software.tags";

import {
  type NoteVariant,
  NOTE_VARIANT_ID_ARRAY,
} from "./software.noteVariants";

/**
 * Additional notes about the software tool. This will be highlighted in
 * different colours depending on the `variant` value.
 */
type Note = {
  /**
   * Determines the colour and icon used to render the note.
   */
  variant: NoteVariant["id"];

  /**
   * The actual text to show in the note.
   */
  content: string;
};

/**
 * Information related to the person, group or organization that owns/maintains
 * the tool.
 */
type Ownership = {
  /**
   * The human-readable name of the owner/maintainer. If a company, then the
   * trading name should be used here. If an individual, then their full name
   * should be used.
   */
  name: string;

  /**
   * A link to the the official website where users can learn more about the
   * owner/company.
   */
  url: string;

  /**
   * A freeform string to indicate the geographic location of the
   * owner/maintainer. Provide as granular information as possible. `123 Example
   * St, Example City, South Africa`
   */
  location: string;

  /**
   * See the `Origin` type for more information.
   */
  icon: Origin["id"];

  /**
   * A freeform string to indicate the ownership structure, for example:
   * `independent`, `publicly traded`, `non-profit`, `privately-held`,
   * `government`, etc.
   */
  structure: string;
};

/**
 * The specific tiers of usage available for the software tool. In most cases
 * this will coincide with pricing plans, but will not always be the case.
 */
export type Tier = {
  /**
   * A short (aim for 1-3 words max) human-readable name for the tier.
   *
   * For example `Free Tier`, `Pro Subscription`, `Enterprise`, etc.
   */
  title: string;

  /**
   * A short summary of the tier. For example: "Free for non-commercial personal
   * use", "Starts at $5 per user per month", "Contact sales for pricing", etc.
   */
  description: string;
};

/**
 * Represents a specific software tool that is presented to a user via Purchase
 * with Purpose.
 */
export type Software = {
  /**
   * A unique string identifier used to indicate a specific instance amongst the
   * set of predefined options. This value will also be used as the URL slug,
   * for example: `/software/google-chrome`.
   */
  id: string;

  /**
   * Human-friendly name of the software tool.
   */
  label: string;

  /**
   * The official URL of the software tool's website.
   */
  url: string;

  /**
   * The URL to the SVG logo of the software tool.
   */
  logo: string;

  /**
   * A 1-3 paragraph description of the software tool.
   */
  description: string;

  /**
   * A list of `Indicator` ID values that this software adheres to.
   */
  indicators: Indicator["id"][];

  /**
   * Whether the current tool is considered as one of the leading, commercial
   * "big-tech" software tools within its category.
   */
  incumbent: boolean;

  /**
   * See the `Origin` type for more information.
   */
  origin: Origin["id"];

  /**
   * See the `Category` type for more information.
   */
  category: Category["id"];

  /**
   * See the `Tag` type for more information.
   */
  tags: Tag["id"][];

  /**
   * See the `Note` type for more information.
   */
  notes: Note[];

  /**
   * See the `Ownership` type for more information.
   */
  ownership: Ownership;

  /**
   * See the `Tier` type for more information.
   */
  tiers: Tier[];

  privacy: {};
};

export const validation: ZodType<Software> = z
  .object({
    id: z.string(),
    label: z.string(),
    logo: z.string(),
    description: z.string(),
    indicators: z.array(z.enum(INDICATOR_ID_ARRAY)),
    incumbent: z.boolean(),
    origin: z.enum(ORIGIN_ID_ARRAY),
    category: z.enum(CATEGORY_ID_ARRAY),
    tags: z.array(z.enum(TAGS_ID_ARRAY)),

    ownership: z.object({
      name: z.string(),
      url: z.string(),
      location: z.string(),
      icon: z.string(),
      structure: z.string(),
    }),

    tiers: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      })
    ),

    notes: z.array(
      z.object({
        variant: z.enum(NOTE_VARIANT_ID_ARRAY),
        content: z.string(),
      })
    ),
  })
  .strict();
