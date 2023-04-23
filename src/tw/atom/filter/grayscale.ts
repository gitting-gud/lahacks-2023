import { Arbitrary } from "../arbitrary";

// we know it's spelled "grey" but tw spells it incorrectly as "gray" so what can you do
export type TwGrayscale =
  | 'grayscale'
  | 'grayscale-0'
  | `grayscale-${Arbitrary}`