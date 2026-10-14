import { motion } from 'framer-motion'

import * as styles from './AnimatedIcons.css'

interface ArrowUpIconProps {
  isAnimating: boolean
}

export function ArrowUpIcon({ isAnimating }: ArrowUpIconProps) {
  return (
    <motion.svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={styles.svgContainer}
    >
      {/* Primary Arrow */}
      <motion.g
        initial={false}
        animate={isAnimating ? { y: -24 } : { y: 0 }}
        transition={isAnimating ? { duration: 0.4, ease: 'easeInOut' } : { duration: 0 }}
      >
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </motion.g>

      {/* Secondary Arrow (follows from the bottom) */}
      <motion.g
        initial={false}
        animate={isAnimating ? { y: 0 } : { y: 24 }}
        transition={isAnimating ? { duration: 0.4, ease: 'easeInOut' } : { duration: 0 }}
      >
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </motion.g>
    </motion.svg>
  )
}
