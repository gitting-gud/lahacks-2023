import { Arbitrary } from "../arbitrary";

export type TwContent =
  | 'content-none'
  | `content-${Arbitrary}`