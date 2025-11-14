import { useState, useEffect, useMemo } from "react";
import * as Software from "@/entities/Software";
import * as u from "@/helpers/utilities";
import s from "./List.module.css";
import * as Display from "@/entities/Display";
import { Shell } from "@/components/Shell";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { useWindowVirtualizer } from "@tanstack/react-virtual";
import { calcOffset, calcSplit } from "./List.helpers";
import { useWindowSwipe } from "./List.useSwipe";
import { Front } from "./components/Front";

export const List = (props: { items: Software.Item[] }) => {
  const { items } = props;

  const [column, setColumn] = useState(0);
  const [page, setPage] = useState(0);

  // const total = u.values(Display.groups).length;

  const columns = useMemo(
    () => items.map((x) => Display.calcColumns({ item: x })),
    [items]
  );

  const virtualizer = useWindowVirtualizer({
    count: items.length,
    estimateSize: (i) => (columns[i].max * 2 + 6) * 16,
    overscan: 2,
  });

  // useWindowSwipe({
  //   onSwipeLeft: () => setActive((prev) => Math.min(prev + 1, total - 1)),
  //   onSwipeRight: () => setActive((prev) => Math.max(prev - 1, 0)),
  // });

  // useEffect(() => {
  //   const handleKeyDown = (event: KeyboardEvent) => {
  //     if (event.key === "ArrowRight") {
  //       setActive((prev) => Math.min(prev + 1, total - 1));
  //     } else if (event.key === "ArrowLeft") {
  //       setActive((prev) => Math.max(prev - 1, 0));
  //     }
  //   };

  //   window.addEventListener("keydown", handleKeyDown);
  //   return () => window.removeEventListener("keydown", handleKeyDown);
  // }, [total]);

  // useEffect(() => {
  //   const onResize = () => setSplit(calcSplit());
  //   window.addEventListener("resize", onResize);
  //   return () => window.removeEventListener("resize", onResize);
  // }, []);

  // const offset = calcOffset({
  //   active,
  //   split,
  //   total,
  // });

  return (
    <Shell
      header={
        <Header
          page={page}
          column={column}
          dispatch={(action) => {
            const { type, payload } = action;

            if (type === "USER_CHANGES_PAGE") {
              setPage(payload.index);
            }

            if (type === "USER_CHANGES_COLUMN") {
              setColumn(payload.index);
            }
          }}
        />
      }
      title=""
    >
      <>
        <Front />

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
                  const x = items[index];

                  return (
                    <div
                      key={key}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: `${size}px`,
                        transform: `translateY(${start}px)`,
                      }}
                    >
                      <Card
                        offset={0}
                        active={0}
                        item={x}
                        columns={columns[index].columns}
                      />
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
