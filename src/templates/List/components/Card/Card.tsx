import { memo } from "react";
import * as Software from "@/entities/Software";
import s from "./Card.module.css";
import { TinyColor } from "@ctrl/tinycolor";
import c from "classnames";

import { Indicator } from "@/components/Indicator";

import {
  type Props as DataBlockProps,
  DataBlock,
} from "@/components/DataBlock";

export const Inner = (props: {
  offset: number;
  active: number;
  columns: Omit<DataBlockProps, "variant">[][];
  item: Software.Item;
}) => {
  const { offset, active, columns, item } = props;

  return (
    <article className={s.wrapper}>
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
          <div style={{ display: "flex", gap: "0.5rem", paddingTop: "0.5rem" }}>
            {item.indicators.map((x) => (
              <Indicator id={x} compact />
            ))}
          </div>

          {/* <p className={s.small}>{item.company.name}</p> */}
        </div>
      </div>

      <div className={s.stackWrapper}>
        <div className={s.stack}>
          {columns.map((array, index) => {
            return (
              <div key={index}>
                <div
                  style={{
                    left: `${index * 16}rem`,
                  }}
                  className={c({
                    [s.column]: true,
                    [s.focus]: index === active,
                  })}
                >
                  {array.map((x) => {
                    return (
                      <DataBlock id={x.id} value={x.value} variant="compact" />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
};

export const Card = memo(Inner, (prev, next) => {
  if (prev.offset !== next.offset) return false;
  if (prev.active !== next.active) return false;
  return true;
});
