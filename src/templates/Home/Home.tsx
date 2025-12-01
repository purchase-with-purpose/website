import s from "./Home.module.css";
import { Shell } from "@/components/Shell";
import { Card } from "./components/Card";
import * as schema from "./schema";

export const Home = (props: schema.Props) => {
  const { sections, dispatch } = props;

  return (
    <Shell
      header={true}
      dispatch={(x) => {
        if (x.type === "USER_CHANGES_CATEGORY") {
          console.log({
            type: "USER_CHANGES_PAGE",
            payload: { id: x.payload.category, index: x.payload.index },
          });
        }
      }}
    >
      <div className={s.front}>
        <h1 className={s.name}>About Project</h1>
        <p className={s.bold}>
          People increasingly want their voices heard and are taking action by
          choosing the companies they support.
        </p>

        <p className={s.paragraph}>
          Each person has their own reason, but the list of options are growing. Whether it is
          privacy concerns, environmental, boycotting the tech oligarch, non-existent customer service,
          the prolification of AI or any other cause. 
          Underpinning all of it is the idea that too much power is given to the few, and it is time to empower the many.
        </p>

        <p className={s.paragraph}>
          Purchase with Purpose is a movement that looks to grow and support people in making this switch.                     
          This is just the start with more tools and industries to come.
        </p>
      </div>

      <div className={s.wrapper}>
        {sections.map((x) => {
          return (
            <div className={s.section} key={x.id}>
              <h2 className={s.title}>{x.title}</h2>

              <div className={s.left}>
                <a href={`/category/${x.id}`} className={s.button}>
                  View All
                </a>

                <div className={s.incumbents}>
                  {x.incumbents.map((y) => (
                    <div className={s.icon} key={y.label}>
                      <img className={s.image} src={y.logo} alt={y.label} />
                    </div>
                  ))}
                </div>
              </div>

              <div className={s.row}>
                {x.items.map((y) => (
                  <div key={y.id} className={s.rowItem}>
                    <Card {...y} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Shell>
  );
};
