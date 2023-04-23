import { Arbitrary } from "../arbitrary"

export type TwMaxWidth =
  | `max-w-${'0' | 'none' | MaxWidthSize | 'full' | MaxWidthContent | 'prose' | MaxWidthScreen | Arbitrary}`

type MaxWidthSize =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'

type MaxWidthContent =
  | 'min'
  | 'max'
  | 'fit'

type MaxWidthScreen =
  | 'screen-sm'
  | 'screen-md'
  | 'screen-lg'
  | 'screen-xl'
  | 'screen-2xl'