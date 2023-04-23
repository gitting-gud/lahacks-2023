import { Arbitrary } from "../arbitrary"

export type TwTextDecorationThickness =
  | `decoration-${'auto' | 'from-font' | TextDecorationWidth}`
  | `decoration-${Arbitrary}`

type TextDecorationWidth =
  | '0'
  | '1'
  | '2'
  | '4'
  | '8'