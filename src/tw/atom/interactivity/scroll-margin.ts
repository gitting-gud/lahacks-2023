import { DefaultSpacing } from "../../spacing"
import { Arbitrary } from "../arbitrary"

export type TwScrollMargin =
  | NonnegativeScrollMargin
  | `-${NonnegativeScrollMargin}`

type NonnegativeScrollMargin =
  | `scroll-m-${DefaultSpacing}`
  | `scroll-m-${Arbitrary}`
  | `scroll-m${Side}-${DefaultSpacing}`
  | `scroll-m${Side}-${Arbitrary}`

type Side =
  | 'x' | 'y'
  | 's' | 'e'
  | 't' | 'r' | 'b' | 'l'
  