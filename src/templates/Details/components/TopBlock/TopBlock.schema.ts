import { type Item as Software } from "@/entities/Software";

export type Props = Pick<Software, "label" | "indicators" | "logo" | "url">;
