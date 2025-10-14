import { Shell } from "@/components/Shell";
import { faker as f } from "@faker-js/faker";
import { Icon } from "./Icon";
import * as schema from "./Icon.schema";
import * as Software from "@/entities/Software";

export default {
  title: "Templates/Details/Icon",
  parameters: {
    layout: "fullscreen",
  },
};

export const Basic = () => (
  <Shell header={false}>
    <>
      {schema.VARIANTS_ARRAY.map((variant) => (
        <Icon key={variant} variant={variant} />
      ))}

      <Icon
        variant={`flag-${f.helpers.arrayElement(Software.ORIGIN_ID_ARRAY)}`}
      />
      <Icon
        variant={`flag-${f.helpers.arrayElement(Software.ORIGIN_ID_ARRAY)}`}
      />
      <Icon
        variant={`flag-${f.helpers.arrayElement(Software.ORIGIN_ID_ARRAY)}`}
      />
    </>
  </Shell>
);
