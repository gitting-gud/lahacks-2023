import { Arbitrary } from "../arbitrary";

export type TwDropShadow =
  | 'drop-shadow'
  | 'drop-shadow-none'
  | `drop-shadow-${Amount}`
  | `drop-shadow-${Arbitrary}`

type Amount =
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'