import { ValueBlock } from "../ValueBlock";
import { type Props } from "./Features.schema";
import s from "./Features.module.css";
import { Icon } from "../Icon";

export const Features = (props: Props) => {
  const { features } = props;

  return (
    <div className={s.wrapper}>
      {features.map((x) => (
        <div className={s.item}>
          <div className={s.icon}>
            <Icon variant={x.icon} size="s" />
          </div>

          <div className={s.content}>
            <div className={s.secondary}>{x.label}</div>
            <div className={s.primary}>{x.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
