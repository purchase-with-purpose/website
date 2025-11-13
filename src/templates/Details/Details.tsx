import { Breadcrumbs } from "./components/Breadcrumbs";
import { Layout } from "./components/Layout";
import { Description } from "./components/Description";
import { Features } from "./components/Features";
import { TopBlock } from "./components/TopBlock";
import { Notes } from "./components/Notes";
import { SideBlocks } from "./components/SideBlocks";
import { Platforms } from "./components/Platforms";
import { Gallery } from "./components/Gallery";
import * as Software from "@/entities/Software";
import * as u from "@/helpers/utilities";

export const Details = (props: Software.Item) => {
  const {
    category,
    label,
    description,
    notes,
    evaluations,
    logo,
    url,
    indicators,
    company,
    tiers,
    features,
    platforms,
  } = props;

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
              label: Software.categories[category].label,
              href: "#",
            },
            {
              label: label,
              href: null,
            },
          ]}
        />
      }
      description={<Description description={description} />}
      features={<Features features={features} />}
      disclaimers={
        <>
          {notes.map((x, i) => {
            return <Notes key={i} value={x.value} variant={x.variant} />;
          })}
        </>
      }
      screenshots={<Gallery />}
      company={
        <SideBlocks
          title="Company"
          blocks={u.filter([
            {
              id: "software.company.name",
              value: company.name,
            },
            company.ownership && {
              id: "software.company.ownership",
              value: company.ownership,
            },

            {
              id: "software.company.headquarters",
              value: company.headquarters,
            },
          ])}
        />
      }
      tiers={
        <SideBlocks
          title="Tiers"
          blocks={u.filter([
            tiers.free && {
              id: "software.tiers.free",
              value: tiers.free?.value.toString(),
            },

            tiers.basic && {
              id: "software.tiers.basic",
              value: tiers.basic?.value.toString(),
            },
            tiers.premium && {
              id: "software.tiers.premium",
              value: tiers.premium?.value.toString(),
            },
          ])}
        />
      }
      privacy={
        <SideBlocks
          title="Privacy"
          blocks={u.filter([
            evaluations.cspp && {
              id: "software.evaluations.cspp",
              value: evaluations.cspp?.value.toString(),
            },
          ])}
        />
      }
      reviews={
        <SideBlocks
          title="Reviews"
          blocks={u.filter([
            evaluations.capterra && {
              id: "software.evaluations.capterra",
              value: evaluations.capterra?.value.toString(),
            },
            evaluations.trustpilot && {
              id: "software.evaluations.trustpilot",
              value: evaluations.trustpilot?.value.toString(),
            },
          ])}
        />
      }
      platforms={<Platforms platforms={platforms} />}
      top={
        <TopBlock indicators={indicators} label={label} logo={logo} url={url} />
      }
    />
  );
};
