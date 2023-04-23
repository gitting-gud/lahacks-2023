import { Color } from "../../color";
import { Arbitrary } from "../arbitrary";

export type TwDivideColor =
  | `divide-${Color}`
  | `divide-${Arbitrary}`