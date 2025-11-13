import { Shell } from "@/components/Shell";
import { Indicator } from "./Indicator";

export default {
  title: "Components/Indicator",
  parameters: {
    layout: "fullscreen",
  },
};

export const Basic = () => (
  <Shell>
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <Indicator id="environmental" compact={false} />
      <Indicator id="open-source" compact={false} />
      <Indicator id="privacy" compact={false} />
      <Indicator id="self-hosted" compact={false} />
    </div>
  </Shell>
);
