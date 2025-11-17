import { Shell } from "@/components/Shell";
import { Layout } from "./Layout";
import { type Props } from "./Layout.schema";

export default {
  title: "Templates/Details/Layout",
  parameters: {
    layout: "fullscreen",
  },
};

const PROPS: Props = {
  breadcrumbs: <div>Breadcrumbs</div>,
  top: <div>Top</div>,
  description: <div>Description</div>,
  platforms: <div>Platforms</div>,
  features: <div>Features</div>,
  disclaimers: <div>Disclaimers</div>,
  screenshots: <div>Screenshots</div>,
  company: <div>Company</div>,
  tiers: <div>Tiers</div>,
  reviews: <div>Reviews</div>,
};

export const Basic = () => (
  <Shell header={true}>
    <Layout {...PROPS} />
  </Shell>
);
