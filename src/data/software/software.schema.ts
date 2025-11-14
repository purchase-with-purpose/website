import { z } from "zod";

import {
  CATEGORY_ID_ARRAY,
  INDICATOR_ID_ARRAY,
  FEATURES_ID_ARRAY,
  PLATFORMS_ID_ARRAY,
  ORIGIN_ID_ARRAY,
} from "../../entities/Software";

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
        incumbent: z.boolean(),
        category: z.enum(CATEGORY_ID_ARRAY),
        url: z.string().url(),
        swatch: z.string().optional(),

        description: z.string().default(""),
        recommended: z.boolean(),
        indicators: z.array(z.enum(INDICATOR_ID_ARRAY)).default([]),
        features: z.array(z.enum(FEATURES_ID_ARRAY)).default([]),
        platforms: z.array(z.enum(PLATFORMS_ID_ARRAY)).default([]),

        company_name: z.string(),
        company_url: z.string().url(),
        company_headquarters: z.enum(ORIGIN_ID_ARRAY),
        company_ownership: z.enum(ORIGIN_ID_ARRAY),

        trustpilotEvaluation: z.number().optional(),
        evaluations_android: z.number().optional(),
        evaluations_ios: z.number().optional(),
        evaluations_privacyTools: z.number().optional(),
        evaluations_privacyGuide: z.number().optional(),

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
