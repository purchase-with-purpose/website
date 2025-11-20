import { Breadcrumbs } from "./components/Breadcrumbs";
import { Layout } from "./components/Layout";
import { Description } from "./components/Description";
import { Features } from "./components/Features";
import { TopBlock } from "./components/TopBlock";
import { Notes } from "./components/Notes";
import { SideBlocks } from "./components/SideBlocks";
import { Platforms } from "./components/Platforms";
import { CATEGORY_VARIANTS } from "@/entities/categories";
import { Gallery } from "./components/Gallery";
import { type Software } from "@/entities/software";
import * as u from "@/helpers/utilities";
import { Shell } from "../../components/Shell";

export const Details = (props: Software) => {
  const {
    category,
    label,
    description,
    notes,
    evaluations,
    logo,
    url,
    indicators,
    features,
    platforms,
  } = props;

  const company = u.filter([
    {
      id: "software.company.name",
      value: props.company.name,
    },
    {
      id: "software.company.ownership",
      value: props.company.ownership,
    },
    props.company.headquarters && {
      id: "software.company.headquarters",
      value: props.company.headquarters,
    },
  ] as const);

  const tiers = u.filter([
    props.tiers.free && {
      id: "software.tiers.free" as const,
      value: props.tiers.free,
    },
    props.tiers.basic && {
      id: "software.tiers.basic" as const,
      value: props.tiers.basic,
    },
    props.tiers.premium && {
      id: "software.tiers.premium" as const,
      value: props.tiers.premium,
    },
  ] as const);

  const ratings = u.filter([
    props.evaluations.trustpilot && {
      id: "software.evaluations.trustpilot",
      value: props.evaluations.trustpilot?.toString(),
    },

    props.evaluations.android && {
      id: "software.evaluations.android",
      value: props.evaluations.android?.toString(),
    },

    props.evaluations.ios && {
      id: "software.evaluations.ios",
      value: props.evaluations.ios?.toString(),
    },

    props.evaluations["privacy-guide"] && {
      id: "software.evaluations.privacy-tools",
      value: props.evaluations["privacy-guide"]?.toString(),
    },

    props.evaluations["privacy-tools"] && {
      id: "software.evaluations.privacy-tools",
      value: props.evaluations["privacy-tools"]?.toString(),
    },
  ] as const);

  return (
    <Shell header={true}>
      <Layout
        breadcrumbs={
          <Breadcrumbs
            path={[
              {
                label: "Home",
                href: "#",
              },
              {
                label: CATEGORY_VARIANTS[category].label,
                href: `/category/${category}`,
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
        company={<SideBlocks title="Company" blocks={company as any} />}
        tiers={<SideBlocks title="Tiers" blocks={tiers as any} />}
        reviews={<SideBlocks title="Ratings" blocks={ratings as any} />}
        platforms={<Platforms platforms={platforms} />}
        top={
          <TopBlock
            indicators={indicators}
            label={label}
            logo={logo}
            url={url}
          />
        }
      />
    </Shell>
  );
};
