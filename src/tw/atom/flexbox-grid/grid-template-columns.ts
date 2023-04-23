import { Arbitrary } from "../arbitrary"

export type TwGridTemplateColumns =
  `grid-cols-${NColumns | 'none' | Arbitrary}`

type NColumns =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'