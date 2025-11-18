import { Shell } from "@/components/Shell";
import { faker as f } from "@faker-js/faker";
import { Icon } from "./Icon";
import * as u from "@/helpers/utilities";
import { ORIGIN_VARIANTS } from "@/entities/software";
import { GENERAL_ICON_VARIANTS } from "@/entities/icons";

export default {
  title: "Components/Icon",
  parameters: {
    layout: "fullscreen",
  },
};

export const Basic = () => (
  <Shell>
    <>
      {GENERAL_ICON_VARIANTS.map((variant) => (
        <Icon key={variant} variant={variant} />
      ))}

      <Icon variant={f.helpers.arrayElement(u.values(ORIGIN_VARIANTS)).icon} />
      <Icon variant={f.helpers.arrayElement(u.values(ORIGIN_VARIANTS)).icon} />
      <Icon variant={f.helpers.arrayElement(u.values(ORIGIN_VARIANTS)).icon} />
    </>
  </Shell>
);
