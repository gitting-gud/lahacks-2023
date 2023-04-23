import { Color } from "../../color";
import { Arbitrary } from "../arbitrary";

export type TwRingColor =
  | `ring-${Color}`
  | `ring-${Arbitrary}`
