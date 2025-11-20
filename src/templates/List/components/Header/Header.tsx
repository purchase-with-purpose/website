import s from "./Header.module.css";
import c from "classnames";
import { useEffect } from "react";
import { type Group, GROUP_VARIANTS } from "@/entities/blocks";
import { type Software } from "@/entities/software";
import * as u from "@/helpers/utilities";
import { useRef } from "react";

type Action =
  | {
      type: "USER_CHANGES_PAGE";
      payload: {
        index: number;
        id: Software["id"];
      };
    }
  | {
      type: "USER_CHANGES_COLUMN";
      payload: {
        index: number;
        id: Group["id"];
      };
    };

export const Header = (props: {
  column: number;
  dispatch: (action: Action) => void;
}) => {
  const { column, dispatch } = props;

  const columnRef = useRef<HTMLButtonElement[]>([]);
  const prevColumn = useRef(column);

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
      {/* <div className={s.wrapper}>
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
      </div> */}

      <div className={s.wrapper}>
        <div className={s.controlsWrapper}>
          <div className={s.controlsInner}>
            {u
              .keys(GROUP_VARIANTS)
              .filter((x) => x !== "other")
              .map((key, i) => (
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
                      columnRef.current[i] = x!;
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

            <div>
              <div className={s.spacer} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
