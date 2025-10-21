import * as schema from "./TableCell.schema";
import { type Item } from "@/entities/Software";
import { Icon } from "@/components/Icon";
import s from "./TableCell.module.css";
import * as Display from "@/entities/Display";
import * as Software from "@/entities/Software";

export const TableCellBase = (props: schema.BaseProps) => {
  const { label, value, icon } = props;

  return (
    <div className={s.wrapper}>
      <div className={s.icon}>
        <Icon variant={icon} size="s" />
      </div>

      <p className={s.value}>{value || label}</p>
      {value && <p className={s.label}>{label}</p>}
    </div>
  );
};

export const TableCell = (props: schema.Props) => {
  const { value, id } = props;
  const { icon, label } = Display.display[id];

  const isLocation =
    id === "software.company.headquarters" ||
    id === "software.company.ownership";

  const flag = isLocation ? (`flag-${value}` as any) : null;

  const valueProp =
    value && isLocation ? (Software.origins as any)[value].label : value;

  return (
    <>
      <TableCellBase label={label} value={valueProp} icon={flag || icon} />
    </>
  );
};
