export * from "./cl"

declare const TS_TYPE_ERROR: unique symbol
type TS_TYPE_ERROR<Message extends string> = { [TS_TYPE_ERROR]: Message }

type ValidateAStar<S extends string> =
  S extends '' ? true
  : S extends `a${infer T}` ? ValidateAStar<T>
  : false

type AStarConstraint<S> =
	[S] extends [string]
		? ValidateAStar<S> extends true
      ? string
      : TS_TYPE_ERROR<'S does not satisfy AStar!'>
    : TS_TYPE_ERROR<'S must be a string!'>
			 

type T<S extends AStarConstraint<S>> = S