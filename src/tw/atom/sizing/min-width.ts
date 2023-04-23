import { Arbitrary } from "../arbitrary"

export type TwMinWidth =
  | `min-w-${'0' | 'full' | MinWidthContent | Arbitrary}`

type MinWidthContent =
  | 'min'
  | 'max'
  | 'fit'