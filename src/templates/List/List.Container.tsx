import { useState } from "react";
import { List } from "./List";
import * as schema from "./schema";
import * as u from "@/helpers/utilities";
import { calcItems } from "./helpers";
import { CATEGORY_VARIANTS } from "@/entities/categories";

export const Container = (props: schema.ContainerProps) => {
  const [page, setPage] = useState(props.page);
  const [column, setColumn] = useState(props.column);
  const category = u.keys(CATEGORY_VARIANTS)[page];

  const { description, label, incumbents, resources } =
    CATEGORY_VARIANTS[category];

  const items = calcItems(
    props.software.filter((x) => x.category === category)
  ).sort((a, b) => 
    {
      if ((a.isRecommended && b.isRecommended) || (!a.isRecommended && !b.isRecommended)) 
      {
          return a.positionScore - b.positionScore;
      }
      
      if (b.isRecommended) return -1;
      return 1;
    });

  return (
    <List
      items={items}
      description={description}
      incumbents={incumbents}
      resources={resources}
      title={label}
      column={column}
      page={page}
      dispatch={({ type, payload }) => {
        if (type === "USER_CHANGES_PAGE") {
          window.history.pushState({}, "", `/category/${payload.id}`);
          setPage(payload.index);
        }

        if (type === "USER_CHANGES_COLUMN") {
          setColumn(payload.index);
        }
      }}
    />
  );
};
