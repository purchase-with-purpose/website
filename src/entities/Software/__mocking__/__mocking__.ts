import { faker as f } from "@faker-js/faker";
import * as u from "@/helpers/utilities";
import { CATEGORY_VARIANTS } from "@/entities/categories";

import {
  FEATURE_VARIANTS,
  PLATFORM_VARIANTS,
  type Software,
  INDICATOR_VARIANTS,
  ORIGIN_VARIANTS,
} from "../schema";

export const createItem = (): Software => {
  const category = f.helpers.arrayElement(u.keys(CATEGORY_VARIANTS));

  const { logo, swatch } = f.helpers.arrayElement([
    { logo: "/images/logos/brave.svg", swatch: "#e13927" },
    { logo: "/images/logos/chrome.png", swatch: "#fbc10a" },
    { logo: "/images/logos/firefox.png", swatch: "#6f61ec" },
    { logo: "/images/logos/safari.png", swatch: "#1b8bf7" },
  ]);

  return {
    id: u.createBrand("SOFTWARE_ID")!,
    features: f.helpers.arrayElements(u.keys(FEATURE_VARIANTS), {
      min: 3,
      max: 5,
    }),

    company: {
      headquarters: f.helpers.arrayElement(u.keys(ORIGIN_VARIANTS)),
      name: f.company.name(),
      url: f.internet.url(),

      ownership: f.datatype.boolean()
        ? f.helpers.arrayElement(u.keys(ORIGIN_VARIANTS))
        : null,
    },

    evaluations: {
      trustpilot: f.number.float({ min: 1, max: 5, fractionDigits: 1 }),
      ios: f.number.float({ min: 1, max: 5, fractionDigits: 1 }),
      android: f.number.float({ min: 1, max: 5, fractionDigits: 1 }),
      "privacy-guide": f.number.int({ min: 0, max: 1 }),
      "privacy-tools": f.number.int({ min: 0, max: 1 }),
    },
    tiers: {
      free: "Free",
      basic: `$ ${f.number.int({ min: 1, max: 22 })} / mo`,
      premium: `$ ${f.number.int({ min: 23, max: 50 })} / mo`,
    },

    category,
    description: f.lorem.paragraphs(3),
    indicators: f.helpers.arrayElements(u.keys(INDICATOR_VARIANTS), {
      min: 0,
      max: 2,
    }),
    incumbent: f.datatype.boolean(),

    logo,
    swatch,

    url: f.internet.url(),
    platforms: f.helpers.arrayElements(u.keys(PLATFORM_VARIANTS), {
      min: 1,
      max: 5,
    }),

    label: f.datatype.boolean()
      ? f.lorem.words({ min: 1, max: 3 })
      : f.lorem.words({ min: 6, max: 9 }),

    notes: new Array(f.number.int({ min: 0, max: 3 })).map((x) => {
      return {
        variant: f.helpers.arrayElement(["warning", "disclaimer"]),
        value: f.lorem.paragraph(),
      };
    }),
  };
};

export const createList = (): u.Collection<Software> =>
  u.fromArray(new Array(200).fill(null).map(() => createItem()));
