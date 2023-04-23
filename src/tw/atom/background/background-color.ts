import { Color } from "../../color";
import { Arbitrary } from "../arbitrary";

export type TwBackgroundColor =
  | `bg-${Color}`
  | `bg-${Arbitrary}`