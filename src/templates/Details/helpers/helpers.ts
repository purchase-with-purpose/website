import * as u from "@/helpers/utilities";
import * as schema from "../schema";
import { type Props as DataBlockProps } from "@/components/DataBlock";
import { CATEGORY_VARIANTS } from "@/entities/categories";

import {
  type Software,
  type Feature,
  FEATURE_VARIANTS,
  PLATFORM_VARIANTS,
} from "@/entities/software";

import {
  type Block,
  BLOCK_VARIANTS,
  GROUP_VARIANTS,
  getValue,
  display,
} from "@/entities/blocks";

const createToDataBlockFn =
  (software: Software) =>
  (id: Block["id"]): null | DataBlockProps => {
    const { label } = BLOCK_VARIANTS[id];

    const value = getValue({
      software,
      id,
    });

    if (!value) return null;

    const inner = {
      id,
      value,
    };

    return {
      label,
      value: display.calcValue(inner),
      variant: "sidebar",
      color: display.calcColour(inner),
      icon: u.assert(display.calcIcon(inner)),
      fill: false,

      url: display.calcUrl({
        software,
        id,
      }),
    };
  };

export const calcFeatures = (software: Software): schema.Props["features"] => {
  const inner: Block["id"][] = GROUP_VARIANTS["software.card.features"].blocks;
  const toDataBlock = createToDataBlockFn(software);

  const result = inner.map((x): schema.Props["features"][number] | null => {
    const value = getValue({
      software,
      id: x,
    });

    if (!value) return null;

    const inner = toDataBlock(x);
    if (!inner) return null;

    const featureId = x.replace("software.features.", "") as Feature["id"];
    const match = FEATURE_VARIANTS[featureId];

    return {
      ...inner,
      description: match.description,
    };
  });

  return u.filter(result);
};

export const calcDataBlock = (
  software: Software
): Pick<schema.Props, "ratings" | "company" | "tiers" | "platforms"> => {
  const toDataBlock = createToDataBlockFn(software);

  return {
    tiers: u.filter(
      GROUP_VARIANTS["software.card.pricing"].blocks.map(toDataBlock)
    ),

    ratings: u.filter(
      GROUP_VARIANTS["software.card.ratings"].blocks.map(toDataBlock)
    ),

    platforms: u
      .filter(GROUP_VARIANTS["software.card.platforms"].blocks.map(toDataBlock))
      .map((x, i) => {
        const match = u.values(PLATFORM_VARIANTS)[i];

        return {
          ...x,
          description: match.description,
        };
      }),

    company: u.filter([
      toDataBlock("software.company.name"),
      toDataBlock("software.company.headquarters"),
      toDataBlock("software.company.ownership"),
      toDataBlock("software.indicators.environmental"),
      toDataBlock("software.indicators.open-source"),
      toDataBlock("software.indicators.profit-share"),
      toDataBlock("software.indicators.self-hosted"),
    ]),
  };
};

export const calcProps = (
  software: Software
): Omit<schema.Props, "dispatch"> => {
  const features = calcFeatures(software);
  const category = CATEGORY_VARIANTS[software.category];

  const { label: title, url, description, screenshots, logo, notes } = software;
  const { company, ratings, tiers, platforms } = calcDataBlock(software);

  const breadcrumbs: schema.Props["breadcrumbs"] = [
    { label: "Home", url: "/" },
    { label: category.label, url: `/category/${category.id}` },
    { label: title, url: null },
  ];

  return {
    features,
    tiers,
    company,
    ratings,
    url,
    title,
    description,
    breadcrumbs,
    screenshots,
    logo,
    platforms,
    notes,
  };
};
