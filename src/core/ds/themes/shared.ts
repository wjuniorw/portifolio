export const palette = {
  terracotta: {
    50: '#fdf6f2',
    100: '#fae8de',
    400: '#e59265',
    500: '#d97742',
    600: '#b85423',
    700: '#944019',
  },
  obsidian: {
    50: '#faf7f2',
    100: '#f2ece4',
    200: '#e4dcd1',
    300: '#cabeb0',
    400: '#a69c91',
    500: '#6e655c',
    700: '#2e2924',
    800: '#1f1c18',
    900: '#141210',
    950: '#0b0a09',
  },
  telemetry: {
    400: '#34d399',
    500: '#10b981',
  },
  gold: {
    400: '#fbbf24',
    500: '#eab308',
  },
} as const

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '96px',
} as const

export const typography = {
  fontFamily: "'Plus Jakarta Sans', Inter, sans-serif",
  fontDisplay: "'Syne', 'Plus Jakarta Sans', sans-serif",
  fontMono: "'JetBrains Mono', monospace",
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '32px',
    '4xl': '48px',
    '5xl': '64px',
    '6xl': '72px',
    hero: 'clamp(2.5rem, 4.5vw, 4.2rem)',
  },
} as const

export const borderRadius = {
  none: '0',
  sm: '4px',
  md: '6px',
  lg: '8px',
  xl: '12px',
  '2xl': '16px',
  full: '9999px',
} as const

export const sizes = {
  container: '1240px',
  header: '80px',
} as const
