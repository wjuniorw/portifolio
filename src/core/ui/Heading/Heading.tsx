import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { alignVariants, baseHeading, colorVariants, sizeVariants, weightVariants } from './Heading.css'

export type HeadingProps<C extends ElementType = 'h2'> = {
  as?: C
  children: ReactNode
  size?: keyof typeof sizeVariants
  weight?: keyof typeof weightVariants
  align?: keyof typeof alignVariants
  color?: keyof typeof colorVariants
  className?: string
} & Omit<ComponentPropsWithoutRef<C>, 'color'>

export const Heading = <C extends ElementType = 'h2'>({
  align = 'left',
  as,
  children,
  className,
  color = 'text',
  size,
  weight = 'bold',
  ...props
}: HeadingProps<C>) => {
  const Component = as || 'h2'
  
  const defaultSizes: Record<string, keyof typeof sizeVariants> = {
    h1: '5xl',
    h2: '4xl',
    h3: '3xl',
    h4: '2xl',
    h5: 'xl',
    h6: 'lg',
  }
  const finalSize = size || defaultSizes[Component as string] || '4xl'
  
  const classes = [
    baseHeading,
    sizeVariants[finalSize],
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
