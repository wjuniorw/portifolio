import { motion } from 'framer-motion'

import * as styles from './AnimatedIcons.css'

export interface PulseFilterIconProps {
  isAnimating?: boolean
  className?: string
  size?: number
}

export function PulseFilterIcon({
  className,
  isAnimating = false,
  size = 14,
}: PulseFilterIconProps) {
  return (
    <motion.svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${styles.svgContainer} ${className || ''}`.trim()}
    >
      <motion.circle
        cx="12"
        cy="12"
        r="4"
        fill="currentColor"
        initial={false}
        animate={
          isAnimating
            ? { scale: [1, 1.35, 1], opacity: [0.8, 1, 0.8] }
            : { scale: 1, opacity: 0.7 }
        }
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      />
      <motion.circle
        cx="12"
        cy="12"
        r="9"
        initial={false}
        animate={
          isAnimating
            ? { scale: [1, 1.25, 1], opacity: [0.4, 0.9, 0.4] }
            : { scale: 1, opacity: 0.3 }
        }
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      />
    </motion.svg>
  )
}
