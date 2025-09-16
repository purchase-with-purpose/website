import s from "./Breadcrumbs.module.css";

export type Props = {
  path: {
    label: string;
    href: string | null;
  }[];
};

export const Breadcrumbs = (props: Props) => {
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
            <Element className={s.item}>{x.label}</Element>
          </>
        );
      })}
    </div>
  );
};
