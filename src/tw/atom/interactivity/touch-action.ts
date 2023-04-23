export type TwTouchAction =
  | `touch-${Action}`

type Action =
  | 'auto'
  | 'none'
  | 'pan-x'
  | 'pan-y'
  | 'pan-left'
  | 'pan-right'
  | 'pan-up'
  | 'pan-down'
  | 'touch-pinch-zoom'
  | 'touch-manipulation'