import * as schema from "../../schema";
import s from "./Features.module.css";
import { Icon } from "@/components/Icon";

export const Features = (props: Pick<schema.Props, "features">) => {
  const { features } = props;

  return (
    <div className={s.wrapper}>
      {features.map((x) => {
        return (
          <div className={s.item} key={x.label}>
            <div className={s.icon}>
              <Icon variant={x.icon} size="m" />
            </div>

            <div className={s.content}>
              <div className={s.primary}>{x.label}</div>
              <div className={s.secondary}>{x.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
