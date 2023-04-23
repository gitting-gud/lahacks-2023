import { Arbitrary } from "../arbitrary";
import { LineHeightScale } from "./line-height";

export type TwFontSize =
  | `text-${FontSizeScale}`
  | `text-${Arbitrary}`
  | `text-${FontSizeScale}/${LineHeightScale}`
  | `text-${FontSizeScale}/${Arbitrary}`
  
type FontSizeScale =
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl'