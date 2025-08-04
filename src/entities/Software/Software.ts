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
    description: "The full name of the software product or service.",
    validation: {
      isRequired: true,
    },
  }),

  logo: fields.image({
    label: "Logo",
    directory: "public/images/logos",
    description:
      "Upload a logo image that represents the software. Ideal format is SVG if possible",
    validation: {
      isRequired: true,
    },
  }),

  description: fields.text({
    label: "Description",
    description:
      "A concise but informative description of the software, including its purpose and main features.",
    multiline: true,
    validation: {
      isRequired: true,
    },
  }),

  incumbent: fields.checkbox({
    label: "Incumbent",
    description:
      "Enable this value if this software is a widely used or dominant player in its category.",
  }),

  category: fields.select({
    label: "Category",
    description:
      "Select the most appropriate category that the software fits into.",
    defaultValue: "",

    options: [
      {
        value: "",
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
    defaultValue: "",
    description:
      "Select the country or region where the software is primarily developed or operated.",

    options: [
      {
        value: "",
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
    description:
      "Select one, multiple or none of the following if they are applicable to the software.",
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
      description:
        "Additional notes or comments about the software that are not part of the description.",
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
