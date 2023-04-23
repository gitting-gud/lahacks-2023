import { Arbitrary } from "../arbitrary"

export type TwMinHeight =
  | `min-h-${'0' | 'full' | 'screen' | MinHeightContent | Arbitrary}`

type MinHeightContent =
  | 'min'
  | 'max'
  | 'fit'