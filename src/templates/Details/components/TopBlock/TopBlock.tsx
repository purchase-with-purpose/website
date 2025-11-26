import s from "./TopBlock.module.css";
import * as schema from "../../schema";

export const TopBlock = (
  props: Pick<schema.Props, "title" | "logo" | "url">
) => {
  const { title, logo, url } = props;

  return (
    <div className={s.wrapper}>
      <div>
        <div className={s.logoWrap}>
          <img className={s.logo} src={logo} alt="" />
        </div>
      </div>

      <div className={s.content}>
        <div>
          <h1 className={s.title}>{title}</h1>
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={s.link}
        >
          {url}
        </a>
      </div>
    </div>
  );
};
