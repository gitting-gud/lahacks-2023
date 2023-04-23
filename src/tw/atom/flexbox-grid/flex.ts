import { Arbitrary } from "../arbitrary";

export type TwFlex =
  | 'flex-1'
  | 'flex-auto'
  | 'flex-initial'
  | 'flex-none'
  | `flex-${Arbitrary}`
