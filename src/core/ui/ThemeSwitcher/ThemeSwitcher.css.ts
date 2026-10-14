import { style } from '@vanilla-extract/css'

import { vars } from '@core/ds/tokens.css'

export const themeSwitcherButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  borderRadius: vars.borderRadius.full,

  ':focus': {
    outline: 'none',
  },
  ':focus-visible': {
    outline: `2px solid ${vars.colors.primary}`,
    outlineOffset: '3px',
  },
})
