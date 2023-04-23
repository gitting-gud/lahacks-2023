import { Arbitrary } from "../arbitrary";

export type TwOutlineOffset =
  | `outline-offset-${Offset}`
  | `outline-offset-${Arbitrary}`

type Offset = 
  | '0'
  | '1'
  | '2'
  | '4'
  | '8'