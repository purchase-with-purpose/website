import s from "./Front.module.css";
import * as schema from "../../schema";

export const Front = (
  props: Pick<
    schema.Props,
    "description" | "incumbents" | "resources" | "title"
  >
) => {
  const { description, incumbents, resources, title } = props;

  return (
    <div className={s.wrapper}>
      <div>
        <h1 className={s.title}>{title}</h1>
        <p className={s.description}>{description}</p>

        <div className={s.content}>
          <div>
            <h2 className={s.subtitle}>Incumbents</h2>

            <div className={s.incumbents}>
              {incumbents.map((x) => (
                <div className={s.icon}>
                  <img className={s.image} src={x.logo} alt={x.label} />
                </div>
              ))}
            </div>
          </div>

          {/* <div style={{ marginBottom: "2rem" }}>
            <h2 className={s.subtitle}>Helpful Resources</h2>
            <div className={s.resources}>
              {resources.map((x) => (
                <div>
                  <a key={x.label} href={x.url} className={s.link}>
                    {x.label}
                  </a>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
