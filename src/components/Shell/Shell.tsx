import "./Shell.css";
import { useState } from "react";
import s from "./Shell.module.css";
import c from "classnames";
import * as u from "@/helpers/utilities";
import { type JSX } from "react";
import { CATEGORY_VARIANTS } from "@/entities/categories";
import { useScrollDirection } from "./Shell.useScrollDirection";
import { type Category } from "@/entities/categories";
import { Icon } from "@/components/Icon";

type Action = {
  type: "USER_CHANGES_CATEGORY";
  payload: { category: Category["id"]; index: number };
};

export const Shell = (props: {
  children: JSX.Element | JSX.Element[];
  header?: JSX.Element | true;
  title?: string;
  dispatch?: (action: Action) => void;
}) => {
  const { children, header, title, dispatch } = props;
  const direction = useScrollDirection();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={s.wrapper}>
        {header !== undefined && (
          <header
            className={c({ [s.header]: true, [s.up]: direction === "up" })}
          >
            <div className={s.top}>
              <div className={s.dropdownWrapper}>
                <button
                  onClick={() => {
                    setOpen(true);
                  }}
                  className={c({
                    [s.controlButton]: true,
                  })}
                >
                  <span>Categories</span>

                  <span
                    className={c({ [s.dropdownIcon]: true, [s.flipped]: open })}
                  >
                    <Icon variant="chevron-down" />
                  </span>
                </button>
              </div>

              <a href="/" className={s.title}>
                <h1 className={s.innerTitle}>Purchase with Purpose</h1>
              </a>

              <div className={s.right}>
                <a
                  className={s.outer}
                  href="https://www.reddit.com/r/PurchaseWithPurpose/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className={s.rowIcon}
                    viewBox="0 0 24 24"
                  >
                    <g clipPath="url(#a)">
                      <path fill="#fff" d="M4 5h16v14H4z" />
                      <g clipPath="url(#b)">
                        <path
                          fill="#FF5700"
                          d="M9.4545 15.7396c-.16875.0007-.30525.1372-.30525.306 0 .084.03375.1605.0885.216.714.537 1.61625.8595 2.59275.8595.0637 0 .1275-.0015.1912-.0045h-.009c.0608.003.1313.0045.2025.0045.9705 0 1.866-.3233 2.5838-.8685l-.0105.0075c.0577-.0608.093-.1425.093-.2333 0-.0757-.0248-.1455-.0668-.2017l.0008.0007c-.0555-.0555-.1328-.0892-.2175-.0892-.0848 0-.1613.0337-.2175.0892-.5993.4313-1.3485.6893-2.1578.6893-.069 0-.138-.0023-.2062-.0053l.0097.0008c-.0615.0037-.1335.006-.2055.006-.8062 0-1.5525-.2588-2.15995-.6975l.0105.0075c-.0555-.0548-.13125-.0893-.21525-.0893h-.00225l.00075.0023Zm5.1225-3.7395c-.6458.0007-1.17.5242-1.17 1.1707 0 .6465.5242 1.1708 1.1707 1.1708.6465 0 1.1708-.5243 1.1708-1.1708-.0015-.6465-.525-1.17-1.1715-1.1707Zm-5.15475 0c.64575 0 1.16995.5242 1.16995 1.17 0 .6457-.5242 1.17-1.16995 1.17s-1.17-.5243-1.17-1.17c0-.6458.5235-1.17 1.17-1.17Zm7.27345-6.8003c.639.0045 1.155.5235 1.155 1.16325 0 .64275-.5205 1.16325-1.1632 1.16325-.621 0-1.1288-.4875-1.1618-1.10025v-.003l-2.4337-.513-.75 3.5115c1.6387.03675 3.1507.55275 4.4085 1.41305l-.0278-.018c.285-.2843.6788-.4605 1.1138-.4605h.0187c.9075.0007 1.6425.7365 1.6433 1.644-.0053.66-.3848 1.23-.9368 1.5082l-.0097.0045c.0247.1433.039.309.039.4778v.0105c0 2.5252-2.9333 4.5637-6.564 4.5637-3.63075 0-6.564-2.0392-6.564-4.5645v-.0037c0-.1755.015-.3473.04275-.5153l-.00225.018c-.57825-.2625-.9735-.8355-.9735-1.5007 0-.9075.73575-1.6433 1.64325-1.6433H6.174c.4395.0045.837.1785 1.13175.4598l-.00075-.0008c1.245-.861 2.7832-1.38075 4.443-1.3935h.003l.8295-3.9195c.021-.07725.0675-.14175.1297-.18375l.0015-.00075c.0473-.02775.1043-.04425.165-.04425.0203 0 .0405.00225.06.00525h-.0022l2.7232.57825c.1853-.3915.5775-.657 1.0313-.657h.0075l-.0008.00075ZM12 .753052C5.7885.753052.752998 5.78855.752998 12.0001c0 6.2115 5.035502 11.247 11.247002 11.247s11.247-5.0355 11.247-11.247c0-3.1058-1.2585-5.91755-3.294-7.95305S15.1057.753052 12 .753052Z"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path fill="#fff" d="M0 0h24v24H0z" />
                      </clipPath>
                      <clipPath id="b">
                        <path fill="#fff" d="M0 0h24v24H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a
                  className={s.outer}
                  href="https://bsky.app/profile/purchase-w-purpose.bsky.social"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className={s.rowIcon}
                    viewBox="0 0 24 24"
                  >
                    <g clipPath="url(#a)">
                      <g clipPath="url(#b)">
                        <path fill="#fff" d="M4 5h16v15H4z" />
                        <path
                          fill="#0085ff"
                          d="M12 0c6.6274 0 12 5.3726 12 12s-5.3726 12-12 12S0 18.6274 0 12 5.3726 0 12 0Zm7.6132 7.53047c0-2.32965-2.0408-1.59754-3.3004-.65134C14.567 8.19045 12.6895 10.8494 12 12.2762c-.6894-1.4269-2.56705-4.08575-4.31272-5.39707h-.00006c-1.25954-.9462-3.30046-1.67831-3.30046.65134 0 .46525.2666 3.90833.42297 4.46743.54341 1.9434 2.52394 2.439 4.2857 2.1391-3.07947.5243-3.86279 2.2614-2.171 3.9984 3.21317 3.2991 4.61817-.8277 4.97827-1.8851.066-.1939.0969-.2845.0973-.2074.0004-.0771.0313.0135.0973.2074.3602 1.0574 1.7652 5.1841 4.9783 1.8851 1.6918-1.737.9084-3.474-2.171-3.9984 1.7617.2999 3.7422-.1957 4.2857-2.1391.1563-.559.4229-4.00215.4229-4.46743Z"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path fill="#fff" d="M0 0h24v24H0z" />
                      </clipPath>
                      <clipPath id="b">
                        <path fill="#fff" d="M0 0h24v24H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>

            {header !== true && (
              <div className={s.controlsWrapper}>{header}</div>
            )}
          </header>
        )}
        <main className={s.main}>{children}</main>
      </div>

      {open && (
        <div
          className={s.menuBackground}
          onClick={() => {
            setOpen(false);
          }}
        />
      )}

      <div className={c({ [s.menu]: true, [s.active]: open })}>
        {u.values(CATEGORY_VARIANTS).map((x, i) => {
          return (
            <button
              key={x.id}
              className={s.line}
              onClick={() => {
                setOpen(false);
                if (!dispatch) return;

                dispatch({
                  type: "USER_CHANGES_CATEGORY",
                  payload: { category: x.id, index: i },
                });
              }}
            >
              <span className={s.lineInner}>{x.label}</span>
            </button>
          );
        })}
      </div>
    </>
  );
};
