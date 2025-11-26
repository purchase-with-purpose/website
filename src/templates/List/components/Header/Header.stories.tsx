import { Header } from "./Header";
import { useState } from "react";

export default {
  title: "Templates/List/Header",
  parameters: {
    layout: "fullscreen",
  },
};

export const Basic = () => {
  const [page, setPage] = useState(0);
  const [column, setColumn] = useState(0);

  return (
    <Header
      column={column}
      page={page}
      dispatch={({ type, payload }) => {
        if (type === "USER_CHANGES_COLUMN") {
          setColumn(payload.index);
        }

        if (type === "USER_CHANGES_PAGE") {
          setPage(payload.index);
        }
      }}
    />
  );
};
