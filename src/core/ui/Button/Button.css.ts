import { style, styleVariants } from '@vanilla-extract/css'

import { vars } from '@core/ds/tokens.css'

export const baseButton = style({
  fontFamily: vars.typography.fontFamily,
  fontSize: vars.typography.fontSize.base,
  padding: `${vars.spacing.sm} ${vars.spacing.lg}`,
  borderRadius: vars.borderRadius.lg,
  fontWeight: '500',
  border: '1px solid transparent',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.spacing.sm,
  
  ':focus': {
    outline: 'none',
  },
  ':focus-visible': {
    outline: `2px solid ${vars.colors.primary}`,
    outlineOffset: '2px',
  },
})

export const buttonVariants = styleVariants({
  primary: {
    backgroundColor: vars.colors.primary,
    color: vars.colors.primaryContrast,
    ':hover': {
      opacity: 0.9,
      boxShadow: vars.shadows.glow,
      transform: 'translateY(-1px)',
    },
    ':active': {
      opacity: 0.8,
      transform: 'translateY(1px)',
    },
  },
  secondary: {
    backgroundColor: vars.colors.surfaceAlt,
    color: vars.colors.content,
    borderColor: vars.colors.stroke,
    ':hover': {
      backgroundColor: vars.colors.surface,
      borderColor: vars.colors.primary,
      transform: 'translateY(-1px)',
    },
    ':active': {
      transform: 'translateY(1px)',
    },
  },
  outline: {
    backgroundColor: 'transparent',
    color: vars.colors.content,
    borderColor: vars.colors.stroke,
    ':hover': {
      backgroundColor: vars.colors.hoverTint,
      borderColor: vars.colors.primary,
      color: vars.colors.primary,
      transform: 'translateY(-1px)',
    },
    ':active': {
      backgroundColor: vars.colors.activeTint,
      transform: 'translateY(1px)',
    },
  },
  ghost: {
    backgroundColor: 'transparent',
    color: vars.colors.content,
    borderColor: 'transparent',
    ':hover': {
      backgroundColor: vars.colors.hoverTint,
      transform: 'translateY(-1px)',
    },
    ':active': {
      backgroundColor: vars.colors.activeTint,
      transform: 'translateY(1px)',
    },
  },
})

export const sizeVariants = styleVariants({
  sm: {
    padding: `${vars.spacing.xs} ${vars.spacing.sm}`,
    fontSize: vars.typography.fontSize.sm,
  },
  md: {
    padding: `${vars.spacing.sm} ${vars.spacing.lg}`,
    fontSize: vars.typography.fontSize.base,
  },
  lg: {
    padding: `${vars.spacing.md} ${vars.spacing.xl}`,
    fontSize: vars.typography.fontSize.lg,
  },
})
