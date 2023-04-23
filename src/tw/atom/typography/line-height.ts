import { Arbitrary } from "../arbitrary"

export type TwLineHeight =
  | `leading-${LineHeightScale}`
  | `leading-${Arbitrary}`

export type LineHeightScale =
  | LineHeightSize
  | LineHeightRelative

type LineHeightSize =
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'

type LineHeightRelative =
  | 'none'
  | 'tight'
  | 'snug'
  | 'normal'
  | 'relaxed'
  | 'loose'
  