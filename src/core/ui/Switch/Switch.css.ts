import { style } from '@vanilla-extract/css'

import { vars } from '@core/ds/tokens.css'

export const switchContainer = style({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  cursor: 'pointer',
})

export const switchInput = style({
  opacity: 0,
  width: 0,
  height: 0,
  position: 'absolute',
})

export const switchTrack = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '52px',
  height: '28px',
  backgroundColor: vars.colors.text,
  borderRadius: vars.borderRadius.full,
  position: 'relative',
  transition: 'background-color 0.3s ease',
  padding: '2px',
})

export const switchThumb = style({
  width: '24px',
  height: '24px',
  backgroundColor: vars.colors.background,
  borderRadius: '50%',
  position: 'absolute',
  top: '2px',
  left: '2px',
  transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
  selectors: {
    [`${switchInput}:checked + ${switchTrack} > &`]: {
      transform: 'translateX(24px)',
    },
  },
})

export const iconLeft = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '24px',
  height: '24px',
  color: vars.colors.background,
  zIndex: 1,
  paddingLeft: '2px',
})

export const iconRight = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '24px',
  height: '24px',
  color: vars.colors.background,
  zIndex: 1,
  paddingRight: '2px',
})
