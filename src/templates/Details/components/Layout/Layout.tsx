import * as schema from "./Layout.schema";
import s from "./Layout.module.css";

export const Layout = (props: schema.Props) => {
  return (
    <div className={s.wrapper}>
      <main className={s.content}>
        <div className={s.breadcrumbs}>{props.breadcrumbs}</div>
        <div>{props.top}</div>
        <div>{props.platforms}</div>
        <div>{props.description}</div>

        <div>{props.features}</div>
        <div>{props.disclaimers}</div>
        <div>{props.screenshots}</div>
      </main>

      <aside className={s.sidebar}>
        <div>{props.company}</div>
        <div>{props.tiers}</div>
        <div>{props.privacy}</div>
        <div>{props.reviews}</div>
      </aside>
    </div>
  );
};
