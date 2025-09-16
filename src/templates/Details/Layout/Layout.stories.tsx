import { Shell } from "@/components/Shell";
import { faker as f } from "@faker-js/faker";
import { type Props, Layout } from "./Layout";

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
  tags: <div>Tags</div>,
  features: <div>Features</div>,
  disclaimers: <div>Disclaimers</div>,
  screenshots: <div>Screenshots</div>,
  company: <div>Company</div>,
  tiers: <div>Tiers</div>,
  privacy: <div>Privacy</div>,
  reviews: <div>Reviews</div>,
};

export const Basic = () => (
  <Shell header={true}>
    <Layout {...PROPS} />
  </Shell>
);
