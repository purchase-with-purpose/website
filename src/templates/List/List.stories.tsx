import * as u from "@/helpers/utilities";
import { useState } from "react";
import { List } from "./List";
import { calcItems } from "./helpers";
import { CATEGORY_VARIANTS } from "@/entities/categories";
import * as __mocking__ from "@/entities/software/__mocking__";

export default {
  title: "Templates/List",
  parameters: {
    layout: "fullscreen",
  },
};

const mocked = Array.from({ length: 100 }).map(() => __mocking__.createItem());

export const Basic = () => {
  const [page, setPage] = useState(0);
  const [column, setColumn] = useState(0);

  const category = u.keys(CATEGORY_VARIANTS)[page];

  const { description, label, incumbents, resources } =
    CATEGORY_VARIANTS[category];

  const filtered = mocked.filter((x) => x.category === category);
  const items = calcItems(filtered);

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
          setPage(payload.index);
        }

        if (type === "USER_CHANGES_COLUMN") {
          setColumn(payload.index);
        }
      }}
    />
  );
};
