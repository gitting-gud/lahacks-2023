import { DefaultSpacing } from "../../spacing"
import { Arbitrary } from "../arbitrary"

export type TwScrollPadding =
  | `p-${DefaultSpacing}`
  | `p-${Arbitrary}`
  | `p${Side}-${DefaultSpacing}`
  | `p${Side}-${Arbitrary}`

type Side =
  | 'x' | 'y'
  | 's' | 'e'
  | 't' | 'r' | 'b' | 'l'
  