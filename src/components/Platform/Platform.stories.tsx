import { Shell } from "@/components/Shell";
import { Platform } from "./Platform";

export default {
  title: "Components/Platform",
  parameters: {
    layout: "fullscreen",
  },
};

export const Basic = () => (
  <Shell>
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <Platform id="android" />
      <Platform id="ios" />
      <Platform id="linux" />
      <Platform id="mac" />
      <Platform id="web" />
      <Platform id="windows" />
    </div>
  </Shell>
);
