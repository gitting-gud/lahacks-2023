import { Arbitrary } from "../arbitrary"

export type TwBackgroundPosition =
  | `bg-${Side}`
  | `bg-${Arbitrary}`

type Side =
  | 'bottom'
  | 'center'
  | 'left'
  | 'left-bottom'
  | 'left-top'
  | 'right'
  | 'right-bottom'
  | 'right-top'
  | 'top'