import { Arbitrary } from "../arbitrary";

export type TwInvert =
  | 'invert'
  | 'invert-0'
  | `invert-${Arbitrary}`