import { Home } from "./Home";
import * as __mocking__ from "@/entities/software/__mocking__";

export default {
  title: "Templates/Home",
  parameters: {
    layout: "fullscreen",
  },
};

export const Basic = () => <Home />;
