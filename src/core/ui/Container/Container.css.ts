import { style } from '@vanilla-extract/css'

import { vars } from '@core/ds/tokens.css'

export const container = style({
  width: '100%',
  maxWidth: vars.sizes.container,
  marginInline: 'auto',
  boxSizing: 'border-box',
  paddingInline: vars.spacing.lg,
  
  '@media': {
    'screen and (min-width: 768px)': {
      paddingInline: vars.spacing.xl,
    },
    'screen and (min-width: 1024px)': {
      paddingInline: vars.spacing['2xl'],
    },
  },
})
