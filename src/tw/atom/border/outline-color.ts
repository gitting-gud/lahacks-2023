import { Color } from "../../color";
import { Arbitrary } from "../arbitrary";

export type TwOutlineColor =
  | `outline-${Color}`
  | `outline-${Arbitrary}`