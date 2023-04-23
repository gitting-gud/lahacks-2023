import { Arbitrary } from "../arbitrary";

export type TwBackdropSaturate =
  | `backdrop-saturate-${Amount}`
  | `backdrop-saturate-${Arbitrary}`

type Amount =
  | '0'
  | '50'
  | '100'
  | '150'
  | '200'