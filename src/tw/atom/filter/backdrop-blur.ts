import { Arbitrary } from "../arbitrary";

export type TwBackdropBlur =
  | 'backdrop-blur'
  | 'backdrop-blur-none'
  | `backdrop-blur-${Amount}`
  | `backdrop-blur-${Arbitrary}`

type Amount =
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'