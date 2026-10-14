import type { HTMLAttributes } from 'react'

import { backgroundVariants, section } from './Section.css'

export type SectionBackground = keyof typeof backgroundVariants

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  background?: SectionBackground
  className?: string
}

export function Section({
  background = 'none',
  className,
  ...props
}: SectionProps) {
  const classes = [section, backgroundVariants[background], className]
    .filter(Boolean)
    .join(' ')

  return <section className={classes} {...props} />
}
