import { Arbitrary } from "../arbitrary";

export type TwTransitionDuration =
  | `duration-${Amount}`
  | `duration-${Arbitrary}`

type Amount =
  | '0'
  | '75'
  | '100'
  | '150'
  | '200'
  | '300'
  | '500'
  | '700'
  | '1000'