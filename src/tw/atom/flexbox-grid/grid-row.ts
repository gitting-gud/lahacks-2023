import { Arbitrary } from "../arbitrary"

export type TwGridRow =
  | `row-${'auto' | Arbitrary}`
  | `row-span-${NRows | 'full' | Arbitrary}`
  | `row-start-${NColumnsPlusOne | 'auto' | Arbitrary}`
  | `row-end-${NColumnsPlusOne | 'auto' | Arbitrary}`
  
type NRows =
| '1'
| '2'
| '3'
| '4'
| '5'
| '6'

type NColumnsPlusOne =
  | NRows
  | '7'