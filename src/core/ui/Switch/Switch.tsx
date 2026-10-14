import type { InputHTMLAttributes, ReactNode } from 'react'

import { iconLeft, iconRight, switchContainer, switchInput, switchThumb, switchTrack } from './Switch.css'

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  iconOn?: ReactNode
  iconOff?: ReactNode
}

export function Switch({ className, iconOff, iconOn, ...props }: SwitchProps) {
  return (
    <label className={`${switchContainer} ${className || ''}`.trim()}>
      <input className={switchInput} type="checkbox" role="switch" {...props} />
      <div className={switchTrack}>
        <div className={iconLeft}>{iconOn}</div>
        <div className={iconRight}>{iconOff}</div>
        <div className={switchThumb} />
      </div>
    </label>
  )
}
