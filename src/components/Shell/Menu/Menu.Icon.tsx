import s from "./Menu.module.css";
import c from "classnames";

export const Icon = (props: { open: boolean; toggleOpen: () => void }) => {
  const { open, toggleOpen } = props;

  return (
    <button className={s.button} onClick={toggleOpen}>
      <div className={s.icon}>
        <div className={s.inner}>
          <span className={c({ [s.first]: true, [s.active]: open })} />
          <span className={c({ [s.second]: true, [s.active]: open })} />
          <span className={c({ [s.third]: true, [s.active]: open })} />
        </div>
      </div>
    </button>
  );
};
