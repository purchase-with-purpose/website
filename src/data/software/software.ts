import * as u from "../../helpers/utilities";
import { createClient } from "contentful";
import { type Software } from "../../entities/software";
import { getEnv } from "../../helpers/env";
import { schema } from "./software.schema";

const { CONTENTFUL_DELIVERY_TOKEN, CONTENTFUL_SPACE_ID } = getEnv();

const client = createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_DELIVERY_TOKEN,
  environment: "master",
});

export const loader = async (): Promise<Software[]> => {
  const response = await client.getEntries({
    content_type: "software",
  });

  const array = response.includes?.Asset || [];
  let success = 0;

  const items = response.items.map((x): Software | null => {
    try {
      const { fields: f } = schema.shape.items.element.parse(x);

      const logo =
        array.find((x) => x.sys.id === f.logo.sys.id)?.fields.file?.url || "";

      const warnings = (f.notes_warning || []).map((x) => {
        return {
          value: x,
          variant: "warning" as const,
        };
      });

      const disclaimer = (f.notes_disclaimer || []).map((x) => {
        return {
          value: x,
          variant: "disclaimer" as const,
        };
      });

      const inner: Software = {
        id: u.createBrand("SOFTWARE_ID", x.sys.id)!,
        label: f.label,
        logo,
        url: f.url,
        category: f.category,
        description: f.description,
        indicators: f.indicators,
        incumbent: f.incumbent,
        features: f.features,
        notes: [...warnings, ...disclaimer],
        platforms: f.platforms,
        swatch: f.swatch || "black",

        evaluations: {
          "privacy-guide": f.evaluations_privacyGuide || null,
          "privacy-tools": f.evaluations_privacyTools || null,
          android: f.evaluations_android || null,
          ios: f.evaluations_ios || null,
          trustpilot: f.trustpilotEvaluation || null,
        },

        company: {
          url: f.company_url,
          headquarters: f.company_headquarters,
          name: f.company_name,
          ownership: f.company_ownership,
        },

        tiers: {
          free: f.tiers_free || null,
          basic: f.tiers_basic || null,
          premium: f.tiers_premium || null,
        },
      };

      success += 1;
      return inner;
    } catch (error) {
      console.error(error);
      return null;
    }
  });

  console.log(
    `
    
    Able to add ${success} / ${response.items.length} valid items.
    
    `
  );

  return u.filter(items);
};
