import { TwAttributeVariant } from "./attribute";
import { TwMediaVariant } from "./media";
import { TwPseudoclassVariant } from "./pseudoclass";
import { TwPseudoelementVariant } from "./pseudoelement";
import { TwThemeVariant } from "./theme";

export type TwVariant =
  | TwAttributeVariant
  | TwMediaVariant
  | TwPseudoclassVariant
  | TwPseudoelementVariant
  | TwThemeVariant