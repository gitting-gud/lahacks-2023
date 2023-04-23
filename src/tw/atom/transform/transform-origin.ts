import { Arbitrary } from "../arbitrary"

export type TwTransformOrigin =
  | `origin-${Keyword}`
  | `origin-${Arbitrary}`

type Keyword =
  | 'center'
  | 'top'
  | 'top-right'
  | 'right'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left'
  | 'left'
  | 'top-left'