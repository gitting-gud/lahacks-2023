import { Color } from "../../color";
import { Arbitrary } from "../arbitrary";

export type TwTextColor =
  | `text-${Color}`
  | `text-${Arbitrary}`