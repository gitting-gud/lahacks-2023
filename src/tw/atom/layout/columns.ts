import { Arbitrary } from "../arbitrary"

export type TwColumns = `columns-${ColumnNumber | ColumnAuto | ColumnSize | Arbitrary}`

type ColumnAuto = 'auto'

type ColumnNumber =
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

type ColumnSize = 
  | '3xs' 
  | '2xs' 
  | 'xs' 
  | 'sm' 
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
