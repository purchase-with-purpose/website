import { Shell } from "@/components/Shell";
import { faker as f } from "@faker-js/faker";
import { Features } from "./Features";
import { type Props } from "./Features.schema";
import { FEATURES_ID_ARRAY } from "@/entities/Software";

export default {
  title: "Templates/Details/Features",
  parameters: {
    layout: "fullscreen",
  },
};

const PROPS: Props = {
  features: f.helpers.arrayElements(FEATURES_ID_ARRAY, {
    min: 1,
    max: 3,
  }),
};

export const Basic = () => (
  <Shell>
    <Features {...PROPS} />
  </Shell>
);
