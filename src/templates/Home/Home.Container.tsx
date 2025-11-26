import { useState } from "react";
import { Home } from "./Home";
import * as schema from "./schema";
import * as u from "@/helpers/utilities";
import { calcItems } from "./helpers";
import { CATEGORY_VARIANTS } from "@/entities/categories";
import { navigate } from "astro:transitions/client";

export const Container = (props: schema.ContainerProps) => {
  const { software } = props;

  const sections: schema.Props["sections"] = u
    .values(CATEGORY_VARIANTS)
    .map((x): schema.Props["sections"][number] => {
      const inner = software.filter((y) => y.category === x.id);
      const result = calcItems(inner)
        .sort((a, b) => b.recommended.length - a.recommended.length)
        .slice(0, 4);

      return {
        id: x.id,
        title: x.label,
        incumbents: CATEGORY_VARIANTS[x.id].incumbents,
        items: result,
      };
    });

  return (
    <Home
      sections={sections}
      dispatch={({ type, payload }) => {
        if (type === "USER_CHANGES_CATEGORY") {
          navigate(`/category/${payload.id}`);
        }
      }}
    />
  );
};
