import { Arbitrary } from "../arbitrary";

export type TwRingWidth =
  | 'ring'
  | 'ring-inset'
  | `ring-${Width}`
  | `ring-${Arbitrary}`

type Width =
  | '0'
  | '1'
  | '2'
  | '4'
  | '8'