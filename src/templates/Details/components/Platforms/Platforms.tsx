import { type Item as Software, platforms } from "@/entities/Software";
import s from "./Platforms.module.css";

export type Props = Pick<Software, "platforms">;

export const Platforms = (props: Props) => {
  return (
    <div className={s.wrapper}>
      {props.platforms.map((x) => (
        <div key={x} className={s.tag}>
          {platforms[x].label}
        </div>
      ))}
    </div>
  );
};
