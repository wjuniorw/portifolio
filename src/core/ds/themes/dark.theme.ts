import { borderRadius, palette, sizes, spacing, typography } from './shared'

export const darkColors = {
  primary: palette.terracotta[500],
  primary500: palette.terracotta[500],
  primaryTint: 'rgba(217, 119, 66, 0.14)',
  secondary: palette.gold[500],
  primaryContrast: palette.obsidian[950],
  background: palette.obsidian[950],
  canvas: palette.obsidian[950],
  surface: palette.obsidian[900],
  surfaceAlt: palette.obsidian[800],
  text: palette.obsidian[100],
  content: palette.obsidian[100],
  contentMuted: palette.obsidian[400],
  stroke: palette.obsidian[700],
  success: palette.telemetry[400],
  info: '#60a5fa',
  warning: palette.gold[400],
  danger: '#fb923c',
  error: '#f87171',
  hoverTint: 'rgba(242, 236, 228, 0.05)',
  activeTint: 'rgba(242, 236, 228, 0.1)',
} as const

export const darkShadows = {
  sm: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.6)',
  md: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.04), 0 4px 8px -1px rgba(0, 0, 0, 0.6)',
  lg: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.04), 0 16px 32px -4px rgba(0, 0, 0, 0.7)',
  glow: '0 0 24px -4px rgba(217, 119, 66, 0.35)',
} as const

export const darkTheme = {
  colors: darkColors,
  shadows: darkShadows,
  spacing,
  sizes,
  typography,
  borderRadius,
} as const
