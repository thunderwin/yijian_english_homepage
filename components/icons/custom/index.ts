import type { ComponentProps, ReactElement } from "react";
import { RfqIcon } from "./rfq";
import { SpecPackIcon } from "./spec-pack";

export const CUSTOM_ICONS = {
  rfq: RfqIcon,
  "spec-pack": SpecPackIcon,
} as const satisfies Record<
  string,
  (props: ComponentProps<"svg">) => ReactElement
>;

export type CustomIconName = keyof typeof CUSTOM_ICONS;
