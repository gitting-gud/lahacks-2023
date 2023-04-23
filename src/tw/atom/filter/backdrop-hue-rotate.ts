import { Arbitrary } from "../arbitrary"

export type TwBackdropHueRotate =
  | NonnegativeBackdropHueRotate
  | `-${NonnegativeBackdropHueRotate}`

type NonnegativeBackdropHueRotate =
  | `backdrop-hue-rotate-${Amount}`
  | `backdrop-hue-rotate-${Arbitrary}`

type Amount =
  | '0'
  | '15'
  | '30'
  | '60'
  | '90'
  | '180'