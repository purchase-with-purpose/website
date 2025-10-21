import { Shell } from "@/components/Shell";
import { faker as f } from "@faker-js/faker";
import { Features } from "./Features";
import { type Props } from "./Features.schema";
import { display } from "@/entities/Display";
import * as u from "@/helpers/utilities";

export default {
  title: "Templates/Details/Features",
  parameters: {
    layout: "fullscreen",
  },
};

const PROPS: Props = {
  features: new Array(8).fill(null).map(() => ({
    value: f.lorem.words({ min: 1, max: 3 }),
    id: f.helpers
      .arrayElement(u.keys(display))
      .replace("software.features.", "") as any,
  })),
};

export const Basic = () => (
  <Shell>
    <Features {...PROPS} />
  </Shell>
);
