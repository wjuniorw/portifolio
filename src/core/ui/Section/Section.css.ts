import { style, styleVariants } from '@vanilla-extract/css'

import { vars } from '@core/ds/tokens.css'

export const section = style({
  paddingTop: vars.spacing['2xl'],
  paddingBottom: vars.spacing['2xl'],

  '@media': {
    'screen and (min-width: 768px)': {
      paddingTop: vars.spacing['3xl'],
      paddingBottom: vars.spacing['3xl'],
    },
  },
})

export const backgroundVariants = styleVariants({
  canvas: {
    backgroundColor: vars.colors.canvas,
  },
  surface: {
    backgroundColor: vars.colors.surface,
  },
  none: {
    backgroundColor: 'transparent',
  },
})
