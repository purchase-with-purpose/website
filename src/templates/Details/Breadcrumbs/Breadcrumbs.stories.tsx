import { Shell } from "@/components/Shell";
import { type Props, Breadcrumbs } from "./Breadcrumbs";

export default {
  title: "Templates/Details/Breadcrumbs",
  parameters: {
    layout: "fullscreen",
  },
};

const PROPS: Props = {
  path: [
    { label: "Home", href: "#" },
    { label: "Browsers", href: "#" },
    { label: "Brave", href: null },
  ],
};

export const Basic = () => (
  <Shell header={false}>
    <Breadcrumbs {...PROPS} />
  </Shell>
);
