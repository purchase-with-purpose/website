import { Breadcrumbs } from "./components/Breadcrumbs";
import { Layout } from "./components/Layout";
import { Description } from "./components/Description";
import { Features } from "./components/Features";
import { Tags } from "./components/Tags";
import { TopBlock } from "./components/TopBlock";
import { Notes } from "./components/Notes";
import { SideBlocks } from "./components/SideBlocks";
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
    tags,
    indicators,
    company,
    tiers,
    features,
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
              primary: company.name,
              secondary: "Company",
              icon: "company",
            },
            {
              primary: Software.ORIGIN_LABELS[company.ownership],
              secondary: "Ownership",
              icon: `flag-${company.ownership}` as const,
            },
            company.headquarters && {
              primary: Software.ORIGIN_LABELS[company.headquarters],
              secondary: "Headquarters",
              icon: `flag-${company.headquarters}` as const,
            },
            {
              primary: company.structure,
              secondary: "Structure",
              icon: "person",
            },
          ])}
        />
      }
      tiers={
        <SideBlocks
          title="Tiers"
          blocks={u.filter([
            tiers.free && {
              primary: Software.tiers.free.label,
              secondary: tiers.free.value,
              icon: "level-one",
              color: "#543BF1",
            },
            tiers.basic && {
              primary: Software.tiers.basic.label,
              secondary: tiers.basic.value,
              icon: "level-two",
              color: "#543BF1",
            },
            tiers.premium && {
              primary: Software.tiers.premium.label,
              secondary: tiers.premium.value,
              icon: "level-three",
              color: "#543BF1",
            },
          ])}
        />
      }
      privacy={
        <SideBlocks
          title="Privacy"
          blocks={u.filter([Software.calcEvaluationDisplay(evaluations.cspp)])}
        />
      }
      reviews={
        <SideBlocks
          title="Reviews"
          blocks={u.filter([
            Software.calcEvaluationDisplay(evaluations.capterra),
            Software.calcEvaluationDisplay(evaluations.trustpilot),
          ])}
        />
      }
      tags={<Tags tags={tags} />}
      top={
        <TopBlock indicators={indicators} label={label} logo={logo} url={url} />
      }
    />
  );
};
