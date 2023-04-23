import { Arbitrary } from "../arbitrary";

export type TwRingOffsetWidth =
  | `ring-offset-${Width}`
  | `ring-offset-${Arbitrary}`

type Width =
  | '0'
  | '1'
  | '2'
  | '4'
  | '8'