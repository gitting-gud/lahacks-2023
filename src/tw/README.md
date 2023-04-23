A folder containing the type definitions for the Tailwind syntax, as manually extracted from their docs.

TypeScript does not support defining infinite recursive string types; as such this folder instead focuses on 2 exports: `ValidateTwClass`, which can be used to create a tailwind class custom type constraint, and `TwClassValidator`, which follows the higher-kinded type interface as defined in my publicly available package `@nomicon/types`.

Tailwind strings are organized into "atoms" (classes which can stand alone), and "variants", where any number of variants may appear before ending with an These strings are then categorized fairly closely following how they are ordered in the official Tailwind docs, to make it easier to track.