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

const calcLocation = (
  value: string | undefined,
  existing?: string | undefined
): Software["company"]["ownership"] => {
  if (!value) return null;
  if (value === existing) return null;  
  if (value === "ZA") return "global";  
  if (value === "UK") return "GB";
  return value as Software["company"]["ownership"];
};

export const loader = async (): Promise<Software[]> => {
  const response = await client.getEntries({
    content_type: "software",
  });

  const array = response.includes?.Asset || [];
  let success = 0;

  const items = response.items.map((x): Software | null => {
    try {
      const { fields: f } = schema.shape.items.element.parse({
        ...x,
        fields: {
          ...x.fields,
          company_headquarters: calcLocation(
            x.fields.company_headquarters as string
          ),

          company_ownership: calcLocation(
            x.fields.company_ownership as string,
            x.fields.company_headquarters as string
          ),
        },
      });

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
        screenshots: f.screenshots?.map(screenshot => array.find((x) => x.sys.id === screenshot.sys.id)?.fields.file?.url || "") || [],
        label: f.label,
        recommended: f.recommended || false,
        logo,
        url: f.url,
        category: f.category,
        description: f.description,
        indicators: f.indicators,
        features: f.features,
        notes: [...warnings, ...disclaimer],
        platforms: f.platforms,
        swatch: f.swatch || "black",

        evaluations: {
          "privacy-guide": {
            value: f.evaluations_privacyGuide || null,
            url: f.evaluation_privacyGuide_url || null,
          },
          "privacy-tools": {
            value: f.evaluations_privacyTools || null,
            url: f.evaluation_privacyTools_url || null,
          },
          android: {
            value: f.evaluations_android || null,
            url: f.evaluation_android_url || null,
          },
          ios: {
            value: f.evaluations_ios || null,
            url: f.evaluation_ios_url || null,
          },
          trustpilot: {
            value: f.evaluations_trustpilot || null,
            url: f.evaluation_trustpilot_url || null,
          },
        },

        company: {
          url: f.company_url || null,
          headquarters: f.company_headquarters || null,
          name: f.company_name,
          ownership: f.company_ownership || null,
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
      console.log(JSON.stringify(x));
      console.error(error);
      return null;
    }
  });

  console.log(`Able to add ${success} / ${response.items.length} valid items.`);
  return u.filter(items);
};
