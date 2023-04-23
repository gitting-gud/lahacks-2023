import { Arbitrary } from "../arbitrary"

export type TwGridColumn =
  | `col-${'auto' | Arbitrary}`
  | `col-span-${NColumns | 'full'}`
  | `col-start-${NColumnsPlusOne | 'auto' | Arbitrary}`
  | `col-end-${NColumnsPlusOne | 'auto' | Arbitrary}`
  
type NColumns =
| '1'
| '2'
| '3'
| '4'
| '5'
| '6'
| '7'
| '8'
| '9'
| '10'
| '11'
| '12'

type NColumnsPlusOne =
  | NColumns
  | '13'