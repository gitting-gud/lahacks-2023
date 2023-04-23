import { Arbitrary } from "../arbitrary";

export type TwListStyleType =
  | 'list-none'
  | 'list-disc'
  | 'list-decimal'
  | `list-${Arbitrary}`