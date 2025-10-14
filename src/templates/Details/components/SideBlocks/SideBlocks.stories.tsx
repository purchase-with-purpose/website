import { Shell } from "@/components/Shell";
import { faker as f } from "@faker-js/faker";
import { SideBlocks } from "./SideBlocks";
import * as schema from "./SideBlocks.schema";

export default {
  title: "Templates/Details/SideBlocks",
  parameters: {
    layout: "fullscreen",
  },
};

const PROPS: schema.Props = {
  title: f.lorem.words({ min: 1, max: 3 }),
  blocks: [
    {
      primary: f.lorem.words({ min: 1, max: 3 }),
      secondary: f.lorem.words({ min: 1, max: 3 }),
      icon: "check",
    },
    {
      primary: f.lorem.words({ min: 1, max: 3 }),
      secondary: f.lorem.words({ min: 1, max: 3 }),
      icon: "check",
    },
    {
      primary: f.lorem.words({ min: 1, max: 3 }),
      secondary: f.lorem.words({ min: 1, max: 3 }),
      icon: "check",
    },
  ],
};

export const Basic = () => (
  <Shell header={true}>
    <SideBlocks {...PROPS} />
  </Shell>
);
