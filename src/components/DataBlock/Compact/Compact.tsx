import * as schema from "../DataBlock.schema";
import { Icon } from "@/components/Icon";
// import * as u from "@/helpers/utilities";
import s from "./Compact.module.css";
import { TinyColor } from "@ctrl/tinycolor";

// import { BLOCK_VARIANTS, calcRating } from "@/entities/blocks";

// import {
//   TIER_VARIANTS,
//   ORIGIN_VARIANTS,
//   EVALUATION_VARIANTS,
// } from "@/entities/software";

export const Compact = (props: schema.BaseProps) => {
  const { label, value, icon, color, fill } = props;
  const inner = new TinyColor(color || "#231cad");

  return (
    <div className={s.wrapper}>
      <div
        className={s.icon}
        style={{
          fill: inner.toRgbString(),
          color: fill ? "white" : "#24224B",

          backgroundColor: fill
            ? color || "#24224B"
            : inner.setAlpha(0.05).toRgbString(),
        }}
      >
        <Icon variant={icon} size="s" />
      </div>

      <p className={s.value}>{value || label}</p>
      {value && value !== label && <p className={s.label}>{label}</p>}
    </div>
  );
};

// export const Compact = (props: schema.Props) => {
//   const { value, id } = props;
//   const { icon, label } = BLOCK_VARIANTS[id];

//   if (id === "software.company.headquarters") {
//     if (!value) return null;

//     return (
//       <CompactBase
//         label={BLOCK_VARIANTS[id].label}
//         value={(ORIGIN_VARIANTS as any)[value].label}
//         icon={`flag-${value}` as any}
//       />
//     );
//   }

//   if (id === "software.company.ownership") {
//     if (!value) return null;

//     console

//     return (
//       <CompactBase
//         label={BLOCK_VARIANTS[id].label}
//         value={(ORIGIN_VARIANTS as any)[value].label}
//         icon={`flag-${value}` as any}
//       />
//     );
//   }

//   if (id.startsWith("software.tiers.")) {
//     if (!value) return null;

//     const innerId = id.replace(
//       "software.tiers.",
//       ""
//     ) as keyof typeof EVALUATION_VARIANTS;

//     const index = u.keys(TIER_VARIANTS).indexOf(innerId as any);
//     const ICON_ARRAY = ["level-one", "level-two", "level-three"] as const;

//     return (
//       <CompactBase
//         label={BLOCK_VARIANTS[id].label}
//         value={value}
//         icon={ICON_ARRAY[index]}
//         color="#543BF1"
//       />
//     );
//   }

//   if (id.startsWith("software.evaluations.")) {
//     const innerId = id.replace(
//       "software.evaluations.",
//       ""
//     ) as keyof typeof EVALUATION_VARIANTS;

//     const { system } = EVALUATION_VARIANTS[innerId];

//     const rating = calcRating({
//       system,
//       value: Number(value),
//     });

//     if (rating === null) return null;

//     return (
//       <CompactBase
//         label={BLOCK_VARIANTS[id].label}
//         value={rating.label}
//         icon={rating.icon}
//         color={rating.colour}
//       />
//     );
//   }

//   return (
//     <>
//       <CompactBase label={label} value={value} icon={icon} />
//     </>
//   );
// };
