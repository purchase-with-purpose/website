import { Shell } from "@/components/Shell";
import { Sidebar, SidebarBase } from "./Sidebar";
import * as schema from "../DataBlock.schema";
import * as u from "../../../helpers/utilities";
import { faker as f } from "@faker-js/faker";
import { BLOCK_VARIANTS } from "@/entities/blocks";

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

const PROPS: schema.Props = {
  id: f.helpers.arrayElement(u.keys(BLOCK_VARIANTS)),
  value: f.lorem.words(3),
  variant: "compact",
};

export const Basic = () => (
  <Shell>
    <SidebarBase {...BASE_PROPS} />
  </Shell>
);

export const WithIcon = () => (
  <Shell>
    <Sidebar {...PROPS} />
  </Shell>
);
