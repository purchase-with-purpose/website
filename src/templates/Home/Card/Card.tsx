import { memo, createRef } from "react";
import { type Software } from "@/entities/software";
import { type Block, getValueFromSoftware } from "@/entities/blocks";
import s from "./Card.module.css";
import { TinyColor } from "@ctrl/tinycolor";
import c from "classnames";
import { DataBlock } from "@/components/DataBlock";

export const Inner = (props: { columns: Block[]; item: Software }) => {
  const { columns, item } = props;

  return (
    <a className={s.wrapper} href={`/software/${item.id}`}>
      <div className={s.top}>
        <div>
          <div
            className={s.icon}
            style={{
              backgroundColor: new TinyColor(item.swatch)
                .setAlpha(0.3)
                .toRgbString(),
            }}
          >
            <img className={s.image} src={item.logo} alt="" />
          </div>
        </div>

        <div>
          <h3 className={s.label}>{item.label}</h3>
        </div>
      </div>

      <div className={s.stackWrapper}>
        <div className={s.stack}>
          <div>
            <div
              className={c({
                [s.column]: true,
              })}
            >
              {columns.map((x) => {
                const value = getValueFromSoftware({
                  software: item,
                  id: x.id,
                });

                return <DataBlock id={x.id} value={value} variant="compact" />;
              })}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export const Card = memo(Inner, () => true);
