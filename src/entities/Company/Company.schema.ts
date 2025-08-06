import { z } from "zod";

export const COMPANY_ID_ARRAY = [
  "google",
] as const;


export const validation = {
  item: z.object({
    id: z.enum(COMPANY_ID_ARRAY),
    label: z.string(),
    crunchbaseUrl: z.string().url(),
    countryOfHeadquarters: z.string(),
    countryOfOwnership: z.string(),
    notesAndDisclaimers: z.string(),
  }),
};

export type Item = z.infer<typeof validation.item>;
