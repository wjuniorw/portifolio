import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { baseButton, buttonVariants, sizeVariants } from './Button.css'

export type ButtonProps<C extends ElementType = 'button'> = {
  as?: C
  children: ReactNode
  variant?: keyof typeof buttonVariants
  size?: keyof typeof sizeVariants
  className?: string
} & ComponentPropsWithoutRef<C>

export const Button = <C extends ElementType = 'button'>({
  as,
  children,
  className,
  type,
  size = 'md',
  variant = 'primary',
  ...props
}: ButtonProps<C>) => {
  const Component = as || 'button'
  const finalClass = [baseButton, buttonVariants[variant], sizeVariants[size], className].filter(Boolean).join(' ')
  const defaultType = Component === 'button' ? (type ?? 'button') : type

  return (
    <Component
      className={finalClass}
      type={defaultType}
      {...props}
    >
      {children}
    </Component>
  )
}
