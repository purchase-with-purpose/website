import { Breadcrumbs } from "./Breadcrumbs";
import { Layout } from "./Layout";
import { Description } from "./Description";
import { Features } from "./Features";
import { Tags } from "./Tags";
import { TopBlock } from "./TopBlock";
import { SideBlocks } from "./SideBlocks";
import { categories } from "../../schemas/software";
import { createItem } from "@/mocks/software";

const item = createItem();

const icons = {
  capterra: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="4.978 2.022 320.044 325.956"
    >
      <path fill="#ff9d28" d="m4.978 121.868 135.18.027 82.2.014V40.475z" />
      <path fill="#68c5ed" d="M222.357 40.475v287.503L325.022 2.022z" />
      <path fill="#044d80" d="m222.357 121.909-82.199-.014 82.2 206.083z" />
      <path
        fill="#e54747"
        d="m4.978 121.868 156.26 52.905-21.08-52.878-135.18-.027z"
      />
    </svg>
  ),
};

export const Details = () => {
  return (
    <Layout
      breadcrumbs={
        <Breadcrumbs
          path={[
            {
              label: "Home",
              href: "#",
            },
            {
              label: categories[item.category].label,
              href: "#",
            },
            {
              label: item.label,
              href: null,
            },
          ]}
        />
      }
      description={<Description description={item.description} />}
      features={<Features features={[]} />}
      disclaimers={<div>Disclaimers</div>}
      screenshots={<div>Screenshots</div>}
      company={
        <SideBlocks
          title="Ownership"
          blocks={[
            {
              primary: "Puppy Inc.",
              secondary: "Company",
              children: <div>.</div>,
            },
            {
              primary: "Puppy Inc.",
              secondary: "Company",
              children: <div>.</div>,
            },
            {
              primary: "Puppy Inc.",
              secondary: "Company",
              children: <div>.</div>,
            },
          ]}
        />
      }
      tiers={
        <SideBlocks
          title="Tiers"
          blocks={[
            {
              primary: "Puppy Inc.",
              secondary: "Company",
              children: <div>.</div>,
            },
            {
              primary: "Puppy Inc.",
              secondary: "Company",
              children: <div>.</div>,
            },
            {
              primary: "Puppy Inc.",
              secondary: "Company",
              children: <div>.</div>,
            },
          ]}
        />
      }
      privacy={
        <SideBlocks
          title="Privacy"
          blocks={[
            {
              primary: "Puppy Inc.",
              secondary: "Company",
              children: <div>.</div>,
            },
            {
              primary: "Puppy Inc.",
              secondary: "Company",
              children: <div>.</div>,
            },
            {
              primary: "Puppy Inc.",
              secondary: "Company",
              children: <div>.</div>,
            },
          ]}
        />
      }
      reviews={
        <SideBlocks
          title="Reviews"
          blocks={[
            {
              primary: "87%",
              secondary: "Capterra",
              url: "#asd",
              children: icons.capterra,
            },
          ]}
        />
      }
      tags={<Tags tags={item.tags} />}
      top={
        <TopBlock
          indicators={item.indicators}
          label={item.label}
          logo={item.logo}
          url={item.url}
        />
      }
    />
  );
};
