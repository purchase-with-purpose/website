import { useState } from "react";
import * as Software from "@/entities/Software";
import * as u from "@/helpers/utilities";
import s from "./List.module.css";
import * as Display from "@/entities/Display";
import { TableCell } from "./components/TableCell";
import { Shell } from "@/components/Shell";
import { Header } from "./components/Header";
import { TinyColor } from "@ctrl/tinycolor";

export const List = (props: { items: Software.Item[] }) => {
  const { items } = props;
  const [active, setActive] = useState(0);

  return (
    <Shell
      header={<Header active={active} setActive={setActive} />}
      title="Cloud Storage"
    >
      <div className={s.list}>
        {items.map((x) => (
          <article className={s.card}>
            <div className={s.top}>
              <div>
                <div
                  className={s.icon}
                  style={{
                    backgroundColor: new TinyColor(x.swatch)
                      .setAlpha(0.3)
                      .toRgbString(),
                  }}
                >
                  <img className={s.image} src={x.logo} alt="" />
                </div>
              </div>

              <div>
                <h3 className={s.label}>{x.label}</h3>
                <p className={s.small}>{x.company.name}</p>
              </div>
            </div>

            <div className={s.stack}>
              {u
                .values(Display.groups)
                .slice(active, active + 1)
                .map(({ id }) => {
                  const inner = Display.extractGroup({ group: id, item: x });

                  return (
                    <div className={s.column}>
                      {inner.map((x) => {
                        return <TableCell id={x.id} value={x.value} />;
                      })}
                    </div>
                  );
                })}
            </div>
          </article>
        ))}
      </div>
    </Shell>
  );
};
