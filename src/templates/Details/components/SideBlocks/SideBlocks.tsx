import s from "./SideBlocks.module.css";
import {
  type Props as DataBlockProps,
  DataBlock,
} from "@/components/DataBlock";

export const SideBlocks = (props: {
  title: string;
  items: DataBlockProps[];
}) => {
  const { title, items } = props;

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>{title}</h2>

      <div className={s.content}>
        {items.map((x, i) => (
          <div key={i} className={s.item}>
            <DataBlock {...x} variant="sidebar" />
          </div>
        ))}
      </div>
    </div>
  );
};
