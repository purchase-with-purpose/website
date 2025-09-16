import { Shell } from "@/components/Shell";
import { type Props, ValueBlock } from "./ValueBlock";

export default {
  title: "Templates/Details/ValueBlock",
  parameters: {
    layout: "fullscreen",
  },
};

const PROPS: Props = {
  secondary: "Secondary Text",
  primary: "Primary Text",
};

export const Basic = () => (
  <Shell header={false}>
    <ValueBlock {...PROPS} />
  </Shell>
);

export const WithIcon = () => (
  <Shell header={false}>
    <ValueBlock {...PROPS} children={<div>✅</div>} />
  </Shell>
);
