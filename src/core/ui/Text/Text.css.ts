import { style, styleVariants } from '@vanilla-extract/css'

import { vars } from '@core/ds/tokens.css'

export const baseText = style({
  fontFamily: vars.typography.fontFamily,
  margin: 0,
})

export const sizeVariants = styleVariants(vars.typography.fontSize, (size) => ({
  fontSize: size,
}))

export const weightVariants = styleVariants({
  normal: { fontWeight: '400' },
  medium: { fontWeight: '500' },
  semibold: { fontWeight: '600' },
  bold: { fontWeight: '700' },
})

export const alignVariants = styleVariants({
  left: { textAlign: 'left' },
  center: { textAlign: 'center' },
  right: { textAlign: 'right' },
  justify: { textAlign: 'justify' },
})

// We map a few safe text colors
export const colorVariants = styleVariants({
  text: { color: vars.colors.text },
  content: { color: vars.colors.content },
  contentMuted: { color: vars.colors.contentMuted },
  primary: { color: vars.colors.primary },
  success: { color: vars.colors.success },
  error: { color: vars.colors.error },
  warning: { color: vars.colors.warning },
  info: { color: vars.colors.info },
  muted: { color: vars.colors.contentMuted },
})
