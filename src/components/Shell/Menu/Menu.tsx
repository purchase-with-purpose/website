import s from "./Menu.module.css";
import c from "classnames";
import * as u from "../../../helpers/utilities";
import { CATEGORY_VARIANTS } from "@/entities/categories";

export const Menu = (props: { open: boolean; toggleOpen: () => void }) => {
  const { open } = props;

  return (
    <div className={c({ [s.float]: true, [s.active]: open })}>
      <div className={s.row}>
        <span>Home</span>
      </div>
    </div>
  );

  // return (
  //   <div className={c({ [s.float]: true, [s.active]: open })}>
  //     <div className={s.content}>
  //       <div className={s.list}>
  //         <div className={s.spacer} />

  //         <div className={s.row}>
  //           <span>Home</span>
  //         </div>

  //         <div className={s.spacer} />

  //         {u.values(CATEGORY_VARIANTS).map(({ id, label }) => {
  //           if (id === "none") return null;

  //           return (
  //             <div key={id} className={s.row}>
  //               <span>{label}</span>
  //             </div>
  //           );
  //         })}

  //         <div className={s.spacer} />

  //         <button className={s.menuButton}>Share Journey</button>
  //         {/* <button className={s.menuButton}>Submit Suggestion</button> */}

  //       </div>
  //     </div>
  //   </div>
  // );
};
