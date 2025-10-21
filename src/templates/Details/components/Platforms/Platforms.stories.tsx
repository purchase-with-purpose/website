import { Shell } from "@/components/Shell";
import { type Props, Platforms } from "./Platforms";
import { platforms } from "@/entities/Software";
import { faker as f } from "@faker-js/faker";
import * as u from "@/helpers/utilities";

export default {
  title: "Templates/Details/Tags",
  parameters: {
    layout: "fullscreen",
  },
};

const PROPS: Props = {
  platforms: f.helpers.arrayElements(u.keys(platforms), { min: 1, max: 5 }),
};

export const Basic = () => (
  <Shell>
    <Platforms {...PROPS} />
  </Shell>
);
