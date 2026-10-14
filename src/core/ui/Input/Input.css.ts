import { style } from '@vanilla-extract/css'

import { vars } from '@core/ds/tokens.css'

export const inputStyle = style({
  fontFamily: vars.typography.fontFamily,
  fontSize: vars.typography.fontSize.base,
  color: vars.colors.text,
  backgroundColor: vars.colors.background,
  padding: `10px ${vars.spacing.md}`,
  borderRadius: vars.borderRadius.lg,
  border: `1px solid ${vars.colors.hoverTint}`, // Use tint instead of stark text color for borders
  outline: 'none',
  transition: 'all 0.2s ease',
  boxShadow: vars.shadows.sm, // Inner subtle shadow effect usually good for inputs, or drop shadow

  ':focus': {
    borderColor: vars.colors.primary,
    boxShadow: `0 0 0 1px ${vars.colors.primary}`, // focus ring
  },
})
