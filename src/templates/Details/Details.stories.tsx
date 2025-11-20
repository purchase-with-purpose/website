import { Details } from "./Details";
import * as __mocking__ from "@/entities/software/__mocking__";

export default {
  title: "Templates/Details",
  parameters: {
    layout: "fullscreen",
  },
};

export const Basic = () => (
  <Details
    {...__mocking__.createItem()}
    logo="https://upload.wikimedia.org/wikipedia/commons/9/9d/Brave_lion_icon.svg"
  />
);
