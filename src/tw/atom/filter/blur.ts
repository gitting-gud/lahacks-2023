import { Arbitrary } from "../arbitrary"

export type TwBlur =
  | 'blur'
  | 'blur-none'
  | `blur-${Amount}`
  | `blur-${Arbitrary}`

type Amount =
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'