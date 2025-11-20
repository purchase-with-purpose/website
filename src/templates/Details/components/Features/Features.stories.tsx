import { Shell } from "@/components/Shell";
import { faker as f } from "@faker-js/faker";
import { Features } from "./Features";
import { type Props } from "./Features.schema";
import { FEATURE_VARIANTS } from "@/entities/software";
import * as u from "@/helpers/utilities";

export default {
  title: "Templates/Details/Features",
  parameters: {
    layout: "fullscreen",
  },
};

const PROPS: Props = {
  features: f.helpers.arrayElements(u.keys(FEATURE_VARIANTS), {
    min: 1,
    max: 3,
  }),
};

export const Basic = () => (
  <Shell>
    <Features {...PROPS} />
  </Shell>
);
