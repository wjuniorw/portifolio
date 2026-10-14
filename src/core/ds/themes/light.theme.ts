import { borderRadius, palette, sizes, spacing, typography } from './shared'

export const lightColors = {
  primary: palette.terracotta[600],
  primary500: palette.terracotta[600],
  primaryTint: 'rgba(184, 84, 35, 0.1)',
  secondary: palette.gold[500],
  primaryContrast: '#ffffff',
  background: palette.obsidian[50],
  canvas: palette.obsidian[50],
  surface: palette.obsidian[100],
  surfaceAlt: palette.obsidian[200],
  text: palette.obsidian[900],
  content: palette.obsidian[900],
  contentMuted: palette.obsidian[500],
  stroke: palette.obsidian[300],
  success: palette.telemetry[500],
  info: '#3b82f6',
  warning: '#f59e0b',
  danger: '#f97316',
  error: '#ef4444',
  hoverTint: 'rgba(20, 18, 16, 0.04)',
  activeTint: 'rgba(20, 18, 16, 0.08)',
} as const

export const lightShadows = {
  sm: '0 1px 2px 0 rgba(20, 18, 16, 0.06)',
  md: '0 4px 6px -1px rgba(20, 18, 16, 0.08), 0 2px 4px -2px rgba(20, 18, 16, 0.06)',
  lg: '0 12px 24px -4px rgba(20, 18, 16, 0.1), 0 4px 6px -4px rgba(20, 18, 16, 0.06)',
  glow: '0 4px 16px -3px rgba(184, 84, 35, 0.25)',
} as const

export const lightTheme = {
  colors: lightColors,
  shadows: lightShadows,
  spacing,
  sizes,
  typography,
  borderRadius,
} as const
