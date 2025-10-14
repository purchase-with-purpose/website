import { indicators } from "@/entities/Software";
import s from "./TopBlock.module.css";
import * as schema from "./TopBlock.schema";

export const TopBlock = (props: schema.Props) => {
  const { label, logo, url } = props;

  return (
    <div className={s.wrapper}>
      <div>
        <div className={s.logoWrap}>
          <img className={s.logo} src={logo} alt="" />
        </div>
      </div>

      <div className={s.content}>
        <div>
          <h1 className={s.title}>{label}</h1>

          <div className={s.indicatorWrap}>
            {props.indicators.map((x) => {
              return (
                <div
                  key={x}
                  className={s.indicator}
                  style={{
                    backgroundColor: indicators[x].swatch,
                  }}
                >
                  {indicators[x].label}
                </div>
              );
            })}
          </div>
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={s.link}
        >
          {url}
        </a>
      </div>
    </div>
  );
};
