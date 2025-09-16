import { type Software, tags } from "@/schemas/software";
import s from "./Tags.module.css";

export type Props = Pick<Software, "tags">;

export const Tags = (props: Props) => {
  return (
    <div className={s.wrapper}>
      {props.tags.map((x) => (
        <div key={x} className={s.tag}>
          {tags[x].label}
        </div>
      ))}
    </div>
  );
};
