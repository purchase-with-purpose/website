import { type Software, PLATFORM_VARIANTS } from "@/entities/software";
import s from "./Platform.module.css";
import { Icon } from "@/components/Icon";

export type Props = Pick<Software, "platforms">;

export const Platform = (props: { id: Software["platforms"][number] }) => {
  const { id } = props;
  const { icon } = PLATFORM_VARIANTS[id];

  return (
    <div className={s.wrapper}>
      <Icon variant={icon} size="xs" />
      <span>{PLATFORM_VARIANTS[id].label}</span>
    </div>
  );
};
