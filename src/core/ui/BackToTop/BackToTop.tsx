import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { IndigenousBowIcon } from '@core/ui/icons/IndigenousBowIcon'

import * as styles from './BackToTop.css'

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isShooting, setIsShooting] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 320)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleShootToTop = () => {
    if (isShooting) return
    setIsShooting(true)

    window.scrollTo({ top: 0, behavior: 'smooth' })

    window.setTimeout(() => {
      setIsShooting(false)
      setIsHovered(false)
    }, 700)
  }

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className={styles.wrapper}
            initial={{ opacity: 0, scale: 0.8, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <button
              type="button"
              className={styles.bowButton}
              aria-label="Disparar flecha para o topo da página"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onFocus={() => setIsHovered(true)}
              onBlur={() => setIsHovered(false)}
              onClick={handleShootToTop}
            >
              <IndigenousBowIcon isHovered={isHovered} isShooting={isShooting} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Flecha que atravessa a página inteira até o Header no disparo */}
      <AnimatePresence>
        {isShooting && (
          <motion.div
            className={styles.flyingArrow}
            initial={{ y: 0, x: 0, rotate: -38, opacity: 1, scale: 1.15 }}
            animate={{ y: '-110vh', x: '-85vw', rotate: -38, opacity: [1, 1, 0], scale: 1.35 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden="true"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="22" x2="12" y2="2" />
              <polyline points="6 8 12 2 18 8" />
              <polyline points="9 21 12 17 15 21" />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
