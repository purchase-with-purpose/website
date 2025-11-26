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

const PROPS: Omit<schema.Props, "dispatch"> = calcProps(
  __mocking__.createItem()
);

export const Basic = () => (
  <Details
    {...PROPS}
    dispatch={console.log}
    logo="https://upload.wikimedia.org/wikipedia/commons/9/9d/Brave_lion_icon.svg"
  />
);
