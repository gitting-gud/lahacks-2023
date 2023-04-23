import { Arbitrary } from "../arbitrary";

export type TwAnimation =
  | 'animate-none'
  | 'animate-spin'
  | 'animate-ping'
  | 'animate-pulse'
  | 'animate-bounce'
  | `animate-${Arbitrary}`