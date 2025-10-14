import s from "./Breadcrumbs.module.css";
import * as schema from "./Breadcrumbs.schema";

export const Breadcrumbs = (props: schema.Props) => {
  const { path } = props;

  return (
    <div className={s.wrapper}>
      {path.map((x, i) => {
        const Element = x.href ? "a" : "div";

        return (
          <>
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
              <Element className={s.item} href={x.href || undefined} key={i}>
                {x.label}
              </Element>
            </div>
          </>
        );
      })}
    </div>
  );
};
