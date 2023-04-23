import { ProportionFifths, ProportionHalves, ProportionQuarters, ProportionFull, ProportionSixths, ProportionThirds, ProportionTwelfths, ProportionAuto } from "../../proportion";
import { DefaultSpacing } from "../../spacing";
import { Arbitrary } from "../arbitrary";

export type TwFlexBasis =
  | `basis-${DefaultSpacing | FlexBasisProportion | Arbitrary}`
  
type FlexBasisProportion =
  | ProportionAuto
  | ProportionHalves
  | ProportionThirds
  | ProportionQuarters
  | ProportionFifths
  | ProportionSixths
  | ProportionTwelfths
  | ProportionFull
  