import { Details } from "./Details";
import * as schema from "./schema";
import { calcProps } from "./helpers";
import { navigate } from "astro:transitions/client";

export const Container = (props: schema.ContainerProps) => {
  const { software } = props;
  const inner = calcProps(software);

  return (
    <Details
      {...inner}
      dispatch={({ type, payload }) => {
        if (type === "USER_CHANGES_CATEGORY") {
          navigate(`/category/${payload.id}`);
        }
      }}
    />
  );
};
