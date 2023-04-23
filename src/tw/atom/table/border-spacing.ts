import { DefaultSpacing } from "../../spacing";
import { Arbitrary } from "../arbitrary";

export type TwBorderSpacing =
  | `border-spacing-${DefaultSpacing}`
  | `border-spacing-${Arbitrary}`
  | `border-spacing-${Axis}-${DefaultSpacing}`
  | `border-spacing-${Axis}-${Arbitrary}`

type Axis =
  | 'x'
  | 'y'