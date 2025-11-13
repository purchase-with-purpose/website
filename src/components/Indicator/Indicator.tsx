import { type Item as Software } from "@/entities/Software";
import s from "./Indicator.module.css";
import { indicators } from "@/entities/Software";
import c from "classnames";

export const Indicator = (props: {
  id: Software["indicators"][number];
  compact: boolean;
}) => {
  const { id, compact } = props;
  const { label, swatch, emoji } = indicators[id];

  return (
    <div
      className={s.wrapper}
      style={{
        backgroundColor: swatch,
      }}
    >
      <span>{emoji}</span>
      {/* <span
        className={c({
          [s.label]: true,
          [s.compact]: compact,
        })}
      >
        {label}
      </span> */}
    </div>
  );
};
