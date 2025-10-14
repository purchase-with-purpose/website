import { Shell } from "@/components/Shell";
import { ValueBlock } from "./ValueBlock";
import { type Props } from "./ValueBlock.schema";

export default {
  title: "Templates/Details/ValueBlock",
  parameters: {
    layout: "fullscreen",
  },
};

const PROPS: Props = {
  secondary: "Secondary Text",
  primary: "Primary Text",
  icon: "check",
  url: "https://example.com",
};

export const Basic = () => (
  <Shell header={false}>
    <ValueBlock {...PROPS} />
  </Shell>
);

export const WithIcon = () => (
  <Shell header={false}>
    <ValueBlock {...PROPS} />
  </Shell>
);
