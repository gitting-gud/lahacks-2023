/*
 * basic string combiner. mostly useful in the context of building html class list strings
 */
import type { $, HKT, I, List, _ } from "@nomicon/types/hkt"
import type { NoInfer, Satisfies } from "@nomicon/types/type"

type FalsyArg =
  | false
  | undefined
type BaseArg<Cn extends string> =
  | Cn
  | FalsyArg
type Arg<Cn extends string = string> =
  | BaseArg<Cn>
  | readonly Arg<Cn>[]

type MergedArgs<L extends readonly Arg[], Acc extends string = ''> =
  L extends readonly [infer H extends Arg, ...infer T extends readonly Arg[]]
    ? H extends FalsyArg ? MergedArgs<T, Acc>
    : H extends readonly Arg[] ? MergedArgs<[...H, ...T], Acc>
    : MergedArgs<T, Acc extends "" ? Satisfies<H, string> : `${Acc} ${Satisfies<H, string>}`>
  : Acc

interface FilterFalsy extends HKT {
  [HKT.i]: _<this>
  [HKT.o]: I<this> extends FalsyArg ? false : true
}
  

/**
 * converts a single class argument into a string
 */
function ser<Cn extends string>(a: Arg<Cn>): string {
  if (typeof a === 'string') { return a }
  if (Array.isArray(a)) { return cl(...a) }
  return ''
}

function cl<
  Cn extends string = string,
  const T extends readonly Arg<Cn>[] = readonly Arg<NoInfer<Cn>>[],
>(...args: T): MergedArgs<T> {
  let s: string, l: unknown[] = []
  for (const a of args) {
    s = ser(a)
    if (s) { l.push(s) }
  }
  return l.join(' ') as MergedArgs<T>
}

export function create<Schema extends string>(): <const T extends readonly Arg<Schema>[] = readonly Arg<NoInfer<Schema>>[]>(...args: T) => MergedArgs<T>;
/// unfortunately as part of the check to error if the args are not all valid,
/// constness of parameters appears to be lost with array parameters.
/// so we'll just disallow them for now - they should be a fairly rare use case either way.
export function create<Validator extends HKT<any, boolean>>(): <const T extends readonly BaseArg<string>[]>(...args: $<List.All<Validator>, $<List.Filter<FilterFalsy>, T>> extends true ? T: never) => MergedArgs<T>;
export function create<_>() {
  return function<const T extends readonly any[]>(...args: T): MergedArgs<T> {
    return cl(...args)
  }
}