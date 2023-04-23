import { Arbitrary } from "../arbitrary"

export type TwTextUnderlineOffset =
  | `underline-offset-${'auto' | TextUnderlineOffsetWidth}`
  | `underline-offset-${Arbitrary}`

type TextUnderlineOffsetWidth =
  | '0'
  | '1'
  | '2'
  | '4'
  | '8'