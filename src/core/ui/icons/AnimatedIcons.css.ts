import { style } from '@vanilla-extract/css'

import { vars } from '@core/ds/tokens.css'

export const hoverSpin = style({
  transition: 'transform 0.3s ease',
  selectors: {
    '*:hover > &': {
      transform: 'rotate(90deg)',
    },
  },
})

export const hoverScale = style({
  transition: 'transform 0.3s ease',
  selectors: {
    '*:hover > &': {
      transform: 'scale(1.1)',
    },
  },
})

export const hoverBounce = style({
  transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  selectors: {
    '*:hover > &': {
      transform: 'translateY(-2px)',
    },
  },
})

export const iconColor = style({
  color: vars.colors.text,
})

export const svgContainer = style({
  overflow: 'hidden',
  display: 'inline-block',
  verticalAlign: 'middle',
  flexShrink: 0,
})
