import c from "classnames";
import s from "./Sidebar.module.css";
import { Icon } from "@/components/Icon";
import * as schema from "../DataBlock.schema";
import { TinyColor } from "@ctrl/tinycolor";
import { BLOCK_VARIANTS } from "@/entities/blocks";
import * as u from "@/helpers/utilities";
import { calcEvaluationDisplayValue, calcEvaluationScore } from "../helpers";

import {
  TIER_VARIANTS,
  EVALUATION_VARIANTS,
  ORIGIN_VARIANTS,
} from "@/entities/software";

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
        label={BLOCK_VARIANTS[id].label}
        value={(ORIGIN_VARIANTS as any)[value].label}
        icon={`flag-${value}` as any}
      />
    );
  }

  if (id === "software.company.ownership") {
    if (!value) return null;

    return (
      <SidebarBase
        label={BLOCK_VARIANTS[id].label}
        value={(ORIGIN_VARIANTS as any)[value].label}
        icon={`flag-${value}` as any}
      />
    );
  }

  if (id.startsWith("software.tiers.")) {
    if (!value) return null;

    const innerId = id.replace(
      "software.tiers.",
      ""
    ) as keyof typeof EVALUATION_VARIANTS;

    const index = u.keys(EVALUATION_VARIANTS).indexOf(innerId as any);
    const ICON_ARRAY = ["level-one", "level-two", "level-three"] as const;

    return (
      <SidebarBase
        label={BLOCK_VARIANTS[id].label}
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
    ) as keyof typeof EVALUATION_VARIANTS;

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
        label={BLOCK_VARIANTS[id].label}
        value={content}
        icon={score!.icon}
        color={score!.color}
        url={(EVALUATION_VARIANTS as any)[innerId]?.url || null}
      />
    );
  }

  return (
    <SidebarBase
      label={BLOCK_VARIANTS[id].label}
      value={value}
      icon={BLOCK_VARIANTS[id].icon}
    />
  );
};
