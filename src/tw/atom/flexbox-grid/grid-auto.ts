import { Arbitrary } from "../arbitrary"

export type TwGridAutoFlow =
  | `grid-flow-${AutoFlowKeyword}`

type AutoFlowKeyword =
  | 'row'
  | 'col'
  | 'dense'
  | 'row-dense'
  | 'col-dense'

export type TwGridAutoColumns =
  | `auto-cols-${AutoSize | Arbitrary}`

export type TwGridAutoRows =
  | `auto-rows-${AutoSize | Arbitrary}`

type AutoSize =
  | 'auto'
  | 'min'
  | 'max'
  | 'fr'