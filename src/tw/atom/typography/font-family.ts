import { Arbitrary } from "../arbitrary";

export type TwFontFamily =
  | 'font-sans'
  | 'font-serif'
  | 'font-mono'
  | `font-${Arbitrary}`