import { Arbitrary } from "../arbitrary"

export type TwHueRotate =
  | NonnegativeHueRotate
  | `-${NonnegativeHueRotate}`

type NonnegativeHueRotate =
  | `hue-rotate-${Amount}`
  | `hue-rotate-${Arbitrary}`

type Amount =
  | '0'
  | '15'
  | '30'
  | '60'
  | '90'
  | '180'