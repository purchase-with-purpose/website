import { Shell } from "@/components/Shell";
import { Sidebar } from "./Sidebar";
import * as schema from "../DataBlock.schema";

export default {
  title: "Components/DataBlock/Sidebar",
  parameters: {
    layout: "fullscreen",
  },
};

const BASE_PROPS: schema.Props = {
  label: "Secondary Text",
  value: "Primary Text",
  icon: "check",
  url: "https://example.com",
  fill: false,
  color: "#42A5F5",
  variant: "sidebar",
};

export const Basic = () => (
  <Shell>
    <Sidebar {...BASE_PROPS} />
  </Shell>
);

export const Filled = () => (
  <Shell>
    <Sidebar {...BASE_PROPS} fill={true} />
  </Shell>
);
