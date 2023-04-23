import { Color } from "../../color";
import { Arbitrary } from "../arbitrary";

export type TwCaretColor =
  | `caret-${Color}`
  | `caret-${Arbitrary}`