import s from "./SideBlocks.module.css";
import { ValueBlock } from "../ValueBlock";
import * as schema from "./SideBlocks.schema";

export const SideBlocks = (props: schema.Props) => {
  const { title, blocks } = props;

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>{title}</h2>

      <div className={s.content}>
        {blocks.map((x, i) => (
          <div key={i} className={s.item}>
            <ValueBlock {...x} />
          </div>
        ))}
      </div>
    </div>
  );
};
