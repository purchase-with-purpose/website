import * as schema from "../DataBlock.schema";
import { Icon } from "@/components/Icon";
import s from "./Compact.module.css";
import { TinyColor } from "@ctrl/tinycolor";

export const Compact = (props: schema.Props) => {
  const { label, value, icon, color, fill } = props;
  const inner = new TinyColor(color || "#231cad");

  return (
    <div className={s.wrapper}>
      <div
        className={s.icon}
        style={{
          fill: inner.toRgbString(),
          color: fill ? "white" : color || "#24224B",

          backgroundColor: fill
            ? color || "#24224B"
            : inner.setAlpha(0.05).toRgbString(),
        }}
      >
        <Icon variant={icon} size="s" />
      </div>

      <p className={s.value}>{value || label}</p>
      {value && value !== label && <p className={s.label}>{label}</p>}
    </div>
  );
};
