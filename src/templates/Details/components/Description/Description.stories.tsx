import { Shell } from "@/components/Shell";
import { faker as f } from "@faker-js/faker";
import { type Props, Description } from "./Description";

export default {
  title: "Templates/Details/Description",
  parameters: {
    layout: "fullscreen",
  },
};

const PROPS: Props = {
  description: f.lorem.paragraphs(6),
};

export const Basic = () => (
  <Shell header={false}>
    <Description {...PROPS} />
  </Shell>
);
