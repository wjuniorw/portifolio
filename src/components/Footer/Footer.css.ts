import { style } from '@vanilla-extract/css'

import { vars } from '@core/ds/tokens.css'

export const footerSection = style({
  borderTop: `1px solid ${vars.colors.stroke}`,
  backgroundColor: vars.colors.surface,
  paddingTop: vars.spacing['2xl'],
  paddingBottom: vars.spacing['2xl'],

  '@media': {
    'screen and (min-width: 768px)': {
      paddingTop: vars.spacing['3xl'],
      paddingBottom: vars.spacing['3xl'],
    },
  },
})

export const ctaBox = style({
  display: 'flex',
  textAlign: 'center',
  padding: vars.spacing.xl,
  marginBottom: vars.spacing['2xl'],
  alignItems: 'center',
  flexDirection: 'column',
  gap: vars.spacing.md,
  borderRadius: vars.borderRadius['2xl'],
  backgroundColor: vars.colors.primaryTint,
  border: `1px solid ${vars.colors.primary500}`,

  '@media': {
    'screen and (min-width: 768px)': {
      padding: vars.spacing['2xl'],
      marginBottom: vars.spacing['3xl'],
    },
  },
})

export const ctaTitle = style({
  fontFamily: vars.typography.fontDisplay,
  letterSpacing: '-0.02em',
  color: vars.colors.content,
})

export const ctaText = style({
  maxWidth: '54ch',
  lineHeight: '1.6',
  color: vars.colors.contentMuted,
})

export const ctaActions = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: vars.spacing.md,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: vars.spacing.sm,
})

export const footerLayout = style({
  display: 'flex',
  gap: vars.spacing.lg,
  alignItems: 'center',
  flexDirection: 'column-reverse',
  justifyContent: 'space-between',
  paddingTop: vars.spacing.lg,
  borderTop: `1px solid ${vars.colors.stroke}`,

  '@media': {
    'screen and (min-width: 768px)': {
      flexDirection: 'row',
    },
  },
})

export const copyrightText = style({
  fontSize: vars.typography.fontSize.xs,
  fontFamily: vars.typography.fontMono,
  color: vars.colors.contentMuted,
})

export const linkGroup = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: vars.spacing.md,
  justifyContent: 'center',
})

export const footerLink = style({
  textDecoration: 'none',
  color: vars.colors.contentMuted,
  fontSize: vars.typography.fontSize.sm,
  fontFamily: vars.typography.fontMono,
  transition: 'color 0.2s ease',

  ':hover': {
    color: vars.colors.primary500,
  },
  ':focus-visible': {
    color: vars.colors.primary500,
    outline: `2px solid ${vars.colors.primary500}`,
    outlineOffset: '2px',
    borderRadius: vars.borderRadius.sm,
  },
})
