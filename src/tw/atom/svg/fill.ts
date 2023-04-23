import { Color } from "../../color";
import { Arbitrary } from "../arbitrary";

export type TwFill =
  | 'fill-none'
  | `fill-${Color}`
  | `fill-${Arbitrary}`