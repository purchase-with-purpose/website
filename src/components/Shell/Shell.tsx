import "./Shell.css";
import { useState } from "react";
import s from "./Shell.module.css";
import c from "classnames";
import { type JSX } from "react";
import { useScrollDirection } from "./Shell.useScrollDirection";
import { Menu, Icon } from "./Menu";
import { Logo } from "./Shell.Logo";

export const Shell = (props: {
  children: JSX.Element | JSX.Element[];
  header?: JSX.Element | true;
  title?: string;
}) => {
  const { children, header, title } = props;
  const direction = useScrollDirection();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={s.wrapper}>
        {header !== undefined && (
          <header
            className={c({ [s.header]: true, [s.up]: direction === "up" })}
          >
            <div className={s.top}>
              {!title ? <Logo /> : <h1 className={s.title}>{title}</h1>}

              <Icon open={open} toggleOpen={() => setOpen((x) => !x)} />
            </div>

            {header !== true && (
              <div className={s.controlsWrapper}>{header}</div>
            )}
          </header>
        )}
        <main className={s.main}>{children}</main>
      </div>

      <Menu toggleOpen={() => setOpen((x) => !x)} open={open} />
    </>
  );
};
