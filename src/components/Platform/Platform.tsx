import { type Item as Software, platforms } from "@/entities/Software";
import s from "./Platform.module.css";
import * as Display from "../../entities/Display";
import { Icon } from "@/components/Icon";

export type Props = Pick<Software, "platforms">;

export const Platform = (props: { id: Software["platforms"][number] }) => {
  const { id } = props;
  const { icon } = platforms[id];

  return (
    <div className={s.wrapper}>
      <Icon variant={icon} size="xs" />
      <span>{platforms[id].label}</span>
    </div>
  );
};
