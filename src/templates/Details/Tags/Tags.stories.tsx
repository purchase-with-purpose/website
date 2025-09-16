import { Shell } from "@/components/Shell";
import { type Props, Tags } from "./Tags";

export default {
  title: "Templates/Details/Tags",
  parameters: {
    layout: "fullscreen",
  },
};

const PROPS: Props = {
  tags: ["global.windows", "global.mac", "global.android", "global.ios"],
};

export const Basic = () => (
  <Shell header={false}>
    <Tags {...PROPS} />
  </Shell>
);
