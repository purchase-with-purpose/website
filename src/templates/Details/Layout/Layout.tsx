import type { JSX } from "react";
import s from "./Layout.module.css";

export type Props = {
  breadcrumbs: JSX.Element;
  top: JSX.Element;
  description: JSX.Element;
  tags: JSX.Element;
  features: JSX.Element;
  disclaimers: JSX.Element;
  screenshots: JSX.Element;
  company: JSX.Element;
  tiers: JSX.Element;
  privacy: JSX.Element;
  reviews: JSX.Element;
};

export const Layout = (props: Props) => {
  return (
    <div className={s.wrapper}>
      <main className={s.content}>
        <div>{props.breadcrumbs}</div>
        <div>{props.top}</div>
        <div>{props.description}</div>
        <div>{props.tags}</div>
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
