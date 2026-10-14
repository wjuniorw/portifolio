import { motion } from 'framer-motion'

import * as styles from './AnimatedIcons.css'

export interface ArrowRightAnimatedIconProps {
  isAnimating?: boolean
  className?: string
  size?: number
}

export function ArrowRightAnimatedIcon({
  className,
  isAnimating = false,
  size = 18,
}: ArrowRightAnimatedIconProps) {
  return (
    <motion.svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${styles.svgContainer} ${className || ''}`.trim()}
    >
      <motion.g
        initial={false}
        animate={isAnimating ? { x: 24 } : { x: 0 }}
        transition={isAnimating ? { duration: 0.35, ease: 'easeInOut' } : { duration: 0 }}
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </motion.g>
      <motion.g
        initial={false}
        animate={isAnimating ? { x: 0 } : { x: -24 }}
        transition={isAnimating ? { duration: 0.35, ease: 'easeInOut' } : { duration: 0 }}
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </motion.g>
    </motion.svg>
  )
}
