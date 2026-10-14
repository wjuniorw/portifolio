import { borderRadius, palette, sizes, spacing, typography } from './themes/shared'

export * from './themes/dark.theme'
export * from './themes/light.theme'
export * from './themes/shared'

export const designTokens = {
  palette,
  spacing,
  typography,
  borderRadius,
  sizes,
} as const
