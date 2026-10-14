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

export const filterRow = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: vars.spacing.sm,
  alignItems: 'center',
})

export const filterBtn = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.spacing.xs,
  fontFamily: vars.typography.fontMono,
  fontSize: vars.typography.fontSize.xs,
  paddingInline: vars.spacing.md,
  paddingBlock: vars.spacing.sm,
  borderRadius: vars.borderRadius.sm,
  border: `1px solid ${vars.colors.stroke}`,
  backgroundColor: vars.colors.surface,
  color: vars.colors.contentMuted,
  cursor: 'pointer',
  transition: 'all 0.2s ease',

  ':hover': {
    color: vars.colors.content,
    borderColor: vars.colors.primary500,
    backgroundColor: vars.colors.hoverTint,
  },
  ':focus-visible': {
    outline: `2px solid ${vars.colors.primary500}`,
    outlineOffset: '2px',
  },
})

export const filterBtnActive = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.spacing.xs,
  fontFamily: vars.typography.fontMono,
  fontSize: vars.typography.fontSize.xs,
  paddingInline: vars.spacing.md,
  paddingBlock: vars.spacing.sm,
  borderRadius: vars.borderRadius.sm,
  border: `1px solid ${vars.colors.primary500}`,
  backgroundColor: vars.colors.primaryTint,
  color: vars.colors.primary500,
  fontWeight: '700',
  cursor: 'pointer',
  transition: 'all 0.2s ease',

  ':focus-visible': {
    outline: `2px solid ${vars.colors.primary500}`,
    outlineOffset: '2px',
  },
})

export const casesGrid = style({
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

export const caseCard = style({
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

export const cardTop = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md,
})

export const cardContextRow = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: vars.spacing.xs,
})

export const cardRole = style({
  fontFamily: vars.typography.fontMono,
  fontSize: vars.typography.fontSize.xs,
  color: vars.colors.primary500,
  fontWeight: '600',
})

export const cardMetric = style({
  fontFamily: vars.typography.fontMono,
  fontSize: vars.typography.fontSize.xs,
  color: vars.colors.success,
  backgroundColor: vars.colors.surfaceAlt,
  paddingInline: vars.spacing.sm,
  paddingBlock: vars.spacing.xs,
  borderRadius: vars.borderRadius.sm,
  border: `1px solid ${vars.colors.stroke}`,
})

export const cardTitle = style({
  fontFamily: vars.typography.fontDisplay,
  fontSize: vars.typography.fontSize['2xl'],
  fontWeight: '700',
  letterSpacing: '-0.02em',
  color: vars.colors.content,
  margin: 0,
})

export const cardImpact = style({
  fontSize: vars.typography.fontSize.sm,
  lineHeight: '1.6',
  color: vars.colors.content,
  margin: 0,
})

export const cardDecisionsBox = style({
  backgroundColor: vars.colors.surfaceAlt,
  borderLeft: `2px solid ${vars.colors.primary500}`,
  padding: vars.spacing.md,
  borderRadius: vars.borderRadius.sm,
})

export const cardDecisionsTitle = style({
  fontFamily: vars.typography.fontMono,
  fontSize: vars.typography.fontSize.xs,
  fontWeight: '700',
  color: vars.colors.primary500,
  marginBottom: vars.spacing.xs,
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
})

export const cardDecisionsText = style({
  fontSize: vars.typography.fontSize.xs,
  color: vars.colors.contentMuted,
  lineHeight: '1.5',
  margin: 0,
})

export const cardFooter = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: vars.spacing.xs,
  paddingTop: vars.spacing.md,
  borderTop: `1px solid ${vars.colors.stroke}`,
})

export const techTag = style({
  fontFamily: vars.typography.fontMono,
  fontSize: vars.typography.fontSize.xs,
  color: vars.colors.contentMuted,
  backgroundColor: vars.colors.surfaceAlt,
  border: `1px solid ${vars.colors.stroke}`,
  borderRadius: vars.borderRadius.sm,
  paddingInline: vars.spacing.sm,
  paddingBlock: vars.spacing.xs,
})
