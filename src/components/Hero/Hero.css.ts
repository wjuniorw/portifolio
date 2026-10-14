import { keyframes, style } from '@vanilla-extract/css'

import { vars } from '@core/ds/tokens.css'

const pulseDot = keyframes({
  '0%': { opacity: '0.6', transform: 'scale(0.95)' },
  '50%': { opacity: '1', transform: 'scale(1.2)' },
  '100%': { opacity: '0.6', transform: 'scale(0.95)' },
})

export const heroSection = style({
  position: 'relative',
  overflow: 'hidden',
  borderBottom: `1px solid ${vars.colors.stroke}`,
  paddingTop: vars.spacing['2xl'],
  paddingBottom: vars.spacing['2xl'],

  '@media': {
    'screen and (min-width: 768px)': {
      paddingTop: vars.spacing['3xl'],
      paddingBottom: vars.spacing['2xl'],
    },
  },
})

export const heroContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['2xl'],
})

export const heroGrid = style({
  display: 'grid',
  gridTemplateColumns: '1.05fr 0.95fr',
  gap: vars.spacing['2xl'],
  alignItems: 'center',

  '@media': {
    '(max-width: 860px)': {
      gridTemplateColumns: '1fr',
      gap: vars.spacing.xl,
    },
  },
})

export const manifestoCol = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.lg,
})

export const originBadge = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
  fontFamily: vars.typography.fontMono,
  fontSize: vars.typography.fontSize.xs,
  color: vars.colors.primary500,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  paddingInline: vars.spacing.sm,
  paddingBlock: vars.spacing.xs,
  backgroundColor: vars.colors.primaryTint,
  borderRadius: vars.borderRadius.sm,
  border: `1px solid ${vars.colors.primary500}`,
  width: 'fit-content',
})

export const heroTitle = style({
  fontFamily: vars.typography.fontDisplay,
  letterSpacing: '-0.03em',
  lineHeight: '1.08',
  color: vars.colors.content,
})

export const accentRoots = style({
  color: vars.colors.primary500,
  textDecoration: 'underline',
  textDecorationStyle: 'dashed',
  textUnderlineOffset: vars.spacing.xs,
})

export const heroLead = style({
  lineHeight: '1.65',
  maxWidth: '62ch',
  color: vars.colors.contentMuted,
})

export const strongText = style({
  color: vars.colors.content,
  fontWeight: '600',
})

export const pillarGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: vars.spacing.sm,

  '@media': {
    '(max-width: 860px)': {
      gridTemplateColumns: '1fr',
    },
  },
})

export const pillarCard = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xs,
  padding: vars.spacing.md,
  backgroundColor: vars.colors.surface,
  borderLeft: `3px solid ${vars.colors.primary500}`,
  borderRadius: vars.borderRadius.sm,
  borderTop: `1px solid ${vars.colors.stroke}`,
  borderRight: `1px solid ${vars.colors.stroke}`,
  borderBottom: `1px solid ${vars.colors.stroke}`,
  transition: 'transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',

  ':hover': {
    transform: 'translateY(-3px)',
    borderTopColor: vars.colors.primary500,
    borderRightColor: vars.colors.primary500,
    borderBottomColor: vars.colors.primary500,
    boxShadow: vars.shadows.glow,
  },
})

export const pillarTitle = style({
  fontFamily: vars.typography.fontMono,
  fontSize: vars.typography.fontSize.xs,
  fontWeight: '700',
  color: vars.colors.content,
})

export const pillarDesc = style({
  fontSize: vars.typography.fontSize.xs,
  color: vars.colors.contentMuted,
  lineHeight: '1.4',
})

export const ctaRow = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: vars.spacing.md,
  alignItems: 'center',
})

export const inspectorCol = style({
  width: '100%',
})

export const inspectorWindow = style({
  backgroundColor: vars.colors.surface,
  border: `1px solid ${vars.colors.stroke}`,
  borderRadius: vars.borderRadius.xl,
  overflow: 'hidden',
  boxShadow: vars.shadows.md,
  transition: 'border-color 0.2s ease',
})

export const inspectorHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingInline: vars.spacing.md,
  paddingBlock: vars.spacing.sm,
  borderBottom: `1px solid ${vars.colors.stroke}`,
  backgroundColor: vars.colors.surfaceAlt,
  flexWrap: 'wrap',
  gap: vars.spacing.sm,
})

export const inspectorTitle = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
  fontFamily: vars.typography.fontMono,
  fontSize: vars.typography.fontSize.xs,
  fontWeight: '600',
  color: vars.colors.content,
})

export const inspectorStatusDot = style({
  width: vars.spacing.xs,
  height: vars.spacing.xs,
  borderRadius: vars.borderRadius.full,
  backgroundColor: vars.colors.success,
  animation: `${pulseDot} 2s infinite ease-in-out`,
})

export const tabList = style({
  display: 'flex',
  gap: vars.spacing.xs,
})

export const tabActive = style({
  backgroundColor: vars.colors.primaryTint,
  color: vars.colors.primary500,
  border: `1px solid ${vars.colors.primary500}`,
  borderRadius: vars.borderRadius.sm,
  paddingInline: vars.spacing.sm,
  paddingBlock: vars.spacing.xs,
  fontFamily: vars.typography.fontMono,
  fontSize: vars.typography.fontSize.xs,
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 0.15s ease',

  ':focus-visible': {
    outline: `2px solid ${vars.colors.primary500}`,
    outlineOffset: '2px',
  },
})

