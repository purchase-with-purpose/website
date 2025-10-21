import { Shell } from "@/components/Shell";
import { TableCell, TableCellBase } from "./TableCell";
import { faker as f } from "@faker-js/faker";
import { type Props, type BaseProps } from "./TableCell.schema";
import * as Display from "@/entities/Display";
import * as u from "@/helpers/utilities";

export default {
  title: "Templates/List/TableCell",
  parameters: {
    layout: "fullscreen",
  },
};

const BASE_PROPS: BaseProps = {
  label: f.lorem.words(2),
  value: f.lorem.words(3),
  icon: f.helpers.arrayElement(Display.GENERAL_ICON_VARIANTS),
};

const PROPS: Props = {
  id: f.helpers.arrayElement(u.keys(Display.display)),
  value: f.lorem.words(3),
};

export const Base = () => (
  <Shell>
    <TableCellBase {...BASE_PROPS} />
  </Shell>
);

export const Basic = () => (
  <Shell>
    <TableCell {...PROPS} />
  </Shell>
);
