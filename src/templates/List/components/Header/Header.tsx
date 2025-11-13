import s from "./Header.module.css";
import c from "classnames";
import { useState } from "react";
import * as Display from "@/entities/Display";
import * as u from "@/helpers/utilities";
import { useRef } from "react";

export const Header = (props: {
  active: number;
  setActive: (value: number) => void;
}) => {
  const { active, setActive } = props;

  const ref = useRef<HTMLButtonElement[]>([]);
  const [navigated, setNavigated] = useState(false);

  return (
    <>
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
            {u.keys(Display.groups).map((key, i) => (
              <div key={key} className={s.buttonWrap}>
                <button
                  ref={(x) => {
                    ref.current[i] = x!;
                  }}
                  key={key}
                  className={c({
                    [s.controlButton]: true,
                    [s.active]: active === i,
                  })}
                  onClick={(event) => {
                    setActive(i);
                    const current = window.scrollY;

                    (event.target as any).scrollIntoView({
                      behavior: "smooth",
                      inline: "center",
                    });

                    window.scrollTo(0, current);
                  }}
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
            {u.keys(Display.groups).map((key, i) => (
              <div key={key} className={s.buttonWrap}>
                <button
                  ref={(x) => {
                    ref.current[i] = x!;
                  }}
                  key={key}
                  className={c({
                    [s.controlButton]: true,
                    [s.active]: active === i,
                  })}
                  onClick={(event) => {
                    setActive(i);
                    const current = window.scrollY;

                    (event.target as any).scrollIntoView({
                      behavior: "smooth",
                      inline: "center",
                    });

                    window.scrollTo(0, current);
                  }}
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
