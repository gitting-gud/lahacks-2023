import { Arbitrary } from "../arbitrary";

export type TwSaturate =
  | `saturate-${Amount}`
  | `saturate-${Arbitrary}`

type Amount =
  | '0'
  | '50'
  | '100'
  | '150'
  | '200'