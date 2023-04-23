import { Arbitrary } from "../arbitrary"

export type TwBorderWidth =
  | 'border'
  | `border-${Size}`
  | `border-${Arbitrary}`
  | `border-${Side}`
  | `border-${Side}-${Size}`
  | `border-${Side}-${Arbitrary}`

type Size =
  | '0'
  | '2'
  | '4'
  | '8'

type Side =
  | 'x' | 'y'
  | 's' | 'e'
  | 't' | 'r' | 'b' | 'l'