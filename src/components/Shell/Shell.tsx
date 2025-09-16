import "./Shell.css";
import s from "./Shell.module.css";
import type { JSX } from "react";

export const Shell = (props: {
  children: JSX.Element | JSX.Element[];
  header: boolean;
}) => {
  const { children, header } = props;

  return (
    <div className={s.wrapper}>
      {header && <header className={s.header} />}
      <main className={s.main}>{children}</main>
    </div>
  );
};
