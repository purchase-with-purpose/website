import { Shell } from "@/components/Shell";
import * as schema from "../DataBlock.schema";
import { Compact } from "./Compact";
import { faker as f } from "@faker-js/faker";
import { BLOCK_VARIANTS } from "@/entities/blocks";
import * as u from "@/helpers/utilities";
import { GENERAL_ICON_VARIANTS } from "@/entities/icons";

export default {
  title: "Components/DataBlock/Compact",
  parameters: {
    layout: "fullscreen",
  },
};

const BASE_PROPS: schema.BaseProps = {
  label: f.lorem.words(2),
  value: f.lorem.words(3),
  icon: f.helpers.arrayElement(GENERAL_ICON_VARIANTS),
};

export const Base = () => (
  <Shell>
    <Compact {...BASE_PROPS} />
  </Shell>
);
