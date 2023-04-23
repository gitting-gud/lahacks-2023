import { Arbitrary } from "../arbitrary"

export type TwDivideWidth =
  | `divide-${Axis}`
  | `divide-${Axis}-${Width | 'reverse'}`
  | `divide-${Axis}-${Arbitrary}`

type Axis =
  | 'x'
  | 'y'

type Width =
  | '0'
  | '2'
  | '4'
  | '8'