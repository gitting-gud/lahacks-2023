import { DefaultSpacing } from "../../spacing"
import { Arbitrary } from "../arbitrary"

export type TwSpaceBetween =
  | NonnegativeSpaceBetween
  | `-${NonnegativeSpaceBetween}`

type NonnegativeSpaceBetween =
  | `space-${Axis}-${DefaultSpacing | 'reverse' | Arbitrary}`

type Axis =
  | 'x'
  | 'y'
