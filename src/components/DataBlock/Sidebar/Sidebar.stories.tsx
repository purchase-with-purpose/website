import { Shell } from "@/components/Shell";
import { Sidebar } from "./Sidebar";
import * as schema from "../DataBlock.schema";

export default {
  title: "Components/DataBlock/Sidebar",
  parameters: {
    layout: "fullscreen",
  },
};

const BASE_PROPS: schema.BaseProps = {
  label: "Secondary Text",
  value: "Primary Text",
  icon: "check",
  url: "https://example.com",
};

export const Basic = () => (
  <Shell>
    <Sidebar {...BASE_PROPS} />
  </Shell>
);
