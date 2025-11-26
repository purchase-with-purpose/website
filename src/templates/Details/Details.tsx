import s from "./Details.module.css";
import { Breadcrumbs } from "./components/Breadcrumbs";
import { Layout } from "./components/Layout";
import { Features } from "./components/Features";
import { TopBlock } from "./components/TopBlock";
import { Notes } from "./components/Notes";
import { SideBlocks } from "./components/SideBlocks";
import * as schema from "./schema";
import { Shell } from "../../components/Shell";

export const Details = (props: schema.Props) => {
  const {
    description,
    features,
    company,
    tiers,
    breadcrumbs,
    notes,
    ratings,
    platforms,
    indicators,
    logo,
    screenshots,
    title,
    url,
  } = props;

  return (
    <Shell header={true}>
      <Layout
        breadcrumbs={<Breadcrumbs breadcrumbs={breadcrumbs} />}
        description={<p className={s.paragraph}>{description}</p>}
        features={<Features features={features} />}
        disclaimers={
          <>
            {notes.map((x, i) => {
              return <Notes key={i} value={x.value} variant={x.variant} />;
            })}
          </>
        }
        screenshots={
          <div className={s.gallery}>
            {screenshots.map((x, i) => (
              <img key={i} className={s.image} src={x} />
            ))}
          </div>
        }
        company={<SideBlocks title="Company" items={company} />}
        tiers={<SideBlocks title="Tiers" items={tiers} />}
        reviews={<SideBlocks title="Ratings" items={ratings} />}
        platforms={
          <div className={s.platforms}>
            {platforms.map((x) => (
              <div key={x.label} className={s.tag}>
                {x.label}
              </div>
            ))}
          </div>
        }
        top={
          <TopBlock
            indicators={indicators}
            title={title}
            logo={logo}
            url={url}
          />
        }
      />
    </Shell>
  );
};
