import "./Shell.css";
import { useState } from "react";
import s from "./Shell.module.css";
import c from "classnames";
import { type JSX } from "react";
import { useScrollDirection } from "./Shell.useScrollDirection";
import { Menu, Icon } from "./Menu";

export const Shell = (props: {
  children: JSX.Element | JSX.Element[];
  header?: JSX.Element | true;
  title?: string;
}) => {
  const { children, header, title } = props;
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
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 82 40"
              className={s.logo}
            >
              <path
                fill="none"
                stroke="white"
                d="M0 20C0 8.9543 8.9543 0 20 0h41.2903c11.0457 0 20 8.9543 20 20s-8.9543 20-20 20H20C8.95431 40 0 31.0457 0 20Z"
              />
              <path
                fill="white"
                d="M33.9614 24.517v-9.3842h3.8765c.7026 0 1.3089.1375 1.8191.4124.5132.2719.9088.6522 1.1868 1.1409.2779.4858.4169 1.0509.4169 1.6954 0 .6476-.142 1.2143-.4261 1.7-.281.4826-.6827.8568-1.2051 1.1226-.5224.2658-1.1425.3987-1.8603.3987h-2.3919v-1.7871h1.9703c.3421 0 .6278-.0595.8569-.1787.2321-.1191.4078-.2856.5269-.4994.1191-.2169.1787-.4689.1787-.7561 0-.2902-.0596-.5407-.1787-.7514-.1191-.2139-.2948-.3788-.5269-.4949-.2322-.1161-.5178-.1741-.8569-.1741h-1.118v7.5559h-2.2682ZM22.7304 24.517l-2.7309-9.3842h2.5064l1.4159 6.1492h.0779l1.6175-6.1492h2.0436l1.6175 6.163h.0779l1.4204-6.163h2.5019l-2.7264 9.3842h-2.1857l-1.6908-5.691h-.0733l-1.6908 5.691h-2.1811ZM12.3232 24.517v-9.3842h3.8765c.7026 0 1.309.1375 1.8191.4124.5132.2719.9088.6522 1.1868 1.1409.278.4858.4169 1.0509.4169 1.6954 0 .6476-.142 1.2143-.4261 1.7-.281.4826-.6827.8568-1.2051 1.1226-.5223.2658-1.1425.3987-1.8603.3987h-2.3919v-1.7871h1.9703c.3422 0 .6278-.0595.8569-.1787.2321-.1191.4078-.2856.5269-.4994.1192-.2169.1787-.4689.1787-.7561 0-.2902-.0595-.5407-.1787-.7514-.1191-.2139-.2948-.3788-.5269-.4949-.2322-.1161-.5178-.1741-.8569-.1741h-1.118v7.5559h-2.2682ZM76.1288 19.3557c0 7.8388-6.3547 14.1935-14.1936 14.1935-7.8388 0-14.1935-6.3547-14.1935-14.1935 0-7.8389 6.3547-14.19359 14.1935-14.19359 7.8389 0 14.1936 6.35469 14.1936 14.19359Z"
              />
            </svg> */}

              <Icon open={open} toggleOpen={() => setOpen((x) => !x)} />
            </div>

            {header !== true && (
              <div className={s.controlsWrapper}>{header}</div>
            )}
          </header>
        )}
        <main className={s.main}>{children}</main>
      </div>

      <Menu toggleOpen={() => setOpen((x) => !x)} open={open} />
    </>
  );
};
