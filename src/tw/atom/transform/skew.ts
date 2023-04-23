import { Arbitrary } from "../arbitrary"

export type TwSkew =
  | NonnegativeSkew
  | `-${NonnegativeSkew}`

type NonnegativeSkew =
  | `skew-${Axis}-${Amount}`
  | `skew-${Axis}-${Arbitrary}`

type Axis =
  | 'x'
  | 'y'

type Amount =
  | '0'
  | '1'
  | '2'
  | '3'
  | '6'
  | '12'