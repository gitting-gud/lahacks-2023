import { Arbitrary } from "../arbitrary"

export type TwZIndex =
  | NonnegativeZIndex
  | `-${NonnegativeZIndex}`

type NonnegativeZIndex =
  | `z-${Index | Arbitrary}`

type Index =
  | '0'
  | '10'
  | '20'
  | '30'
  | '40'
  | '50'
  | '100'
  | 'auto'