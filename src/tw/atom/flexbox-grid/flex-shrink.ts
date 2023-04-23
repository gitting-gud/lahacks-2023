import { Arbitrary } from "../arbitrary";

export type TwFlexShrink =
| 'shrink'
| 'shrink-0'
| `shrink-${Arbitrary}`