import { Shell } from "@/components/Shell";
import * as schema from "../DataBlock.schema";
import { Compact, CompactBase } from "./Compact";
import { faker as f } from "@faker-js/faker";
import * as Display from "@/entities/Display";
import * as u from "@/helpers/utilities";

export default {
  title: "Components/DataBlock/Compact",
  parameters: {
    layout: "fullscreen",
  },
};

const BASE_PROPS: schema.BaseProps = {
  label: f.lorem.words(2),
  value: f.lorem.words(3),
  icon: f.helpers.arrayElement(Display.GENERAL_ICON_VARIANTS),
};

const PROPS: schema.Props = {
  id: f.helpers.arrayElement(u.keys(Display.display)),
  value: f.lorem.words(3),
  variant: "compact",
};

export const Base = () => (
  <Shell>
    <CompactBase {...BASE_PROPS} />
  </Shell>
);

export const Basic = () => (
  <Shell>
    <Compact {...PROPS} />
  </Shell>
);
