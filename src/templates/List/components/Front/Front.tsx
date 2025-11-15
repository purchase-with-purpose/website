import { useState } from "react";
import s from "./Front.module.css";
import { TinyColor } from "@ctrl/tinycolor";

export const Front = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={s.wrapper}>
      <div>
        <p className={s.description}>
          These guides aim to help you move away from the big tech monopolies.
          This can be due to privacy concerns, environmental reasons, treatment
          of their customers, or their influence on politics.
        </p>

        <div className={s.content}>
          <div>
            <h2 className={s.subtitle}>Incumbents</h2>

            <div className={s.incumbents}>
              {[1, 2, 3].map((_, i) => (
                <div
                  className={s.icon}
                  style={{
                    backgroundColor: new TinyColor("blue")
                      .setAlpha(0.3)
                      .toRgbString(),
                  }}
                >
                  <img
                    className={s.image}
                    src="/images/logos/chrome.png"
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h2 className={s.subtitle}>Resources</h2>

            <a href="#" className={s.link}>
              Email Clients
            </a>

            <a href="#" className={s.link}>
              Useful Links
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
