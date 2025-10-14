import { Shell } from "@/components/Shell";
import { Details } from "./Details";
import * as __mocking__ from "@/entities/Software/__mocking__";

export default {
  title: "Templates/Details",
  parameters: {
    layout: "fullscreen",
  },
};

export const Basic = () => (
  <Shell header={true}>
    <Details
      {...__mocking__.createItem()}
      logo="https://upload.wikimedia.org/wikipedia/commons/9/9d/Brave_lion_icon.svg"
    />
  </Shell>
);
