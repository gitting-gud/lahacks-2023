import { Arbitrary } from "../arbitrary";

export type TwVerticalAlign =
  | 'align-baseline'
  | 'align-top'
  | 'align-middle'
  | 'align-bottom'
  | 'align-text-top'
  | 'align-text-bottom'
  | 'align-sub'
  | 'align-super'
  | `align-${Arbitrary}`