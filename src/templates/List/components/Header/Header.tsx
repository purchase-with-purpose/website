import s from "./Header.module.css";
import c from "classnames";
import { useEffect } from "react";
import { type Grouped, GROUP_VARIANTS } from "@/entities/blocks";
import { CATEGORY_VARIANTS, type Category } from "@/entities/categories";
import * as u from "@/helpers/utilities";
import { useRef } from "react";
import * as schema from "../../schema";

export const Header = (
  props: Pick<schema.Props, "column" | "page" | "dispatch">
) => {
  const { column, page, dispatch } = props;

  const pageContainer = useRef<HTMLDivElement>(null);
  const columnContainer = useRef<HTMLDivElement>(null);

  const pageWidths = useRef<number[]>([]);
  const columnWidths = useRef<number[]>([]);

  const prevPage = useRef(page);
  const prevColumn = useRef(column);

  useEffect(() => {
    if (prevPage.current === page) return;
    prevPage.current = page;

    let offset = 0;

    pageWidths.current.forEach((width, index) => {
      if (index < page) {
        offset += width + 4;
      }
    });

    pageContainer.current?.scrollTo({
      behavior: "smooth",
      left:
        offset - window.innerWidth / 2 + (pageWidths.current[page] || 0) / 2,
    });
  }, [page]);

  useEffect(() => {
    if (prevColumn.current === column) return;
    prevColumn.current = column;

    let offset = 0;

    columnWidths.current.forEach((width, index) => {
      if (index < column) {
        offset += width + 4;
      }
    });

    columnContainer.current?.scrollTo({
      behavior: "smooth",
      left:
        offset - window.innerWidth / 2 + (pageWidths.current[page] || 0) / 2,
    });
  }, [column]);

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.controlsWrapper} ref={columnContainer}>
          <div className={s.controlsInner}>
            {u.keys(GROUP_VARIANTS).map((key, i) => (
              <div
                key={key}
                className={s.buttonWrap}
                onClick={() => {
                  dispatch({
                    type: "USER_CHANGES_COLUMN",
                    payload: { index: i, id: key },
                  });
                }}
              >
                <button
                  ref={(x) => {
                    columnWidths.current[i] = x?.clientWidth || 0;
                  }}
                  key={key}
                  className={c({
                    [s.controlButton]: true,
                    [s.active]: column === i,
                  })}
                >
                  {GROUP_VARIANTS[key].label}
                </button>
              </div>
            ))}
            <div>.</div>
          </div>
        </div>
      </div>
    </>
  );
};
