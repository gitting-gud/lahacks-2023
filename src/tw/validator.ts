import { Satisfies } from "@nomicon/types/type"
import { HKT, I, _ } from "@nomicon/types/hkt";
import { TwAtom } from "./atom";
import { TwVariant } from "./variant";

type Whitespace = ' ' | '\n'

type Validate<S extends string, SeenAtom = false> =
  S extends '' ? SeenAtom
  : S extends TwAtom ? true
  : S extends `${TwVariant}${infer S}` ? Validate<S, false>
  : S extends `${TwAtom}${Whitespace}${infer S}` ? Validate<S, true>
  : S extends `${Whitespace}${infer S}` ? Validate<S, SeenAtom>
  : false

export interface TwClassValidator extends HKT {
  [HKT.i]: Satisfies<_<this>, string>
  [HKT.o]: I<this> extends string ? Validate<I<this>> : false
   
}