import s from "./List.module.css";
import { Shell } from "@/components/Shell";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import * as schema from "./schema";

import { useWindowVirtualizer } from "@tanstack/react-virtual";
import { Front } from "./components/Front";

export const List = (props: schema.Props) => {
  const { items, dispatch, column, page } = props;

  const virtualizer = useWindowVirtualizer({
    count: items.length,
    estimateSize: (i) => items[i].height,
    overscan: 2,
  });

  return (
    <Shell
      header={<Header page={page} column={column} dispatch={dispatch} />}
      title="Purchase with Purpose"
      dispatch={(x) => {
        if (x.type === "USER_CHANGES_CATEGORY") {
          dispatch({
            type: "USER_CHANGES_PAGE",
            payload: { id: x.payload.category, index: x.payload.index },
          });
        }
      }}
    >
      <>
        <Front {...props} />

        <div className={s.list}>
          <div>
            <div
              style={{
                height: `${virtualizer.getTotalSize()}px`,
                width: "100%",
                position: "relative",
              }}
            >
              {virtualizer
                .getVirtualItems()
                .map(({ index, key, size, start }) => {
                  return (
                    <div
                      key={items[index].id}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: `${size}px`,
                        transform: `translateY(${start}px)`,
                      }}
                    >
                      <Card active={column} {...items[index]} />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </>
    </Shell>
  );
};
