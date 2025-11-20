import { type Software, PLATFORM_VARIANTS } from "@/entities/software";
import s from "./Platforms.module.css";

export type Props = Pick<Software, "platforms">;

export const Platforms = (props: Props) => {
  return (
    <div className={s.wrapper}>
      {props.platforms.map((x) => (
        <div key={x} className={s.tag}>
          {PLATFORM_VARIANTS[x].label}
        </div>
      ))}
    </div>
  );
};
