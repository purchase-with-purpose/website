import s from "./Shell.Navigation.module.css";
import c from "classnames";
import { useEffect } from "react";
import * as Display from "@/entities/Display";
import * as Software from "@/entities/Software";
import * as u from "@/helpers/utilities";
import { useRef } from "react";

type Action =
  | {
      type: "USER_CHANGES_PAGE";
      payload: {
        index: number;
        id: Software.Category["id"];
      };
    }
  | {
      type: "USER_CHANGES_COLUMN";
      payload: {
        index: number;
        id: Display.Group["id"];
      };
    };

export const Header = (props: {
  column: number;
  page: number;
  dispatch: (action: Action) => void;
}) => {
  const { column, page, dispatch } = props;

  const pageRef = useRef<HTMLButtonElement[]>([]);
  const columnRef = useRef<HTMLButtonElement[]>([]);

  const prevPage = useRef(page);
  const prevColumn = useRef(column);

  useEffect(() => {
    if (prevPage.current === page) return;
    prevPage.current = page;
    const currentY = window.scrollY;

    pageRef.current[page]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });

    window.scrollTo(0, currentY);
  }, [page]);

  useEffect(() => {
    if (prevColumn.current === column) return;
    prevColumn.current = column;
    const currentY = window.scrollY;

    columnRef.current[column]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });

    window.scrollTo(0, currentY);
  }, [column]);

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.controlsWrapper}>
          <div className={s.controlsInner}>
            {u.keys(Software.categories).map((key, i) => (
              <div
                key={key}
                className={s.buttonWrap}
                onClick={() => {
                  dispatch({
                    type: "USER_CHANGES_PAGE",
                    payload: { index: i, id: Software.CATEGORY_ID_ARRAY[i] },
                  });
                }}
              >
                <button
                  ref={(x) => {
                    pageRef.current[i] = x!;
                  }}
                  key={key}
                  className={c({
                    [s.controlButton]: true,
                    [s.active]: page === i,
                  })}
                >
                  {Software.categories[key].label}
                </button>
              </div>
            ))}

            <div>
              <div className={s.spacer} />
            </div>
          </div>
        </div>
      </div>

      <div className={s.wrapper}>
        <div className={s.controlsWrapper}>
          <div className={s.controlsInner}>
            {u.keys(Display.groups).map((key, i) => (
              <div
                key={key}
                className={s.buttonWrap}
                onClick={() => {
                  dispatch({
                    type: "USER_CHANGES_COLUMN",
                    payload: { index: i, id: Display.GROUP_ID_ARRAY[i] },
                  });
                }}
              >
                <button
                  ref={(x) => {
                    columnRef.current[i] = x!;
                  }}
                  key={key}
                  className={c({
                    [s.controlButton]: true,
                    [s.active]: column === i,
                  })}
                >
                  {Display.groups[key].label}
                </button>
              </div>
            ))}

            <div>
              <div className={s.spacer} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
