import { Shell } from "@/components/Shell";
import { faker as f } from "@faker-js/faker";
import { Icon } from "./Icon";
import * as Software from "@/entities/Software";
import * as Display from "@/entities/Display";

export default {
  title: "Components/Icon",
  parameters: {
    layout: "fullscreen",
  },
};

export const Basic = () => (
  <Shell>
    <>
      {Display.GENERAL_ICON_VARIANTS.map((variant) => (
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
