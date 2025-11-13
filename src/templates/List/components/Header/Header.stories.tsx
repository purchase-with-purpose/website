import { Header } from "./Header";
import { useState } from "react";

export default {
  title: "Templates/List/Header",
  parameters: {
    layout: "fullscreen",
  },
};

export const Basic = () => {
  const [active, setActive] = useState(0);
  return <Header active={active} setActive={setActive} />;
};
