import { Shell } from "@/components/Shell";
import { TopBlock } from "./TopBlock";
import { type Props } from "./TopBlock.schema";

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
  url: "https://brave.com",
};

export const Basic = () => (
  <Shell header={false}>
    <TopBlock {...PROPS} />
  </Shell>
);
