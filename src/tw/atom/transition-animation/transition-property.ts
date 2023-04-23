import { Arbitrary } from "../arbitrary";

export type TwTransitionProperty =
  | 'transition'
  | 'transition-none'
  | 'transition-all'
  | `transition-${Properties}`
  | `transition-${Arbitrary}`

type Properties =
  | 'colors'
  | 'opacity'
  | 'shadow'
  | 'transform'