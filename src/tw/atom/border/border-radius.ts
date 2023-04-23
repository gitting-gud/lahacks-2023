import { Arbitrary } from "../arbitrary"

export type TwBorderRadius =
  | 'rounded'
  | `rounded-${Size}`
  | `rounded-${Arbitrary}`
  | `rounded-${Side}`
  | `rounded-${Side}-${Size}`
  | `rounded-${Side}-${Arbitrary}`
  
type Side =
  | 's' | 'e'
  | 't' | 'r' | 'b' | 'l'
  | 'ss' | 'se' | 'ee' | 'es'
  | 'tl' | 'tr' | 'br' | 'bl'

type Size = 
  | 'none'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | 'full'