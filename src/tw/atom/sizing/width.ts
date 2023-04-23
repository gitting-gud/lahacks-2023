import { ProportionFifths, ProportionHalves, ProportionQuarters, ProportionFull, ProportionSixths, ProportionThirds, ProportionTwelfths, ProportionAuto } from "../../proportion";
import { DefaultSpacing } from "../../spacing";
import { Arbitrary } from "../arbitrary";

export type TwWidth =
  | `w-${DefaultSpacing | WidthProportion | 'screen' | WidthContent | Arbitrary}`

type WidthProportion =
  | ProportionAuto
  | ProportionHalves
  | ProportionThirds
  | ProportionQuarters
  | ProportionFifths
  | ProportionSixths
  | ProportionTwelfths
  | ProportionFull

type WidthContent =
  | 'min'
  | 'max'
  | 'fit'