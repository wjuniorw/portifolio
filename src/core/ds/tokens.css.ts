import { createGlobalTheme, createThemeContract, globalStyle } from '@vanilla-extract/css'

import { darkTheme, lightTheme } from './theme'

export const vars = createThemeContract({
  colors: {
    primary: '',
    primary500: '',
    primaryTint: '',
    secondary: '',
    primaryContrast: '',
    background: '',
    canvas: '',
    surface: '',
    surfaceAlt: '',
    text: '',
    content: '',
    contentMuted: '',
    stroke: '',
    success: '',
    info: '',
    warning: '',
    danger: '',
    error: '',
    hoverTint: '',
    activeTint: '',
  },
  spacing: {
    xs: '',
    sm: '',
    md: '',
    lg: '',
    xl: '',
    '2xl': '',
    '3xl': '',
  },
  sizes: {
    container: '',
    header: '',
  },
  typography: {
    fontFamily: '',
    fontDisplay: '',
    fontMono: '',
    fontSize: {
      xs: '',
      sm: '',
      base: '',
      lg: '',
      xl: '',
      '2xl': '',
      '3xl': '',
      '4xl': '',
      '5xl': '',
      '6xl': '',
      hero: '',
    },
  },
  borderRadius: {
    none: '',
    sm: '',
    md: '',
    lg: '',
    xl: '',
    '2xl': '',
    full: '',
  },
  shadows: {
    sm: '',
    md: '',
    lg: '',
    glow: '',
  },
})

createGlobalTheme(':root, [data-theme="dark"]', vars, darkTheme)

createGlobalTheme('[data-theme="light"]', vars, lightTheme)

globalStyle('body', {
  backgroundColor: vars.colors.canvas,
  color: vars.colors.content,
  fontFamily: vars.typography.fontFamily,
  margin: 0,
  overflowX: 'hidden',
  transition: 'background-color 0.25s ease, color 0.25s ease',
})
