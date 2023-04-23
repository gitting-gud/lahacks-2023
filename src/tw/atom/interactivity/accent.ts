import { Color } from "../../color";
import { Arbitrary } from "../arbitrary";

export type TwAccent =
  | 'accent-auto'
  | `accent-${Color}`
  | `accent-${Arbitrary}`