import { faker as f } from "@faker-js/faker";
import * as u from "@/helpers/utilities";
import { FEATURE_ICON_ARRAY } from "../schema";

import {
  type Item as Software,
  categories,
  indicators,
  origins,
  tags,
} from "@/entities/Software";

export const createItem = (): Software => {
  const category = f.helpers.arrayElement(u.keys(categories));

  return {
    id: u.createBrand("SOFTWARE_ID")!,
    company: {
      id: f.lorem.slug(3),
      headquarters: f.helpers.arrayElement(u.keys(origins)),
      ownership: f.helpers.arrayElement(u.keys(origins)),
      name: f.company.name(),
      structure: f.helpers.arrayElement(["Private", "Public", "Nonprofit"]),
      url: f.internet.url(),
    },
    features: new Array(f.number.int({ min: 2, max: 12 }))
      .fill(null)
      .map(() => ({
        label: f.lorem.words({ min: 1, max: 3 }),
        value: f.lorem.words({ min: 1, max: 2 }),
        icon: f.helpers.arrayElement(FEATURE_ICON_ARRAY),
      })),
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
        value: f.lorem.sentence(),
      },
      basic: {
        id: "basic",
        value: f.lorem.sentence(),
      },
      premium: {
        id: "premium",
        value: f.lorem.sentence(),
      },
    },
    category,
    description: f.lorem.paragraphs(3),
    indicators: f.helpers.arrayElements(u.keys(indicators), { min: 0, max: 2 }),
    incumbent: f.datatype.boolean(),
    logo: f.image.urlPicsumPhotos(),
    url: f.internet.url(),
    origin: f.helpers.arrayElement(u.keys(origins)),

    tags: f.helpers.arrayElements(
      u
        .keys(tags)
        .filter((x) => x.startsWith("global.") || x.startsWith(category)),
      f.datatype.boolean() ? { min: 1, max: 3 } : { min: 9, max: 12 }
    ),

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

export const examples = {
  basic: (): Software => {
    return {
      id: u.createBrand("SOFTWARE_ID")!,
      label: "Chrome",
      company: {
        id: "chrome",
        headquarters: "US",
        ownership: "US",
        name: "Alphabet Inc.",
        url: "https://abc.xyz/",
        structure: "Public",
      },
      features: [
        {
          label: "Extensions",
          value: "Supported",
          icon: "check",
        },
      ],
      evaluations: {} as any,
      tiers: {} as any,
      description: "A widely used browser by Google.",
      indicators: [],
      category: "browser",
      incumbent: true,
      logo: "/images/software/chrome.png",
      tags: [],
      url: "https://www.google.com/chrome/",
      notes: [
        {
          variant: "disclaimer",
          value: "Part of the big tech monopolies.",
        },
      ],
      origin: "US",
    };
  },
};
