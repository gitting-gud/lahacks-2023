import { Arbitrary } from "../atom/arbitrary"

export type TwAttributeVariant =
  | AriaAttributeVariant
  | DataAttributeVariant
  | DirAttributeVariant
  | OpenAttributeVariant

type AriaAttributeVariant =
  | 'aria-checked:'
  | 'aria-disabled:'
  | 'aria-expanded:'
  | 'aria-hidden:'
  | 'aria-pressed:'
  | 'aria-readonly:'
  | 'aria-required:'
  | 'aria-selected:'
  | `aria-${Arbitrary}`

type DataAttributeVariant =
  | `data-${Arbitrary}:`

type DirAttributeVariant =
  | 'rtl:'
  | 'ltr:'

type OpenAttributeVariant =
  | 'open:'