import { memo } from "react";
import s from "./Card.module.css";
import { TinyColor } from "@ctrl/tinycolor";
import c from "classnames";
import {
  DataBlock,
  type Props as DataBlockProps,
} from "@/components/DataBlock";
import * as schema from "../../schema";

export const Inner = (props: schema.Item) => {
  const { id, label, logo, swatch, recommended } = props;

  return (
    <a className={s.wrapper} href={`/software/${id}`}>
      <div className={s.top}>
        <div>
          <div
            className={s.icon}
            style={{
              backgroundColor: new TinyColor(swatch)
                .setAlpha(0.3)
                .toRgbString(),
            }}
          >
            <img className={s.image} src={logo} alt="" />
          </div>
        </div>

        <div>
          <h3 className={s.label}>{label}</h3>
        </div>
      </div>

      <div className={s.stackWrapper}>
        <div className={s.stack}>
          <div className={s.column}>
            {recommended.map((x) => {
              return <DataBlock {...x} variant="compact" key={x.label} />;
            })}
          </div>
        </div>
      </div>
    </a>
  );
};

export const Card = memo(Inner, (prev, next) => {
  return true;
});
