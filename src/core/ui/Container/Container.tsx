import type { HTMLAttributes } from 'react'

import { container } from './Container.css'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
}

export function Container({ className, ...props }: ContainerProps) {
  const classes = [container, className].filter(Boolean).join(' ')

  return <div className={classes} {...props} />
}
