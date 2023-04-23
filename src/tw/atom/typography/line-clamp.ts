import { Arbitrary } from "../arbitrary";

export type TwLineClamp =
  | `line-clamp-${LineClampRange | 'none'}`
  | `line-clamp-${Arbitrary}`

type LineClampRange =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'