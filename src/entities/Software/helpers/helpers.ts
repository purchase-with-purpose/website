import { type EvaluationValue, evaluations, type Item } from "../schema";
import * as u from "@/helpers/utilities";

/**
 * ...
 */
const calcPercentage = (value: number, total: number) => {
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

  if (id === "cspp" && value === 1) return "Fail";
  if (id === "cspp" && value === 2) return "Warning";
  if (id === "cspp" && value === 3) return "Pass";

  if (id === "capterra") return `${calcPercentage(value, 5)} %`;
  if (id === "trustpilot") return `${calcPercentage(value, 5)} %`;

  throw new Error(`Unknown evaluation id: ${id}`);
};

/**
 * ...
 */
export const calcEvaluationScore = (
  props: Pick<EvaluationValue, "id" | "value"> | undefined
): null | { icon: "check" | "warning" | "cross"; color: string } => {
  if (!props) return null;

  const { id, value } = props;
  const { scale } = evaluations[id];

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
