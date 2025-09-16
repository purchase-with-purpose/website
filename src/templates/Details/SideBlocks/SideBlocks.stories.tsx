import { Shell } from "@/components/Shell";
import { faker as f } from "@faker-js/faker";
import { type Props, SideBlocks } from "./SideBlocks";

export default {
  title: "Templates/Details/SideBlocks",
  parameters: {
    layout: "fullscreen",
  },
};

const PROPS: Props = {
  title: f.lorem.words({ min: 1, max: 3 }),
  blocks: [
    {
      primary: f.lorem.words({ min: 1, max: 3 }),
      secondary: f.lorem.words({ min: 1, max: 3 }),
      children: <div>.</div>,
    },
    {
      primary: f.lorem.words({ min: 1, max: 3 }),
      secondary: f.lorem.words({ min: 1, max: 3 }),
      children: <div>.</div>,
    },
    {
      primary: f.lorem.words({ min: 1, max: 3 }),
      secondary: f.lorem.words({ min: 1, max: 3 }),
      children: <div>.</div>,
    },
  ],
};

export const Basic = () => (
  <Shell header={true}>
    <SideBlocks {...PROPS} />
  </Shell>
);
