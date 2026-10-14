import { style, styleVariants } from '@vanilla-extract/css'

import { vars } from '@core/ds/tokens.css'

export const baseHeading = style({
  fontFamily: vars.typography.fontFamily,
  fontWeight: '700', // Default bold for headings
  margin: 0,
  lineHeight: '1.2',
  letterSpacing: '-0.02em', // Tighter letter spacing looks premium for large text
})

export const sizeVariants = styleVariants(vars.typography.fontSize, (size) => ({
  fontSize: size,
}))

export const weightVariants = styleVariants({
  medium: { fontWeight: '500' },
  semibold: { fontWeight: '600' },
  bold: { fontWeight: '700' },
  extrabold: { fontWeight: '800' },
})

export const alignVariants = styleVariants({
  left: { textAlign: 'left' },
  center: { textAlign: 'center' },
  right: { textAlign: 'right' },
})

export const colorVariants = styleVariants({
  text: { color: vars.colors.text },
  content: { color: vars.colors.content },
  contentMuted: { color: vars.colors.contentMuted },
  primary: { color: vars.colors.primary },
})
