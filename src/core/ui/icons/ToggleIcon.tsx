import { motion } from 'framer-motion'

interface ToggleIconProps {
  isDark: boolean
  onClick?: () => void
}

export function ToggleIcon({ isDark, onClick }: ToggleIconProps) {
  return (
    <motion.svg
      aria-hidden="true"
      width="48"
      height="28"
      viewBox="0 0 48 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      style={{ cursor: 'pointer' }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Switch Background (Pill) */}
      <motion.rect
        x="0"
        y="0"
        width="48"
        height="28"
        rx="14"
        animate={{
          fill: isDark ? '#111111' : '#e5e7eb',
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Moving Thumb / Sun & Moon Morph */}
      <motion.g
        animate={{
          x: isDark ? 20 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        <mask id="moon-mask">
          <rect x="0" y="0" width="28" height="28" fill="white" />
          <motion.circle
            cx="14"
            cy="14"
            r="8"
            fill="black"
            initial={false}
            animate={{
              cx: isDark ? 10 : 25,
              cy: isDark ? 10 : 4,
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />
        </mask>

        {/* The core circle (Sun / Moon) */}
        <motion.circle
          cx="14"
          cy="14"
          fill={isDark ? '#ffffff' : '#f59e0b'} // White moon, orange sun
          mask="url(#moon-mask)"
          initial={false}
          animate={{
            r: isDark ? 8 : 5,
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />

        {/* Sun Rays */}
        <motion.g
          stroke="#f59e0b"
          strokeWidth="2"
          strokeLinecap="round"
          initial={false}
          animate={{
            opacity: isDark ? 0 : 1,
            rotate: isDark ? -90 : 0,
            scale: isDark ? 0.5 : 1,
          }}
          style={{ originX: '14px', originY: '14px' }}
          transition={{ duration: 0.3 }}
        >
          <line x1="14" y1="4" x2="14" y2="6" />
          <line x1="14" y1="22" x2="14" y2="24" />
          <line x1="6.93" y1="6.93" x2="8.34" y2="8.34" />
          <line x1="19.66" y1="19.66" x2="21.07" y2="21.07" />
          <line x1="4" y1="14" x2="6" y2="14" />
          <line x1="22" y1="14" x2="24" y2="14" />
          <line x1="6.93" y1="21.07" x2="8.34" y2="19.66" />
          <line x1="19.66" y1="8.34" x2="21.07" y2="6.93" />
        </motion.g>
      </motion.g>
      
      {/* Switch Border / Outline */}
      <motion.rect
        x="1"
        y="1"
        width="46"
        height="26"
        rx="13"
        stroke={isDark ? '#333333' : '#d1d5db'}
        strokeWidth="2"
        animate={{
          stroke: isDark ? '#333333' : '#d1d5db',
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.svg>
  )
}
