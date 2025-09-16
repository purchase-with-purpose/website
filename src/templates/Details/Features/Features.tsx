import { type Props as ValueBlockProps, ValueBlock } from "../ValueBlock";
import s from "./Features.module.css";

export type Props = {
  features: ValueBlockProps[];
};

export const Features = (props: Props) => {
  const { features } = props;

  return (
    <div className={s.featuresWrap}>
      {features.map((x, i) => (
        <ValueBlock key={i} {...x} />
      ))}
    </div>
  );
};
