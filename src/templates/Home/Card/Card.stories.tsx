import { Card } from "./Card";
import { useState } from "react";
import * as __mocking__ from "@/entities/software/__mocking__";
import { calcCardPreview } from "@/entities/blocks";
import * as u from "@/helpers/utilities";

export default {
  title: "Templates/Home/Card",
};

const item = __mocking__.createItem();

const inner = calcCardPreview({
  software: {
    ...item,
    indicators: ["open-source", "self-hosted"],
  },
});

export const Basic = () => (
  <Card item={item} columns={inner.blocks.recommended} />
);
