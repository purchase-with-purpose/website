import { type Props } from "./Features.schema";
import { display } from "@/entities/Display";
import s from "./Features.module.css";
import { Icon } from "@/components/Icon";

export const Features = (props: Props) => {
  const { features } = props;

  return (
    <div className={s.wrapper}>
      {features.map((x) => {
        const { label, icon } = display[`software.features.${x}`];

        return (
          <div className={s.item}>
            <div className={s.icon}>
              <Icon variant={icon} size="m" />
            </div>

            <div className={s.content}>
              <div className={s.primary}>NAME HERE</div>
              <div className={s.secondary}>DESCRIPTION HERE</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
