import { Card } from "./Card";
import * as __mocking__ from "@/entities/software/__mocking__";
import { calcItems } from "../../helpers";

export default {
  title: "Templates/Home/Card",
};

const example = __mocking__.createItem();
const inner = calcItems([example])[0];

export const Basic = () => {
  return <Card {...inner} />;
};
