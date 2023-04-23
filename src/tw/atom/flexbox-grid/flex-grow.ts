import { Arbitrary } from "../arbitrary";

export type TwFlexGrow =
  | 'grow'
  | 'grow-0'
  | `grow-${Arbitrary}`