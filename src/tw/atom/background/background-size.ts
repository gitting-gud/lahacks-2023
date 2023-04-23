import { Arbitrary } from "../arbitrary";

export type TwBackgroundSize =
  | 'bg-auto'
  | 'bg-cover'
  | 'bg-contain'
  | `bg-${Arbitrary}`