import { faker as f } from "@faker-js/faker";
import * as u from "@/helpers/utilities";

import {
  type Software,
  categories,
  indicators,
  origins,
  tags,
  notes,
} from "@/schemas/software";

export const createItem = (): Software => {
  const category = f.helpers.arrayElement(u.keys(categories));

  return {
    id: f.string.uuid(),
    category,
    description: f.lorem.paragraphs(3),
    indicators: f.helpers.arrayElements(u.keys(indicators), { min: 1, max: 3 }),
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
        variant: f.helpers.arrayElement(u.keys(notes)),
        content: f.lorem.paragraph(),
      };
    }),
  };
};

export const createList = (): u.Collection<Software> =>
  u.fromArray(new Array(200).fill(null).map(() => createItem()));

export const examples = {
  basic: (): Software => {
    return {
      id: "chrome",
      label: "Chrome",
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
          content: "Part of the big tech monopolies.",
        },
      ],
      origin: "us",
    };
  },
};
