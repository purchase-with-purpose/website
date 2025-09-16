import { Shell } from "@/components/Shell";
import { faker as f } from "@faker-js/faker";
import { type Props, Features } from "./Features";

export default {
  title: "Templates/Details/Features",
  parameters: {
    layout: "fullscreen",
  },
};

const PROPS: Props = {
  features: new Array(8).fill(null).map(() => ({
    primary: f.lorem.words({ min: 1, max: 3 }),
    secondary: f.lorem.words({ min: 1, max: 3 }),
  })),
};

export const Basic = () => (
  <Shell header={false}>
    <Features {...PROPS} />
  </Shell>
);
