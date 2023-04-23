import { ProportionFifths, ProportionHalves, ProportionQuarters, ProportionFull, ProportionSixths, ProportionThirds, ProportionTwelfths, ProportionAuto } from "../../proportion";
import { DefaultSpacing } from "../../spacing";
import { Arbitrary } from "../arbitrary";

export type TwHeight =
  | `h-${DefaultSpacing | HeightProportion | 'screen' | HeightContent | Arbitrary}`

type HeightProportion =
  | ProportionAuto
  | ProportionHalves
  | ProportionThirds
  | ProportionQuarters
  | ProportionFifths
  | ProportionSixths
  | ProportionFull

type HeightContent =
  | 'min'
  | 'max'
  | 'fit'