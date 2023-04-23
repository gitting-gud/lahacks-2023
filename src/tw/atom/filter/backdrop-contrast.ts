import { Arbitrary } from "../arbitrary"

export type TwBackdropContrast =
  | `backdrop-contrast-${Amount}`
  | `backdrop-contrast-${Arbitrary}`

type Amount =
  | '0'
  | '50'
  | '75'
  | '100'
  | '125'
  | '150'
  | '200'