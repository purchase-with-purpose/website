import * as schema from "./Layout.schema";
import s from "./Layout.module.css";

export const Layout = (props: schema.Props) => {
  return (
    <div className={s.wrapper}>
      <main className={s.content}>
        <div className={s.breadcrumbs}>{props.breadcrumbs}</div>
        <div>{props.top}</div>

        <div>{props.description}</div>

        {props.features && (
          <>
            <h2 className={s.subtitle}>Features</h2>
            <div>{props.features}</div>
          </>
        )}

        {props.platforms && (
          <>
            <h2 className={s.subtitle}>Platforms</h2>
            <div>{props.platforms}</div>
          </>
        )}

        <div>{props.disclaimers}</div>
        <div>{props.screenshots}</div>
      </main>

      <aside className={s.sidebar}>
        <div>{props.company}</div>
        <div>{props.tiers}</div>
        <div>{props.reviews}</div>
      </aside>
    </div>
  );
};
