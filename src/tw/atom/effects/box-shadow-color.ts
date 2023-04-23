import { Color } from "../../color";
import { Arbitrary } from "../arbitrary";

export type TwBoxShadowColor =
  | `shadow-${Color}`
  | `shadow-${Arbitrary}`