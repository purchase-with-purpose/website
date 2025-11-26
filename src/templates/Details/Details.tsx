import s from "./Details.module.css";
import { Breadcrumbs } from "./components/Breadcrumbs";
import { Layout } from "./components/Layout";
import { DataBlock } from "@/components/DataBlock";
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
    logo,
    screenshots,
    title,
    url,
    dispatch,
  } = props;

  return (
    <Shell
      header={true}
      dispatch={(x) => {
        if (x.type === "USER_CHANGES_CATEGORY") {
          dispatch({
            type: "USER_CHANGES_CATEGORY",
            payload: { id: x.payload.category, index: x.payload.index },
          });
        }
      }}
    >
      <Layout
        breadcrumbs={<Breadcrumbs breadcrumbs={breadcrumbs} />}
        description={<p className={s.description}>{description}</p>}
        company={<SideBlocks title="Overview" items={company} />}
        tiers={<SideBlocks title="Tiers" items={tiers} />}
        reviews={<SideBlocks title="Ratings" items={ratings} />}
        features={
          <div className={s.grid}>
            {features
              .sort((a, b) => a.description.length - b.description.length)
              .map((x) => {
                return (
                  <div className={s.gridItem}>
                    <DataBlock {...x} variant="sidebar" label={x.description} />
                  </div>
                );
              })}
          </div>
        }
        disclaimers={
          <div className={s.notesWrapper}>
            {notes.map((x, i) => {
              return <Notes key={i} value={x.value} variant={x.variant} />;
            })}
          </div>
        }
        screenshots={
          <div className={s.gallery}>
            {screenshots.map((x, i) => (
              <div className={s.imageWrapper}>
                <img key={i} className={s.image} src={x} />
              </div>
            ))}
          </div>
        }
        platforms={
          <div className={s.grid}>
            {platforms.map((x) => {
              return (
                <div className={s.gridItem}>
                  <DataBlock
                    variant="sidebar"
                    label={x.description}
                    value={x.label}
                    color="#004e8a"
                    fill={false}
                    icon={x.icon}
                    url={null}
                  />
                </div>
              );
            })}
          </div>
        }
        top={<TopBlock title={title} logo={logo} url={url} />}
      />
    </Shell>
  );
};
