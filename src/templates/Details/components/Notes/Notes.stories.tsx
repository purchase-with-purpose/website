import { Shell } from "@/components/Shell";
import { faker as f } from "@faker-js/faker";
import { type Props, Notes } from "./Notes";

export default {
  title: "Templates/Details/Disclaimer",
  parameters: {
    layout: "fullscreen",
  },
};

const PROPS: Props = {
  value: f.lorem.paragraphs(6),
  variant: "disclaimer",
};

export const Warning = () => (
  <Shell>
    <Notes {...PROPS} variant="warning" />
  </Shell>
);

export const Disclaimer = () => (
  <Shell>
    <Notes {...PROPS} variant="disclaimer" />
  </Shell>
);
