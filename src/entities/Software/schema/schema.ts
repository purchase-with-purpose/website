import { z, ZodType } from "zod";
import { type Indicator, INDICATOR_ID_ARRAY } from "./schema.indicators";
import { type Origin, ORIGIN_ID_ARRAY } from "./schema.origins";
import { type Category, CATEGORY_ID_ARRAY } from "./schema.categories";
import { type Platform, PLATFORMS_ID_ARRAY } from "./schema.platforms";
import { type Note, NOTE_ID_ARRAY } from "./schema.notes";
import { type Tier, TIER_ID_ARRAY } from "./schema.tiers";
import { type Evaluation, EVALUATION_ID_ARRAY } from "./schema.evaluations";
import { type Feature, FEATURES_ID_ARRAY } from "./schema.features";
import * as u from "@/helpers/utilities";

/**
 * Additional notes about the software tool. This will be highlighted in
 * different colours depending on the `variant` value.
 */
export type NoteValue = {
  /**
   * See Note type for more information.
   */
  variant: Note["id"];

  /**
   * The actual text to show in the note.
   */
  value: string;
};

export type EvaluationValue = {
  /**
   * See `Evaluation` type for more information.
   */
  id: Evaluation["id"];

  /**
   * ...
   */
  value: number;
};

/**
 * Information related to the person, group or organization that owns/maintains
 * the tool.
 */
export type Company = {
  /**
   *
   */
  id: string;

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
   * Where the primary owner or stakeholder/s are located.
   *
   * See the `Origin` type for more information.
   */
  ownership: Origin["id"] | null;

  /**
   * Where the company headquarters are located. If the company does not have a
   * traditional headquarters, then this should be `null`.
   *
   * See the `Origin` type for more information.
   */
  headquarters: Origin["id"];
};

/**
 * The specific tiers of usage available for the software tool. In most cases
 * this will coincide with pricing plans, but will not always be the case.
 */
export type TierValue = {
  /**
   * See Tier type for more information.
   */
  id: Tier["id"];

  /**
   * A short summary of the tier. For example: "Free for non-commercial personal
   * use", "Starts at $5 per user per month", "Contact sales for pricing", etc.
   */
  value: string;
};

/**
 * Represents a specific software tool that is presented to a user via Purchase
 * with Purpose.
 */
export type Item = {
  /**
   * A unique string identifier used to indicate a specific instance amongst the
   * set of predefined options. This value will also be used as the URL slug,
   * for example: `/software/google-chrome`.
   */
  id: u.Brand<"SOFTWARE_ID">;

  /**
   * Human-friendly name of the software tool.
   */
  label: string;

  /**
   *
   */
  swatch: string;

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
   *
   */
  features: { id: Feature["id"]; value: string | null }[];

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
   * See the `Category` type for more information.
   */
  category: Category["id"];

  /**
   * See the `Platform` type for more information.
   */
  platforms: Platform["id"][];

  /**
   * See the `NoteValue` type for more information.
   */
  notes: NoteValue[];

  /**
   * See the `Company` type for more information.
   */
  company: Company;

  /**
   * See the `Tier` type for more information.
   */
  tiers: Partial<Record<Tier["id"], TierValue>>;

  /**
   *
   */
  evaluations: Partial<u.Collection<EvaluationValue>>;
};

export const validation = z
  .object({
    id: z.string() as unknown as ZodType<Item["id"]>,
    label: z.string(),
    logo: z.string(),
    url: z.string().url(),
    description: z.string(),
    indicators: z.array(z.enum(INDICATOR_ID_ARRAY)),
    incumbent: z.boolean(),
    swatch: z.string(),
    category: z.enum(CATEGORY_ID_ARRAY),
    platforms: z.array(z.enum(PLATFORMS_ID_ARRAY)),

    company: z.object({
      id: z.string(),
      name: z.string(),
      url: z.string(),
      ownership: z.enum(ORIGIN_ID_ARRAY).nullable(),
      headquarters: z.enum(ORIGIN_ID_ARRAY),
    }),

    features: z.array(
      z.object({
        id: z.enum(FEATURES_ID_ARRAY),
        value: z.string(),
      })
    ),

    tiers: z.record(
      z.enum(TIER_ID_ARRAY),
      z.object({
        id: z.enum(TIER_ID_ARRAY),
        value: z.string(),
      })
    ),

    notes: z.array(
      z.object({
        variant: z.enum(NOTE_ID_ARRAY),
        value: z.string(),
      })
    ),

    evaluations: z
      .record(
        z.enum(EVALUATION_ID_ARRAY),
        z.object({
          id: z.enum(EVALUATION_ID_ARRAY),
          value: z.number(),
        })
      )
      .optional()
      .default({}),
  })
  .strict();

export const is = (value: unknown): Item => validation.parse(value);
