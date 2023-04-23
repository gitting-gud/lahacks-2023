import { ProportionFull, ProportionHalves, ProportionQuarters, ProportionThirds } from "../../proportion"
import { DefaultSpacing } from "../../spacing"
import { Arbitrary } from "../arbitrary"

export type TwTranslate =
  | `translate-${Axis}-${Amount}`
  | `translate-${Axis}-${Arbitrary}`

type Axis =
  | 'x'
  | 'y'

type Amount =
  | DefaultSpacing
  | ProportionHalves
  | ProportionThirds
  | ProportionQuarters
  | ProportionFull