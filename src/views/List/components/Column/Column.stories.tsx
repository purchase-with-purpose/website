import { Column } from "./Column";
import * as __mocking__ from "@/entities/software/__mocking__";

export default {
  title: "Templates/List/Column",
};

const item = __mocking__.createItem();

export const Recommended = () => {
  return <Column item={item} column="recommended" />;
};

export const Company = () => {
  return <Column item={item} column="company" />;
};

export const Features = () => {
  return <Column item={item} column="features" />;
};

export const Platforms = () => {
  return <Column item={item} column="platforms" />;
};

export const Pricing = () => {
  return <Column item={item} column="pricing" />;
};

export const Ratings = () => {
  return <Column item={item} column="ratings" />;
};
