import { Color } from "../../color";
import { Arbitrary } from "../arbitrary";

export type TwTextDecorationColor =
  | `decoration-${Color}`
  | `decoration-${Arbitrary}`