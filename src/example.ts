import { create } from "./cl"
import type { TwClassValidator } from "./tw/validator"

// create a `cl` function that only accepts the strings `a`, `b`, `c`, `dd`, `e`
const cl_from_string = create<'a' | 'b' | 'c' | 'dd' | 'e'>()

// no errors! also note the type of the result: "a b c e"
let e1 = cl_from_string('a', 'b', 'c', 'e')

// type error - "d" is not a member of the set of valid strings
// @ts-expect-error
let e2 = cl_from_string('a', 'b', 'c', 'd')

// create a `cl` function that has to match a tailwind class validator
const cl_from_validator = create<TwClassValidator>()

let e3 = cl_from_validator(
  'rounded',
  'border-2',
  'dark:hover:bg-fuschia-500',
  'text-[#800ddd]',
  true && 'after:content-none',
  'dark:sm:max-xl:hover:focus:active:motion-safe:animate-bounce',
)