import { Color } from "../../color";
import { Arbitrary } from "../arbitrary";

export type TwBorderColor =
  | `border-${Color}`
  | `border-${Arbitrary}`
  | `border-${Side}-${Color}`
  | `border-${Side}-${Arbitrary}`

type Side =
  | 'x' | 'y'
  | 's' | 'e'
  | 't' | 'r' | 'b' | 'l'
  