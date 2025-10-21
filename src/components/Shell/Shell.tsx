import "./Shell.css";
import s from "./Shell.module.css";
import c from "classnames";
import { type JSX } from "react";
import { useScrollDirection } from "./Shell.useScrollDirection";

export const Shell = (props: {
  children: JSX.Element | JSX.Element[];
  header?: JSX.Element | true;
  title?: string;
}) => {
  const { children, header, title } = props;
  const direction = useScrollDirection();

  return (
    <div className={s.wrapper}>
      {header !== undefined && (
        <header className={c({ [s.header]: true, [s.up]: direction === "up" })}>
          <div className={s.top}>
            <h1 className={s.title}>{title}</h1>

            <button className={s.button}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                className={s.icon}
              >
                <path d="M111.87-228.28v-91h736.26v91H111.87Zm0-206.22v-91h736.26v91H111.87Zm0-206.22v-91h736.26v91H111.87Z" />
              </svg>
            </button>
          </div>

          {header !== true && <div className={s.controlsWrapper}>{header}</div>}
        </header>
      )}
      <main className={s.main}>{children}</main>
    </div>
  );
};
