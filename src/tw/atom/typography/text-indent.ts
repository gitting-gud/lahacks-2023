import { DefaultSpacing } from "../../spacing";
import { Arbitrary } from "../arbitrary";

export type TwTextIndent =
  | `indent-${DefaultSpacing}`
  | `indent-${Arbitrary}`