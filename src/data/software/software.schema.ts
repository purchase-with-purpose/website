import { z } from "zod";
import { CATEGORY_VARIANTS } from "@/entities/categories";

import {
  FEATURE_VARIANTS,
  INDICATOR_VARIANTS,
  PLATFORM_VARIANTS,
  ORIGIN_VARIANTS,
} from "@/entities/software";

const extractKeysAsEnum = <
  T extends Record<string, any>,
  K extends keyof T & string = keyof T & string
>(
  value: T
) => {
  const keys = Object.keys(value) as [K, ...K[]];
  return z.enum(keys);
};

export const schema = z.object({
  sys: z.any(),
  total: z.number(),
  skip: z.number(),
  limit: z.number(),

  items: z.array(
    z.object({
      metadata: z.any(),
      sys: z.object({
        id: z.string(),
      }),

      fields: z.object({
        logo: z.object({
          sys: z.object({
            id: z.string(),
          }),
        }),

        label: z.string(),
        category: extractKeysAsEnum(CATEGORY_VARIANTS),
        url: z.string().url(),
        swatch: z.string().optional(),

        description: z.string().default(""),
        recommended: z.coerce.boolean(),
        indicators: z.array(extractKeysAsEnum(INDICATOR_VARIANTS)).default([]),
        features: z.array(extractKeysAsEnum(FEATURE_VARIANTS)).default([]),
        platforms: z.array(extractKeysAsEnum(PLATFORM_VARIANTS)).default([]),

        company_name: z.string(),
        company_url: z.string().url().nullish(),
        company_headquarters: extractKeysAsEnum(ORIGIN_VARIANTS).nullish(),
        company_ownership: extractKeysAsEnum(ORIGIN_VARIANTS).nullish(),

        evaluations_trustpilot: z.number().optional(),
        evaluation_trustpilot_url: z.string().url().optional(),

        evaluations_android: z.number().optional(),
        evaluation_android_url: z.string().url().optional(),

        evaluations_ios: z.number().optional(),
        evaluation_ios_url: z.string().url().optional(),

        evaluations_privacyTools: z.number().optional(),
        evaluation_privacyTools_url: z.string().url().optional(),

        evaluations_privacyGuide: z.number().optional(),
        evaluation_privacyGuide_url: z.string().url().optional(),

        tiers_free: z.string().optional(),
        tiers_basic: z.string().optional(),
        tiers_premium: z.string().optional(),

        notes_warning: z.array(z.string()).optional(),
        notes_disclaimer: z.array(z.string()).optional(),
      }),
    })
  ),

  includes: z.object({
    Asset: z.array(
      z.object({
        metadata: z.any(),
        sys: z.object({
          id: z.string(),
        }),
        fields: z.object({
          file: z.object({
            url: z.string().url(),
            details: z.any(),
            fileName: z.string(),
            contentType: z.string(),
          }),
        }),
      })
    ),
  }),
});
