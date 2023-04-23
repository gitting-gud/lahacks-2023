import { Arbitrary } from "../arbitrary";

export type TwStrokeWidth =
  | `stroke-${Width}`
  // doesn't this overlap with `TwStroke`?
  | `stroke-${Arbitrary}`

type Width =
  | '0'
  | '1'
  | '2'