export type TwBoxShadow =
  | 'shadow'
  | 'shadow-inner'
  | 'shadow-none'
  | `shadow-${Size}`

type Size =
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'