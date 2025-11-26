import { memo } from "react";
import s from "./Card.module.css";
import { TinyColor } from "@ctrl/tinycolor";
import c from "classnames";
import { DataBlock } from "@/components/DataBlock";
import { type Item } from "../../schema";

const calcCardWidth = (innerWidth: number) => {
  const total = innerWidth;
  if (total > 16 * 16 * 2) return 16 * 16;

  const margins = 32;
  const available = total - margins;
  return available;
};

const calcOffset = (active: number, innerWidth: number) => {
  const margins = 32;
  const item = calcCardWidth(innerWidth);

  const max = 5;
  const total = innerWidth;
  const fit = Math.floor(total / item);
  const halfFit = Math.ceil(fit / 2);

  const required = item * max;
  const available = total - margins;

  if (available >= required) return 0;

  const halfWay = total / 2 - margins / 2;
  const currentStart = active * item;

  if (currentStart < halfWay) return 0;

  const diff = required - available;
  if (active + halfFit >= max) return diff;

  return active * item - (halfWay - item / 2);
};

export const Inner = (props: Item & { active: number; innerWidth: number }) => {
  const { active, cells, height, id, label, logo, swatch } = props;

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
        <div
          className={s.stack}
          style={{
            transform: `translateX(-${calcOffset(active, innerWidth)}px)`,
          }}
        >
          {cells.map((array, index) => {
            return (
              <div key={index}>
                <div
                  style={{
                    width: `${calcCardWidth(innerWidth)}px`,
                  }}
                  className={c({
                    [s.column]: true,
                    [s.focus]: index === active,
                  })}
                >
                  {array.map((x) => {
                    return <DataBlock {...x} variant="compact" />;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </a>
  );
};

export const Card = memo(Inner, (prev, next) => {
  if (prev.innerWidth !== next.innerWidth) return false;
  if (prev.active !== next.active) return false;
  return true;
});
