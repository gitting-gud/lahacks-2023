import { ProportionHalves, ProportionQuarters, ProportionFull, ProportionThirds, ProportionAuto } from "../../proportion"
import { DefaultSpacing } from "../../spacing"

export type TwInset =
  | `${InsetPosition}-${DefaultSpacing | InsetProportion}`
  
type InsetPosition =
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'inset'
  | 'inset-x'
  | 'inset-y'
  | 'start'
  | 'end'

type InsetProportion =
  | ProportionAuto
  | ProportionHalves
  | ProportionThirds
  | ProportionQuarters
  | ProportionFull
