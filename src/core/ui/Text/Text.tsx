import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { alignVariants, baseText, colorVariants, sizeVariants, weightVariants } from './Text.css'

export type TextProps<C extends ElementType = 'p'> = {
  as?: C
  children: ReactNode
  size?: keyof typeof sizeVariants
  weight?: keyof typeof weightVariants
  align?: keyof typeof alignVariants
  color?: keyof typeof colorVariants
  className?: string
} & Omit<ComponentPropsWithoutRef<C>, 'color'>

export const Text = <C extends ElementType = 'p'>({
  align = 'left',
  as,
  children,
  className,
  color = 'text',
  size = 'base',
  weight = 'normal',
  ...props
}: TextProps<C>) => {
  const Component = as || 'p'
  const classes = [
    baseText,
    sizeVariants[size],
    weightVariants[weight],
    alignVariants[align],
    colorVariants[color],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}
