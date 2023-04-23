import { Color } from "../../color";
import { Arbitrary } from "../arbitrary";

export type TwRingOffsetColor =
  | `ring-offset-${Color}`
  // doesn't this overlap with ring width? idk man
  | `ring-offset-${Arbitrary}`