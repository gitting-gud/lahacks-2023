import { Arbitrary } from "../arbitrary"

export type TwGridTemplateRows =
  `grid-rows-${NRows | 'none' | Arbitrary}`

type NRows =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'