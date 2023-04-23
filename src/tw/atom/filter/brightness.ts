import { Arbitrary } from "../arbitrary";

export type TwBrightness =
  | `brightness-${Amount}`
  | `brightness-${Arbitrary}`

type Amount =
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
  | '200'