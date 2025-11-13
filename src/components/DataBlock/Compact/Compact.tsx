import * as schema from "../DataBlock.schema";
import { Icon } from "@/components/Icon";
import s from "./Compact.module.css";
import * as Display from "@/entities/Display";
import { calcEvaluationDisplayValue, calcEvaluationScore } from "../helpers";
import { TIER_ID_ARRAY, evaluations, origins } from "@/entities/Software";

export const CompactBase = (props: schema.BaseProps) => {
  const { label, value, icon } = props;

  return (
    <div className={s.wrapper}>
      <div className={s.icon}>
        <Icon variant={icon} size="s" />
      </div>

      <p className={s.value}>{value || label}</p>
      {value && <p className={s.label}>{label}</p>}
    </div>
  );
};

export const Compact = (props: schema.Props) => {
  const { value, id } = props;
  const { icon, label } = Display.display[id];

  if (id === "software.company.headquarters") {
    if (!value) return null;

    return (
      <CompactBase
        label={Display.display[id].label}
        value={(origins as any)[value].label}
        icon={`flag-${value}` as any}
      />
    );
  }

  if (id === "software.company.ownership") {
    if (!value) return null;

    return (
      <CompactBase
        label={Display.display[id].label}
        value={(origins as any)[value].label}
        icon={`flag-${value}` as any}
      />
    );
  }

  if (id.startsWith("software.tiers.")) {
    if (!value) return null;

    const innerId = id.replace(
      "software.tiers.",
      ""
    ) as keyof typeof evaluations;

    const index = TIER_ID_ARRAY.indexOf(innerId as any);
    const ICON_ARRAY = ["level-one", "level-two", "level-three"] as const;

    return (
      <CompactBase
        label={Display.display[id].label}
        value={value}
        icon={ICON_ARRAY[index]}
        color="#543BF1"
      />
    );
  }

  if (id.startsWith("software.evaluations.")) {
    const innerId = id.replace(
      "software.evaluation.",
      ""
    ) as keyof typeof evaluations;

    const score = calcEvaluationScore({
      id: innerId,
      value: Number(value),
    });

    const content = calcEvaluationDisplayValue({
      id: innerId,
      value: Number(value),
    });

    return (
      <CompactBase
        label={Display.display[id].label}
        value={content}
        icon={score!.icon}
        color={score!.color}
      />
    );
  }

  return (
    <>
      <CompactBase label={label} value={value} icon={icon} />
    </>
  );
};
