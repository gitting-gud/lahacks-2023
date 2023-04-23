import { DefaultSpacing } from "../../spacing"
import { Arbitrary } from "../arbitrary"

export type TwPadding =
  `p${PaddingSide}-${DefaultSpacing | Arbitrary}`

type PaddingSide =
  | ''
  | 't' | 'r' | 'b' | 'l'
  | 'x' | 'y'
  | 's' | 'e'