import { type Software, INDICATOR_VARIANTS } from "@/entities/software";
import s from "./Indicator.module.css";
import c from "classnames";

export const Indicator = (props: {
  id: Software["indicators"][number];
  compact: boolean;
}) => {
  const { id, compact } = props;
  const { label, swatch, emoji } = INDICATOR_VARIANTS[id];

  return (
    <div
      className={s.wrapper}
      style={{
        backgroundColor: swatch,
      }}
    >
      <span>{emoji}</span>
      <span
        className={c({
          [s.label]: true,
          [s.compact]: compact,
        })}
      >
        {label}
      </span>
    </div>
  );
};
