import { type Software } from "@/schemas/software";
import s from "./Description.module.css";

export type Props = Pick<Software, "description">;

export const Description = (props: Props) => {
  const { description } = props;
  return <p className={s.paragraph}>{description}</p>;
};
