import { style } from '@vanilla-extract/css'

import { vars } from '@core/ds/tokens.css'

export const section = style({
  borderBottom: `1px solid ${vars.colors.stroke}`,
})

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['2xl'],
})

export const headerBlock = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md,
  maxWidth: '68ch',
})

export const sectionBadge = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
  fontFamily: vars.typography.fontMono,
  fontSize: vars.typography.fontSize.xs,
  color: vars.colors.primary500,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  fontWeight: '700',
})

export const sectionTitle = style({
  fontFamily: vars.typography.fontDisplay,
  letterSpacing: '-0.02em',
  color: vars.colors.content,
})

export const sectionLead = style({
  lineHeight: '1.6',
  color: vars.colors.contentMuted,
})

export const craftGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: vars.spacing.xl,

  '@media': {
    '(max-width: 860px)': {
      gridTemplateColumns: '1fr',
      gap: vars.spacing.lg,
    },
  },
})

export const craftCard = style({
  backgroundColor: vars.colors.surface,
  border: `1px solid ${vars.colors.stroke}`,
  borderRadius: vars.borderRadius.xl,
  padding: vars.spacing.xl,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: vars.spacing.lg,
  transition: 'transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',

  ':hover': {
    borderColor: vars.colors.primary500,
    transform: 'translateY(-3px)',
    boxShadow: vars.shadows.glow,
  },
})

export const cardHeader = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xs,
})

export const cardSubhead = style({
  fontFamily: vars.typography.fontMono,
  fontSize: vars.typography.fontSize.xs,
  color: vars.colors.primary500,
  fontWeight: '700',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
})

export const cardTitle = style({
  fontFamily: vars.typography.fontDisplay,
  fontSize: vars.typography.fontSize.xl,
  fontWeight: '700',
  color: vars.colors.content,
  margin: 0,
})

export const cardDescription = style({
  fontSize: vars.typography.fontSize.sm,
  lineHeight: '1.65',
  color: vars.colors.contentMuted,
  margin: 0,
})

export const tagsWrapper = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: vars.spacing.xs,
  paddingTop: vars.spacing.md,
  borderTop: `1px solid ${vars.colors.stroke}`,
})

export const craftTag = style({
  fontFamily: vars.typography.fontMono,
  fontSize: vars.typography.fontSize.xs,
  color: vars.colors.content,
  backgroundColor: vars.colors.surfaceAlt,
  border: `1px solid ${vars.colors.stroke}`,
  borderRadius: vars.borderRadius.sm,
  paddingInline: vars.spacing.sm,
  paddingBlock: vars.spacing.xs,
})
