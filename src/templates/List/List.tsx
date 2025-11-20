import { useState, useEffect, useMemo } from "react";
import { type Software } from "@/entities/software";
import * as u from "@/helpers/utilities";
import s from "./List.module.css";
import { calcCardPreview } from "@/entities/blocks";
import { Shell } from "@/components/Shell";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { useWindowVirtualizer } from "@tanstack/react-virtual";
import { type Category } from "@/entities/categories";
import { Front } from "./components/Front";

export const List = (props: { category: Category; items: Software[] }) => {
  const { category, items } = props;

  const [column, setColumn] = useState(0);

  const array = useMemo(
    () => items.map((x) => calcCardPreview({ software: x })),
    [items]
  );

  const virtualizer = useWindowVirtualizer({
    count: array.length,
    estimateSize: (i) => (array[i].max * 2 + 6) * 16,
    overscan: 2,
  });

  return (
    <Shell
      header={
        <Header
          column={column}
          dispatch={(action) => {
            const { type, payload } = action;

            if (type === "USER_CHANGES_COLUMN") {
              setColumn(payload.index);
            }
          }}
        />
      }
      title={category.label}
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
                  const x = array[index];

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
                        active={column}
                        item={x.software}
                        columns={u.values(x.blocks)}
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
