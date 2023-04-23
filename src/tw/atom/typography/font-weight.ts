import { Arbitrary } from "../arbitrary"

export type TwFontWeight =
  | `font-${FontWeight}`
  | `font-${Arbitrary}`

type FontWeight =
  | 'thin'
  | 'extralight'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black'