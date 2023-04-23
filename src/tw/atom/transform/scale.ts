import { Arbitrary } from "../arbitrary"

export type TwScale =
  | `scale-${Percentage}`
  | `scale-${Arbitrary}`
  | `scale-${Axis}-${Percentage}`
  | `scale-${Axis}-${Arbitrary}`

type Axis =
  | 'x'
  | 'y'

type Percentage =
  | '0'
  | '50'
  | '75'
  | '90'
  | '95'
  | '100'
  | '105'
  | '110'
  | '125'
  | '150'