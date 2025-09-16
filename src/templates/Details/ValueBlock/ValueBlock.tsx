import { type Software, indicators } from "@/schemas/software";
import c from "classnames";
import { type JSX } from "react";
import s from "./ValueBlock.module.css";

export type Props = {
  secondary: string;
  primary: string;
  url?: string;
  children?: JSX.Element;
};

export const ValueBlock = (props: Props) => {
  const { secondary, primary, children, url } = props;
  const Element = children ? "div" : "section";

  return (
    <Element
      className={c({
        [s.wrapper]: true,
        [s.wrapperLink]: Boolean(url),
      })}
    >
      {children && <div className={s.icon}>{children}</div>}

      <div className={s.content}>
        <div className={s.primary}>{primary}</div>
        <div
          className={c({
            [s.secondary]: true,
            [s.secondaryLink]: Boolean(url),
          })}
        >
          {secondary}
        </div>
      </div>
    </Element>
  );
};
