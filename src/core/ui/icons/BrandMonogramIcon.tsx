import { motion } from 'framer-motion'

import { vars } from '@core/ds/tokens.css'

import * as styles from './AnimatedIcons.css'

export interface BrandMonogramIconProps {
  isAnimating: boolean
  size?: number
  className?: string
}

const SPRING_TRANSITION = {
  type: 'spring' as const,
  stiffness: 420,
  damping: 16,
}

export function BrandMonogramIcon({
  className,
  isAnimating,
  size = 36,
}: BrandMonogramIconProps) {
  return (
    <motion.svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={`${styles.svgContainer} ${className || ''}`.trim()}
    >
      {/* Obsidian rounded shield background with subtle border */}
      <rect width="64" height="64" rx="14" fill={vars.colors.surfaceAlt} />
      <rect
        x="1.5"
        y="1.5"
        width="61"
        height="61"
        rx="12.5"
        stroke={vars.colors.stroke}
        strokeWidth="1.5"
      />

      {/* W-COCAR (5 Radial feathers forming W + Arch headband) */}
      <g>
        {/* Outer Left Feather */}
        <motion.path
          d="M13 38 L7 18 C7 14 11 13 13 17 L18 35 Z"
          fill={vars.colors.primary500}
          initial={false}
          animate={
            isAnimating
              ? { rotate: -14, x: -2, y: -1 }
              : { rotate: 0, x: 0, y: 0 }
          }
          transition={SPRING_TRANSITION}
        />

        {/* Inner Left Feather */}
        <motion.path
          d="M17 36 L14 14 C14 10 18 10 19 14 L21 35 Z"
          fill={vars.colors.primary}
          initial={false}
          animate={
            isAnimating
              ? { rotate: -7, x: -1, y: -2 }
              : { rotate: 0, x: 0, y: 0 }
          }
          transition={SPRING_TRANSITION}
        />

        {/* Center Sovereign Feather */}
        <motion.path
          d="M22 35 L22 9 C22 5 26 5 26 9 L26 35 Z"
          fill={vars.colors.primary500}
          initial={false}
          animate={
            isAnimating
              ? { scaleY: 1.06, y: -3.5 }
              : { scaleY: 1, y: 0 }
          }
          transition={SPRING_TRANSITION}
        />

        {/* Inner Right Feather */}
        <motion.path
          d="M27 35 L29 14 C30 10 34 10 34 14 L31 36 Z"
          fill={vars.colors.primary}
          initial={false}
          animate={
            isAnimating
              ? { rotate: 7, x: 1, y: -2 }
              : { rotate: 0, x: 0, y: 0 }
          }
          transition={SPRING_TRANSITION}
        />

        {/* Outer Right Feather */}
        <motion.path
          d="M30 35 L35 17 C37 13 41 14 41 18 L35 38 Z"
          fill={vars.colors.primary500}
          initial={false}
          animate={
            isAnimating
              ? { rotate: 14, x: 2, y: -1 }
              : { rotate: 0, x: 0, y: 0 }
          }
          transition={SPRING_TRANSITION}
        />

        {/* Crown W Outline */}
        <path
          d="M9 20 L16 40 L24 25 L32 40 L39 20"
          stroke={vars.colors.content}
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Headband Arch Base */}
        <path
          d="M12 43 Q24 38 36 43"
          stroke={vars.colors.primary500}
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Gold Crown Dot */}
        <motion.circle
          cx="24"
          cy="12"
          r="2"
          fill={vars.colors.secondary}
          initial={false}
          animate={
            isAnimating
              ? { scale: 1.35, y: -4 }
              : { scale: 1, y: 0 }
          }
          transition={SPRING_TRANSITION}
        />
      </g>

      {/* Engineering J */}
      <motion.g
        initial={false}
        animate={isAnimating ? { x: 1.5 } : { x: 0 }}
        transition={SPRING_TRANSITION}
      >
        {/* Top bar of J */}
        <path
          d="M44 20 H54"
          stroke={vars.colors.primary500}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Hook of J */}
        <path
          d="M50 20 V42 C50 48.5 45.5 52 39.5 52 C35.5 52 33 49.5 32 46.5"
          stroke={vars.colors.content}
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
    </motion.svg>
  )
}
