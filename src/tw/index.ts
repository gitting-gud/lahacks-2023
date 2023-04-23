import { TwAtom } from "./atom"
import { TwVariant } from "./variant"

declare const TS_TYPE_ERROR: unique symbol
type TS_TYPE_ERROR<Message extends string> = { [TS_TYPE_ERROR]: Message }

type Whitespace = ' ' | '\n'

export type ValidateTwClass<S> =
  [S] extends [string]
    ? S extends '' ? string
    : S extends TwAtom ? string
    : S extends `${TwVariant}${infer S}` ? ValidateTwClass<S>
    : S extends `${TwAtom} ${infer S}` ? ValidateTwClass<S>
      : S extends `${Whitespace}${infer S}` ? ValidateTwClass<S>
      : TS_TYPE_ERROR<"not a valid tailwind class">
    : TS_TYPE_ERROR<"expected a string">
