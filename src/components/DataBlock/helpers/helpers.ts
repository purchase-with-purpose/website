import { type EvaluationValue, evaluations } from "@/entities/Software";

/**
 * ...
 */
export const calcPercentage = (value: number, total: number) => {
  if (total === 0) return 0;
  return Math.floor((value / total) * 100);
};

/**
 * ...
 */
export const calcEvaluationDisplayValue = (
  props: Pick<EvaluationValue, "id" | "value">
): string => {
  const { id, value } = props;

  const innerId = props.id.replace(
    "software.evaluations.",
    ""
  ) as keyof typeof evaluations;

  if (innerId === "privacy-guide" && value === 0) return "Fail";
  if (innerId === "privacy-guide" && value === 1) return "Pass";

  if (innerId === "privacy-tools" && value === 0) return "Fail";
  if (innerId === "privacy-tools" && value === 1) return "Pass";

  return `${calcPercentage(value, 5)} %`;
};

/**
 * ...
 */
export const calcEvaluationScore = (
  props: Pick<EvaluationValue, "id" | "value"> | undefined
): null | { icon: "check" | "warning" | "cross"; color: string } => {
  if (!props) return null;
  const { value } = props;

  const innerId = props.id.replace(
    "software.evaluations.",
    ""
  ) as keyof typeof evaluations;

  const { scale } = evaluations[innerId];
  const percentage = calcPercentage(value, scale);

  if (percentage >= 60) {
    return {
      color: "#22AE29",
      icon: "check",
    };
  }

  if (percentage >= 40) {
    return {
      color: "#ED6C02",
      icon: "warning",
    };
  }

  return {
    color: "red",
    icon: "cross",
  };
};
