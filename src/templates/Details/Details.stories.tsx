import { Shell } from "@/components/Shell";
import { Details } from "./Details";

export default {
  title: "Templates/Details",
  parameters: {
    layout: "fullscreen",
  },
};

export const Basic = () => (
  <Shell header={false}>
    <Details />
  </Shell>
);
