```
// import * as schema from "../schema";
// import { Software } from "@/entities/software";
// import * as u from "@/helpers/utilities";

// export const extractGroup = (props: {
//   group: schema.Group["id"];
//   item: Software;
// }): schema.Block[] => {
//   const { group, item } = props;

//   let result: Block[] = [];

//   if (group === "recommended") {
//     return [
//       {
//         id: "software.company.url",
//         value: item.company.url,
//       },
//       {
//         id: "software.company.name",
//         value: item.company.name,
//       },
//     ];
//   }

//   if (group === "company") {
//     return u.filter([
//       {
//         id: "software.company.ownership",
//         value: item.company.ownership,
//       },
//       item.company.headquarters && {
//         id: "software.company.headquarters",
//         value: item.company.headquarters,
//       },
//     ]);
//   }

//   if (group === "platforms") {
//     return item.platforms.map((x) => {
//       return {
//         id: `software.platforms.${x}`,
//         value: null,
//       };
//     });
//   }

//   if (group === "pricing") {
//     const inner = [
//       item.tiers.free && {
//         id: "software.tiers.free" as const,
//         value: item.tiers.free!,
//       },

//       item.tiers.basic && {
//         id: "software.tiers.basic" as const,
//         value: item.tiers.basic!,
//       },

//       item.tiers.premium && {
//         id: "software.tiers.premium" as const,
//         value: item.tiers.premium!,
//       },
//     ].filter((x) => x !== "");

//     return u.filter(inner);
//   }

//   if (group === "ratings") {
//     const inner = [
//       item.evaluations.trustpilot && {
//         id: "software.evaluations.trustpilot" as const,
//         value: item.evaluations.trustpilot?.toString() || null,
//       },

//       item.evaluations.android && {
//         id: "software.evaluations.android" as const,
//         value: item.evaluations.android?.toString() || null,
//       },

//       item.evaluations.ios && {
//         id: "software.evaluations.ios" as const,
//         value: item.evaluations.ios?.toString() || null,
//       },

//       item.evaluations["privacy-guide"] && {
//         id: "software.evaluations.privacy-tools" as const,
//         value: item.evaluations["privacy-guide"]?.toString() || null,
//       },

//       item.evaluations["privacy-guide"] && {
//         id: "software.evaluations.privacy-guide" as const,
//         value: item.evaluations["privacy-guide"]?.toString() || null,
//       },
//     ].filter((x) => x !== 0);

//     return u.filter(inner);
//   }

//   if (group === "features") {
//     const inner = item.features.map((x) => `software.features.${x}` as const);

//     return inner.map((id) => ({
//       id,
//       value: null,
//     }));
//   }

//   return result;
// };

// export const calcColumns = (props: { item: Software }) => {
//   const { item } = props;

//   let max = 0;

//   const result = u.keys(schema.groups).map((id) => {
//     const inner = extractGroup({ group: id, item });
//     if (inner.length > max) {
//       max = inner.length;
//     }

//     return inner;
//   });

//   return {
//     columns: result,
//     max,
//   };
// };

```