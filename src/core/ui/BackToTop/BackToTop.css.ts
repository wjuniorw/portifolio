import { style } from '@vanilla-extract/css'

import { vars } from '@core/ds/tokens.css'

export const wrapper = style({
  position: 'fixed',
  bottom: vars.spacing.xl,
  right: vars.spacing.xl,
  zIndex: 50,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '@media': {
    '(max-width: 860px)': {
      bottom: vars.spacing.lg,
      right: vars.spacing.lg,
    },
  },
})

export const bowButton = style({
  width: vars.spacing['2xl'],
  height: vars.spacing['2xl'],
  borderRadius: vars.borderRadius.full,
  backgroundColor: vars.colors.surfaceAlt,
  color: vars.colors.primary500,
  border: `1px solid ${vars.colors.primary500}`,
  boxShadow: vars.shadows.lg,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  transition: 'background-color 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
  ':hover': {
    backgroundColor: vars.colors.primaryTint,
    boxShadow: vars.shadows.glow,
  },
  ':focus-visible': {
    outline: `2px solid ${vars.colors.primary500}`,
    outlineOffset: '2px',
  },
})

export const flyingArrow = style({
  position: 'fixed',
  bottom: vars.spacing.xl,
  right: vars.spacing.xl,
  width: vars.spacing['2xl'],
  height: vars.spacing['2xl'],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.colors.primary500,
  pointerEvents: 'none',
  zIndex: 60,
  filter: `drop-shadow(0 0 12px ${vars.colors.primary500})`,
})
