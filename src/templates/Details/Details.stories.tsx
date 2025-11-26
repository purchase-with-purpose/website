import { Details } from "./Details";
import * as schema from "./schema";
import * as __mocking__ from "@/entities/software/__mocking__";
import { calcProps } from "./helpers";

export default {
  title: "Templates/Details",
  parameters: {
    layout: "fullscreen",
  },
};

const PROPS: schema.Props = calcProps(__mocking__.createItem());

export const Basic = () => (
  <Details
    {...PROPS}
    logo="https://upload.wikimedia.org/wikipedia/commons/9/9d/Brave_lion_icon.svg"
  />
);
