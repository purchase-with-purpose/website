import { Shell } from "./Shell";

export default {
  title: "components/Shell",
  parameters: {
    layout: "fullscreen",
  },
};

export const Basic = () => (
  <Shell>
    <div>Hello World</div>
  </Shell>
);
