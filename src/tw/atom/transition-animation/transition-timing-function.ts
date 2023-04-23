import { Arbitrary } from "../arbitrary";

export type TwTransitionTimingFunction =
  | 'ease-linear'
  | 'ease-in'
  | 'ease-out'
  | 'ease-in-out'
  | `ease-${Arbitrary}`