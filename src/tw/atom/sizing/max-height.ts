import { DefaultSpacing } from "../../spacing"
import { Arbitrary } from "../arbitrary"

export type TwMaxHeight =
  | `max-h-${DefaultSpacing | 'none' | 'full' | 'screen' | MaxHeightContent | Arbitrary}`

type MaxHeightContent =
  | 'min'
  | 'max'
  | 'fit'