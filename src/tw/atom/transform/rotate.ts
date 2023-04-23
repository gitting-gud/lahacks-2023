import { Arbitrary } from "../arbitrary";

export type TwRotate =
  | NonnegativeRotate
  | `-${NonnegativeRotate}`

type NonnegativeRotate =
  | `rotate-${Angle}`
  | `rotate-${Arbitrary}`

type Angle =
  | '0'
  | '1'
  | '2'
  | '3'
  | '6'
  | '12'
  | '45'
  | '90'
  | '180'