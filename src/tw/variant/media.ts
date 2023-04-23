import { Arbitrary } from "../atom/arbitrary"

export type TwMediaVariant =
  | ResponsiveMediaVariant
  // we skip this - it _could_ be the case, but also could be to class name,
  // so we let the theme variant handle it instead
  // | ColorSchemeMediaVariant
  | OrientationMediaVariant
  | ReducedMotionMediaVariant
  | ContrastMediaVariant
  | PrintMediaVariant
  | SupportsMediaVariant

type ResponsiveMediaVariant =
  | DeviceSize
  | `min-${Arbitrary}:`
  | `max-${DeviceSize}`
  | `max-${Arbitrary}:`

type DeviceSize =
  | 'sm:'
  | 'md:'
  | 'lg:'
  | 'xl:'
  | '2xl:'

type OrientationMediaVariant =
  | 'portrait:'
  | 'landscape:'

type ReducedMotionMediaVariant =
  | 'motion-safe:'
  | 'motion-reduce:'

type ContrastMediaVariant =
  | 'contrast-more:'
  | 'contrast-less:'

type PrintMediaVariant =
  | 'print:'

type SupportsMediaVariant =
  | `supports-${Arbitrary}:`