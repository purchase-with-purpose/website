import s from "./Header.module.css";
import c from "classnames";
import * as Display from "@/entities/Display";
import * as u from "@/helpers/utilities";
import { useRef } from "react";

export const Header = (props: {
  active: number;
  setActive: (value: number) => void;
}) => {
  const { active, setActive } = props;
  const entries = u.entries(Display.GROUP_LABELS);
  const ref = useRef<HTMLButtonElement[]>([]);

  const forward = () => {
    if (active === entries.length - 1) return;
    setActive(active + 1);
    ref.current[active + 1]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const backward = () => {
    if (active === 0) return;
    setActive(active - 1);
    ref.current[active - 1]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <div className={s.wrapper}>
      {/* <div className={s.left}>
        <button className={s.move} onClick={backward}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className={s.icon}
          >
            <path d="M559-238.35 317.35-480 559-721.65 618.65-661l-181 181 181 181L559-238.35Z" />
          </svg>
        </button>
      </div> */}

      <div className={s.controlsWrapper}>
        <div className={s.controlsInner}>
          {entries.map(([key, label], i) => (
            <div key={key}>
              <button
                ref={(x) => {
                  ref.current[i] = x!;
                }}
                key={key}
                className={c({
                  [s.controlButton]: true,
                  [s.active]: active === i,
                })}
                onClick={() => {
                  setActive(i);

                  ref.current[active - 1]?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "center",
                  });
                }}
              >
                {label}
              </button>
            </div>
          ))}

          <div>
            <div className={s.spacer} />
          </div>
        </div>
      </div>

      {/* <div className={s.right}>
        <button className={s.move} onClick={forward}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className={s.icon}
          >
            <path d="m516.35-480-186-186L385-721.65 626.65-480 385-238.35 330.35-294l186-186Z" />
          </svg>
        </button>
      </div> */}
    </div>
  );
};
