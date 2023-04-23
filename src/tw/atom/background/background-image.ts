import { Arbitrary } from "../arbitrary"

export type TwBackgroundImage =
  | 'bg-none'
  | `bg-gradient-${Direction}`
  | `bg-${Arbitrary}`

type Direction =
  | 'to-t'
  | 'to-tr'
  | 'to-r'
  | 'to-br'
  | 'to-b'
  | 'to-bl'
  | 'to-l'
  | 'to-tl'