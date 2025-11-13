import * as schema from "./schema";
import { type Item as Software } from "../Software";
import * as u from "@/helpers/utilities";

type Block = {
  id: schema.ItemId;
  value: string | null;
};

export const extractGroup = (props: {
  group: schema.Group["id"];
  item: Software;
}): Block[] => {
  const { group, item } = props;

  let result: Block[] = [];

  if (group === "recommended") {
    return [
      {
        id: "software.company.url",
        value: item.company.url,
      },
      {
        id: "software.company.name",
        value: item.company.name,
      },
      {
        id: "software.features.music.purchase",
        value:
          item.features.find((f) => f.id === "music.purchase")?.value || null,
      },
    ];
  }

  if (group === "company") {
    return u.filter([
      {
        id: "software.company.ownership",
        value: item.company.ownership,
      },
      item.company.headquarters && {
        id: "software.company.headquarters",
        value: item.company.headquarters,
      },
    ]);
  }

  if (group === "platforms") {
    return item.platforms.map((x) => {
      return {
        id: `software.platforms.${x}`,
        value: null,
      };
    });
  }

  if (group === "pricing") {
    return u.filter(
      u.values(item.tiers).map((x) => {
        if (!x) return null;

        return {
          id: `software.tiers.${x?.id}`,
          value: "$10",
        };
      })
    );
  }

  if (group === "ratings") {
    return u.filter([
      item.evaluations.cspp && {
        id: "software.evaluations.cspp",
        value: item.evaluations.cspp?.value.toString() || null,
      },

      item.evaluations.capterra && {
        id: "software.evaluations.capterra",
        value: item.evaluations.capterra?.value.toString() || null,
      },

      item.evaluations.trustpilot && {
        id: "software.evaluations.trustpilot",
        value: item.evaluations.trustpilot?.value.toString() || null,
      },
    ]);
  }

  if (group === "features") {
    return item.features.map((x) => {
      return {
        id: `software.features.${x.id}`,
        value: null,
      };
    });
  }

  return result;
};

export const calcColumns = (props: { item: Software }) => {
  const { item } = props;

  let max = 0;

  const result = u.keys(schema.groups).map((id) => {
    const inner = extractGroup({ group: id, item });
    if (inner.length > max) {
      max = inner.length;
    }

    return inner;
  });

  return {
    columns: result,
    max,
  };
};
