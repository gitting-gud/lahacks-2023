import { Arbitrary } from "../arbitrary";

export type TwOutlineWidth =
  | `outline-${Width}`
  | `outline-${Arbitrary}`

type Width =
  | '0'
  | '1'
  | '2'
  | '4'
  | '8'