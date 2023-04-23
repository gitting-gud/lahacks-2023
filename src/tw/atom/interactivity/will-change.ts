import { Arbitrary } from "../arbitrary";

export type TwWillChange =
  | 'will-change-auto'
  | 'will-change-scroll'
  | 'will-change-contents'
  | 'will-change-transform'
  | `will-change-${Arbitrary}`