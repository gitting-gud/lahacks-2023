import { Color } from "../../color";
import { Arbitrary } from "../arbitrary";

export type TwStroke =
  | 'stroke-none'
  | `stroke-${Color}`
  | `stroke-${Arbitrary}`