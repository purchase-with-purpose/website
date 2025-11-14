import c from "classnames";
import s from "./Sidebar.module.css";
import { Icon } from "@/components/Icon";
import * as schema from "../DataBlock.schema";
import { TinyColor } from "@ctrl/tinycolor";
import * as Display from "@/entities/Display";
import { calcEvaluationDisplayValue, calcEvaluationScore } from "../helpers";
import { TIER_ID_ARRAY, evaluations, origins } from "@/entities/Software";

export const SidebarBase = (props: schema.BaseProps) => {
  const { label, value, icon, url, color } = props;
  const Element = url ? "a" : "div";
  const inner = new TinyColor(color || "#24224B");

  return (
    <Element
      href={url || undefined}
      target={url ? "_blank" : undefined}
      className={c({
        [s.wrapper]: true,
        [s.wrapperLink]: Boolean(url),
      })}
    >
      {icon && (
        <div
          className={s.icon}
          style={{
            fill: inner.toRgbString(),
            backgroundColor: inner.setAlpha(0.05).toRgbString(),
          }}
        >
          <Icon variant={icon} />
        </div>
      )}

      <div className={s.content}>
        <div className={s.primary}>{value}</div>

        <div
          className={c({
            [s.secondary]: true,
            [s.secondaryLink]: Boolean(url),
          })}
        >
          {label}
        </div>
      </div>
    </Element>
  );
};

export const Sidebar = (props: schema.Props) => {
  const { id, value } = props;

  if (id === "software.company.headquarters") {
    if (!value) return null;

    return (
      <SidebarBase
        label={Display.display[id].label}
        value={(origins as any)[value].label}
        icon={`flag-${value}` as any}
      />
    );
  }

  if (id === "software.company.ownership") {
    if (!value) return null;

    return (
      <SidebarBase
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
      <SidebarBase
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
      <SidebarBase
        label={Display.display[id].label}
        value={content}
        icon={score!.icon}
        color={score!.color}
        url={evaluations[innerId]?.url || null}
      />
    );
  }

  return (
    <SidebarBase
      label={Display.display[id].label}
      value={value}
      icon={Display.display[id].icon}
    />
  );
};
