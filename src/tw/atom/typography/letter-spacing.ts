export type TwLetterSpacing =
  | `tracking-${LetterSpacingSize}`

type LetterSpacingSize =
  | 'tighter'
  | 'tight'
  | 'normal'
  | 'wide'
  | 'wider'
  | 'widest'