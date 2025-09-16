import s from "./SideBlocks.module.css";
import { type Props as ValueBlockProps, ValueBlock } from "../ValueBlock";

export type Props = {
  title: string;
  blocks: ValueBlockProps[];
};

export const SideBlocks = (props: Props) => {
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
