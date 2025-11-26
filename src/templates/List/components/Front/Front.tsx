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
                <div className={s.icon} key={x.label}>
                  <img className={s.image} src={x.logo} alt={x.label} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
