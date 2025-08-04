import { fields, collection } from "@keystatic/core";
import type { ComponentSchema } from "@keystatic/core";
import * as u from "../../helpers/utilities";
import * as schema from "./Software.schema";
import * as Category from "../Category";
import * as Origin from "../Origin";
import * as Indicator from "../Indicator";

const inner = {
  label: fields.text({
    label: "Name",
    validation: {
      isRequired: true,
    },
  }),

  id: fields.slug({
    name: {
      label: "Unique ID",
      validation: {
        isRequired: true,
      },
    },
  }),

  logo: fields.image({
    label: "Logo",
    directory: "public/images/logos",
    validation: {
      isRequired: true,
    },
  }),

  description: fields.text({
    label: "Description",
    multiline: true,
    validation: {
      isRequired: true,
    },
  }),

  incumbent: fields.checkbox({
    label: "Incumbent",
  }),

  category: fields.select({
    label: "Category",
    defaultValue: "none",

    options: [
      {
        value: "none",
        label: "None",
      },
      ...u.values(Category.items).map((x) => ({
        value: x.id,
        label: x.label,
      })),
    ],
  }),

  origin: fields.select({
    label: "Location",
    defaultValue: "none",

    options: [
      {
        value: "none",
        label: "None",
      },
      ...u.values(Origin.items).map((x) => ({
        value: x.id,
        label: x.label,
      })),
    ],
  }),

  indicators: fields.multiselect({
    label: "Indicators",
    defaultValue: [],
    options: u.values(Indicator.items).map((x) => ({
      value: x.id,
      label: x.label,
    })),
  }),

  additional: fields.array(
    fields.object({
      label: fields.text({
        label: "Label",
      }),

      variant: fields.select({
        label: "Notes",
        defaultValue: "info",
        options: [
          {
            value: "info",
            label: "Info",
          },
          {
            value: "disclaimer",
            label: "Disclaimer",
          },
          {
            value: "resource",
            label: "Resource",
          },
        ],
      }),

      description: fields.text({
        label: "Description",
        multiline: true,
      }),

      url: fields.text({
        label: "URL",
        validation: {
          isRequired: false,
        },
      }),
    }),
    {
      label: "Notes",
    }
  ),
};

export const cms = collection({
  schema: inner,
  label: "Software",
  slugField: "label",
  path: "src/data/software/*",
  columns: ["description"],
  format: {
    data: "json",
  },
});
