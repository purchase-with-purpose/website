import { type Props as DataBlock } from "@/components/DataBlock";
import type { Category } from "@/entities/categories/";
import type { Grouped } from "@/entities/blocks";
import type { Software } from "@/entities/software";

type Action =
  | {
      type: "USER_CHANGES_COLUMN";
      payload: {
        index: number;
        id: Grouped["id"];
      };
    }
  | {
      type: "USER_CHANGES_PAGE";
      payload: {
        index: number;
        id: Category["id"];
      };
    };

export type Item = {
  height: number;
  id: string;
  label: string;
  logo: string;
  swatch: string;
  isRecommended: boolean;
  positionScore: number;
  cells: Omit<DataBlock, "variant">[][];
};

export type Incumbent = {
  label: string;
  logo: string;
  url: string;
};

export type Resource = {
  label: string;
  url: string;
};

export type Props = {
  title: string;
  description: string;
  incumbents: Incumbent[];
  items: Item[];
  resources: Resource[];
  dispatch: (action: Action) => void;
  column: number;
  page: number;
};

export type ContainerProps = Pick<
  Props,
  "title" | "description" | "column" | "page"
> & {
  software: Software[];
};
