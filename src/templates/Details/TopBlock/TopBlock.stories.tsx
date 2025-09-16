import { Shell } from "@/components/Shell";
import { type Props, TopBlock } from "./TopBlock";

export default {
  title: "Templates/Details/TopBlock",
  parameters: {
    layout: "fullscreen",
  },
};

const PROPS: Props = {
  label: "Brave",
  indicators: ["environmental", "open-source"],
  logo: "/images/logos/brave.svg",
};

export const Basic = () => (
  <Shell header={false}>
    <TopBlock {...PROPS} />
  </Shell>
);
