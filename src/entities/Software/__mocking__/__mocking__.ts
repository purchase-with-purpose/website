import { faker as f } from "@faker-js/faker";
import * as u from "@/helpers/utilities";
import { FEATURES_ID_ARRAY, PLATFORMS_ID_ARRAY } from "../schema";

import {
  type Item as Software,
  categories,
  indicators,
  origins,
} from "@/entities/Software";

export const createItem = (): Software => {
  const category = f.helpers.arrayElement(u.keys(categories));

  const { logo, swatch } = f.helpers.arrayElement([
    { logo: "/images/logos/brave.svg", swatch: "#e13927" },
    { logo: "/images/logos/chrome.png", swatch: "#fbc10a" },
    { logo: "/images/logos/firefox.png", swatch: "#6f61ec" },
    { logo: "/images/logos/safari.png", swatch: "#1b8bf7" },
  ]);

  return {
    id: u.createBrand("SOFTWARE_ID")!,
    features: f.helpers.arrayElements(FEATURES_ID_ARRAY, { min: 2, max: 6 }),

    company: {
      id: f.lorem.slug(3),
      headquarters: f.helpers.arrayElement(u.keys(origins)),
      name: f.company.name(),
      url: f.internet.url(),

      ownership: f.datatype.boolean()
        ? f.helpers.arrayElement(u.keys(origins))
        : null,
    },

    evaluations: {
      capterra: {
        id: "capterra",
        value: f.number.float({ min: 1, max: 5, fractionDigits: 1 }),
      },
      trustpilot: {
        id: "trustpilot",
        value: f.number.float({ min: 1, max: 5, fractionDigits: 1 }),
      },
      cspp: {
        id: "cspp",
        value: f.number.int({ min: 1, max: 3 }),
      },
    },
    tiers: {
      free: {
        id: "free",
        value: "Free",
      },
      basic: {
        id: "basic",
        value: `$ ${f.number.int({ min: 1, max: 22 })} / mo`,
      },
      premium: {
        id: "premium",
        value: `$ ${f.number.int({ min: 23, max: 50 })} / mo`,
      },
    },

    category,
    description: f.lorem.paragraphs(3),
    indicators: f.helpers.arrayElements(u.keys(indicators), { min: 0, max: 2 }),
    incumbent: f.datatype.boolean(),

    logo,
    swatch,

    url: f.internet.url(),
    platforms: f.helpers.arrayElements(PLATFORMS_ID_ARRAY, { min: 1, max: 4 }),

    label: f.datatype.boolean()
      ? f.lorem.words({ min: 1, max: 3 })
      : f.lorem.words({ min: 6, max: 9 }),

    notes: new Array([1, 2, 3, 4]).map((x) => {
      return {
        variant: f.helpers.arrayElement(["warning", "disclaimer"]),
        value: f.lorem.paragraph(),
      };
    }),
  };
};

export const createList = (): u.Collection<Software> =>
  u.fromArray(new Array(200).fill(null).map(() => createItem()));
