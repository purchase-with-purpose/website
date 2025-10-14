import { type Item as Software } from "@/entities/Software";
import s from "./Description.module.css";

export type Props = Pick<Software, "description">;

export const Description = (props: Props) => {
  const { description } = props;
  return <p className={s.paragraph}>{description}</p>;
};
