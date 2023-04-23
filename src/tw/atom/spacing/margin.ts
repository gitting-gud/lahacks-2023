import { DefaultSpacing } from "../../spacing"
import { Arbitrary } from "../arbitrary"

export type TwMargin =
  | NonnegativeMargin
  | `-${NonnegativeMargin}`

type NonnegativeMargin =
  | `m${MarginSide}-${DefaultSpacing | Arbitrary}`

type MarginSide =
  | ''
  | 't' | 'r' | 'b' | 'l'
  | 'x' | 'y'
  | 's' | 'e'