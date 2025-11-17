import { DataBlock } from "@/components/DataBlock";
// import { Platform } from "../../../../components/Platform";
import { type Software } from "@/entities/software";
import { type Group, GROUP_VARIANTS } from "@/entities/blocks";
import s from "./Column.module.css";
// import c from "classnames";
// import { Indicator } from "@/components/Indicator";

export const Column = (props: { item: Software; column: Group["id"] }) => {
  const { item, column } = props;

  return (
    <div className={s.wrapper}>
      {Display.extractGroup({ group: column, item }).map((block) => (
        <DataBlock
          key={block.id}
          id={block.id}
          value={block.value}
          variant="compact"
        />
      ))}
    </div>
  );

  // if (column === "pricing") {
  //   return (
  //     <>
  //       {item.tiers.free && (
  //         <TableCell id="software.tiers.free" value={item.tiers.free.value} />
  //       )}

  //       {item.tiers.basic && (
  //         <TableCell id="software.tiers.basic" value={item.tiers.basic.value} />
  //       )}

  //       {item.tiers.premium && (
  //         <TableCell
  //           id="software.tiers.premium"
  //           value={item.tiers.premium.value}
  //         />
  //       )}
  //     </>
  //   );
  // }

  // if (column === "platforms") {
  //   return (
  // <div
  //   className={c({
  //     [s.wrapper]: true,
  //     [s.padded]: true,
  //   })}
  // >
  //   {item.platforms.map((platform) => (
  //     <Platform key={platform} id={platform} />
  //   ))}
  // </div>

  //     <div className={s.wrapper}>
  //       {item.platforms.map((x) => (
  //         <TableCell key={x} id={`software.platforms.${x}`} value={null} />
  //       ))}
  //     </div>
  //   );
  // }

  // if (column === "features") {
  //   return (
  //     <div className={s.wrapper}>
  //       {item.features.map((x) => (
  //         <TableCell key={x.id} id={`software.features.${x.id}`} value={null} />
  //       ))}
  //     </div>
  //   );
  // }

  // if (column === "company") {
  //   return (
  //     <div className={s.wrapper}>
  //       <TableCell
  //         id="software.company.headquarters"
  //         value={item.company.headquarters}
  //       />

  //       {item.company.ownership && (
  //         <TableCell
  //           id="software.company.ownership"
  //           value={item.company.ownership}
  //         />
  //       )}

  //       {/* <div className={s.padded}>
  //         {item.indicators.map((indicator) => (
  //           <Indicator key={indicator} id={indicator} />
  //         ))}
  //       </div> */}
  //     </div>
  //   );
  // }

  // return (
  //   <>
  //     <TableCellBase icon="bookmark" label="asd" value="asd" />
  //     <TableCellBase icon="bookmark" label="asd" value="asd" />
  //     <TableCellBase icon="bookmark" label="asd" value="asd" />
  //   </>
  // );
};
