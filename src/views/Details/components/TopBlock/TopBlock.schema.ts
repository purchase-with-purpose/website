import { type Software } from "@/entities/software";

export type Props = Pick<Software, "label" | "indicators" | "logo" | "url">;
