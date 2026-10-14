import { keyframes, style } from '@vanilla-extract/css'

import { vars } from '@core/ds/tokens.css'

const pulseGlow = keyframes({
  '0%': {
    transform: 'scale(0.9)',
    boxShadow: `0 0 0 0 ${vars.colors.primary500}`,
    opacity: '0.7',
  },
  '50%': {
    transform: 'scale(1.1)',
    boxShadow: `0 0 8px 2px ${vars.colors.primary500}`,
    opacity: '1',
  },
  '100%': {
    transform: 'scale(0.9)',
    boxShadow: `0 0 0 0 ${vars.colors.primary500}`,
    opacity: '0.7',
  },
})

export const header = style({
  position: 'sticky',
  top: 0,
  zIndex: 100,
  width: '100%',
  height: vars.sizes.header,
  display: 'flex',
  alignItems: 'center',
  backgroundColor: `color-mix(in srgb, ${vars.colors.canvas} 85%, transparent)`,
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  borderBottom: `1px solid ${vars.colors.stroke}`,
  transition: 'background-color 0.25s ease, border-color 0.25s ease',
})

export const headerInner = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.spacing.md,
  width: '100%',
})

export const brandLink = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
  textDecoration: 'none',
  color: vars.colors.content,
  borderRadius: vars.borderRadius.md,
  transition: 'opacity 0.2s ease',

  ':hover': {
    opacity: 0.85,
  },
  ':focus-visible': {
    outline: `2px solid ${vars.colors.primary500}`,
    outlineOffset: vars.spacing.xs,
  },
})

export const statusDot = style({
  width: vars.spacing.sm,
  height: vars.spacing.sm,
  borderRadius: vars.borderRadius.full,
  backgroundColor: vars.colors.primary500,
  animation: `${pulseGlow} 2.5s infinite ease-in-out`,
  flexShrink: 0,
})

export const brandTitle = style({
  fontFamily: vars.typography.fontDisplay,
  fontSize: vars.typography.fontSize.base,
  fontWeight: '700',
  letterSpacing: '-0.02em',
  color: vars.colors.content,
})

export const rootBadge = style({
  fontFamily: vars.typography.fontMono,
  fontSize: vars.typography.fontSize.xs,
  fontWeight: '600',
  color: vars.colors.primary500,
  backgroundColor: vars.colors.primaryTint,
  paddingInline: vars.spacing.sm,
  paddingBlock: vars.spacing.xs,
  borderRadius: vars.borderRadius.sm,
  border: `1px solid ${vars.colors.primary500}`,
  letterSpacing: '0.04em',

  '@media': {
    '(max-width: 640px)': {
      display: 'none',
    },
  },
})

export const navGroup = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.md,
  overflowX: 'auto',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
})

export const lensesList = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.xs,
  listStyle: 'none',
  margin: 0,
  padding: 0,
  whiteSpace: 'nowrap',
})
