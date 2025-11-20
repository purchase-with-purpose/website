import { Shell } from "@/components/Shell";
import { Breadcrumbs } from "./Breadcrumbs";
import { type Props } from "./Breadcrumbs.schema";

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
  <Shell>
    <Breadcrumbs {...PROPS} />
  </Shell>
);