export const tabInactive = style({
  backgroundColor: 'transparent',
  color: vars.colors.contentMuted,
  border: '1px solid transparent',
  borderRadius: vars.borderRadius.sm,
  paddingInline: vars.spacing.sm,
  paddingBlock: vars.spacing.xs,
  fontFamily: vars.typography.fontMono,
  fontSize: vars.typography.fontSize.xs,
  cursor: 'pointer',
  transition: 'all 0.15s ease',

  ':hover': {
    color: vars.colors.content,
    backgroundColor: vars.colors.hoverTint,
  },
  ':focus-visible': {
    outline: `2px solid ${vars.colors.primary500}`,
    outlineOffset: '2px',
  },
})

export const inspectorBody = style({
  padding: vars.spacing.md,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md,
})

export const scenarioMeta = style({
  borderBottom: `1px solid ${vars.colors.stroke}`,
  paddingBottom: vars.spacing.sm,
})

export const scenarioTitle = style({
  fontFamily: vars.typography.fontMono,
  fontSize: vars.typography.fontSize.sm,
  fontWeight: '700',
  color: vars.colors.content,
  margin: 0,
})

export const scenarioSubtitle = style({
  fontSize: vars.typography.fontSize.xs,
  color: vars.colors.contentMuted,
  margin: 0,
  marginTop: vars.spacing.xs,
  lineHeight: '1.4',
})

export const timeline = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xs,
})

export const stepBtn = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: vars.spacing.md,
  width: '100%',
  textAlign: 'left',
  background: 'transparent',
  border: `1px solid ${vars.colors.stroke}`,
  borderRadius: vars.borderRadius.md,
  padding: vars.spacing.sm,
  cursor: 'pointer',
  transition: 'all 0.2s ease',

  ':hover': {
    backgroundColor: vars.colors.hoverTint,
    borderColor: vars.colors.primary500,
  },
  ':focus-visible': {
    outline: `2px solid ${vars.colors.primary500}`,
    outlineOffset: '2px',
  },
})

export const stepBtnActive = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: vars.spacing.md,
  width: '100%',
  textAlign: 'left',
  backgroundColor: vars.colors.surfaceAlt,
  border: `1px solid ${vars.colors.primary500}`,
  borderRadius: vars.borderRadius.md,
  padding: vars.spacing.sm,
  cursor: 'pointer',
  boxShadow: vars.shadows.sm,

  ':focus-visible': {
    outline: `2px solid ${vars.colors.primary500}`,
    outlineOffset: '2px',
  },
})

export const stepLifeline = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: vars.spacing.xs,
  flexShrink: 0,
})

export const stepIndex = style({
  fontFamily: vars.typography.fontMono,
  fontSize: vars.typography.fontSize.xs,
  fontWeight: '700',
  color: vars.colors.primary500,
})

export const stepContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xs,
  width: '100%',
})

export const stepTop = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const actorBadge = style({
  fontFamily: vars.typography.fontMono,
  fontSize: vars.typography.fontSize.xs,
  fontWeight: '600',
  color: vars.colors.content,
})

export const latencyTag = style({
  fontFamily: vars.typography.fontMono,
  fontSize: vars.typography.fontSize.xs,
  color: vars.colors.success,
})

export const actionCall = style({
  fontFamily: vars.typography.fontMono,
  fontSize: vars.typography.fontSize.xs,
  color: vars.colors.contentMuted,
  wordBreak: 'break-word',
})

export const tradeoffPanel = style({
  backgroundColor: vars.colors.surfaceAlt,
  border: `1px solid ${vars.colors.stroke}`,
  borderRadius: vars.borderRadius.lg,
  padding: vars.spacing.md,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.sm,
})

export const tradeoffHeader = style({
  fontFamily: vars.typography.fontMono,
  fontSize: vars.typography.fontSize.xs,
  fontWeight: '700',
  color: vars.colors.primary500,
  letterSpacing: '0.04em',
})

export const tradeoffText = style({
  fontSize: vars.typography.fontSize.xs,
  color: vars.colors.content,
  lineHeight: '1.5',
  margin: 0,
})

export const stackChips = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: vars.spacing.xs,
  marginTop: vars.spacing.xs,
})

export const techChip = style({
  fontFamily: vars.typography.fontMono,
  fontSize: vars.typography.fontSize.xs,
  color: vars.colors.content,
  backgroundColor: vars.colors.surface,
  border: `1px solid ${vars.colors.stroke}`,
  borderRadius: vars.borderRadius.sm,
  paddingInline: vars.spacing.sm,
  paddingBlock: vars.spacing.xs,
})

export const telemetryHud = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: vars.spacing.lg,
  borderTop: `1px solid ${vars.colors.stroke}`,
  fontFamily: vars.typography.fontMono,
  fontSize: vars.typography.fontSize.xs,
  color: vars.colors.contentMuted,
  flexWrap: 'wrap',
  gap: vars.spacing.md,
})

export const hudItem = style({
  display: 'flex',
  gap: vars.spacing.xs,
  alignItems: 'center',
})

export const hudLabel = style({
  color: vars.colors.contentMuted,
})

export const hudValue = style({
  color: vars.colors.content,
})

export const hudValueSuccess = style({
  color: vars.colors.success,
  fontWeight: '600',
})
