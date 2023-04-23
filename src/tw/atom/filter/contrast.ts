import { Arbitrary } from "../arbitrary"

export type TwContrast =
  | `contrast-${Amount}`
  | `contrast-${Arbitrary}`

type Amount =
  | '0'
  | '50'
  | '75'
  | '100'
  | '125'
  | '150'
  | '200'