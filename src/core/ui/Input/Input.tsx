import type { InputHTMLAttributes } from 'react'

import { inputStyle } from './Input.css'

export type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({ className, ...props }: InputProps) {
  const finalClass = className ? `${inputStyle} ${className}` : inputStyle

  return (
    <input className={finalClass} {...props} />
  )
}
