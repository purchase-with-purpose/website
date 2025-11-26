import { Fragment } from "react";
import s from "./Breadcrumbs.module.css";
import * as schema from "../../schema";

export const Breadcrumbs = (props: Pick<schema.Props, "breadcrumbs">) => {
  const { breadcrumbs } = props;

  return (
    <div className={s.wrapper}>
      {breadcrumbs.map((x, i) => {
        const Element = x.url ? "a" : "div";

        return (
          <Fragment key={i}>
            {i > 0 && (
              <svg
                className={s.icon}
                viewBox="0 0 5 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.753716 9L0 8.20125L3.49257 4.5L0 0.79875L0.753716 0L5 4.5L0.753716 9Z"
                  fill="#24224B"
                />
              </svg>
            )}

            <div className="element-wrap">
              <Element className={s.item} href={x.url || undefined} key={i}>
                {x.label}
              </Element>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};
