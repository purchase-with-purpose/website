import c from "classnames";
import s from "./ValueBlock.module.css";
import { Icon } from "@/components/Icon";
import { type Props } from "./ValueBlock.schema";
import { TinyColor } from "@ctrl/tinycolor";

export const ValueBlock = (props: Props) => {
  const { secondary, primary, icon, url, color } = props;
  const Element = url ? "a" : "div";
  const inner = new TinyColor(color || "#24224B");

  return (
    <Element
      href={url || undefined}
      target={url ? "_blank" : undefined}
      className={c({
        [s.wrapper]: true,
        [s.wrapperLink]: Boolean(url),
      })}
    >
      {icon && (
        <div
          className={s.icon}
          style={{
            fill: inner.toRgbString(),
            backgroundColor: inner.setAlpha(0.05).toRgbString(),
          }}
        >
          <Icon variant={icon} />
        </div>
      )}

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
