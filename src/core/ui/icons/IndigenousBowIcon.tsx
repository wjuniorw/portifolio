import { motion } from 'framer-motion'

export interface IndigenousBowIconProps {
  isHovered: boolean
  isShooting: boolean
  className?: string
}

// Haste e cordão: no repouso (idle) são retos e apontam para cima; no hover (drawn), a face curva enverga diagonalmente PARA CIMA em direção ao cabeçalho da página
const BOW_STAVE_IDLE = 'M 4 14 Q 12 14 20 14'
const BOW_STAVE_DRAWN = 'M 4 12 Q 12 5 20 12'

const BOW_STRING_IDLE = 'M 4 14 L 12 14 L 20 14'
const BOW_STRING_DRAWN = 'M 4 12 L 12 19 L 20 12'

export function IndigenousBowIcon({
  className,
  isHovered,
  isShooting,
}: IndigenousBowIconProps) {
  const state = isShooting ? 'shoot' : isHovered ? 'drawn' : 'idle'

  return (
    <motion.svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      initial={false}
      animate={
        state === 'drawn'
          ? {
              rotate: [-38, -37.2, -38.8, -37.5, -38],
              x: [0, -0.6, 0.6, -0.4, 0],
              y: [0, 0.4, -0.4, 0.2, 0],
            }
          : state === 'shoot'
            ? { rotate: -38, scale: [1, 1.18, 1] }
            : { rotate: 0, x: 0, y: 0, scale: 1 }
      }
      transition={
        state === 'drawn'
          ? {
              rotate: { duration: 0.28, ease: 'linear', repeat: Infinity },
              x: { duration: 0.18, ease: 'linear', repeat: Infinity },
              y: { duration: 0.22, ease: 'linear', repeat: Infinity },
            }
          : state === 'shoot'
            ? { duration: 0.22, ease: 'easeOut' }
            : { duration: 0.35, ease: 'easeOut' }
      }
    >
      {/* Cordão Artesanal (Fibra de Tucum) */}
      <motion.path
        strokeWidth="1.5"
        initial={false}
        animate={{
          d: state === 'drawn' ? BOW_STRING_DRAWN : BOW_STRING_IDLE,
        }}
        transition={
          state === 'shoot'
            ? { damping: 12, stiffness: 650, type: 'spring' }
            : { duration: 0.25, ease: 'easeOut' }
        }
      />

      {/* Haste de Madeira (Pau-d'arco) - Enverga com a face curva projetada DIAGONALMENTE PARA CIMA */}
      <motion.path
        strokeWidth="2.4"
        initial={false}
        animate={{
          d: state === 'drawn' ? BOW_STAVE_DRAWN : BOW_STAVE_IDLE,
        }}
        transition={
          state === 'shoot'
            ? { damping: 12, stiffness: 650, type: 'spring' }
            : { duration: 0.28, ease: 'easeOut' }
        }
      />

      {/* Flecha Principal - Recua encaixada no cordão e dispara diagonalmente para o topo */}
      <motion.g
        initial={false}
        animate={
          state === 'shoot'
            ? { opacity: 0, x: 0, y: -28 }
            : state === 'drawn'
              ? { opacity: 1, x: 0, y: 4 }
              : { opacity: 1, x: 0, y: 0 }
        }
        transition={
          state === 'shoot'
            ? { duration: 0.22, ease: 'easeIn' }
            : { duration: 0.25, ease: 'easeOut' }
        }
      >
        <line x1="12" y1="21" x2="12" y2="4" />
        <polyline points="8 8 12 4 16 8" />
        <polyline points="9 20 12 18 15 20" />
      </motion.g>
    </motion.svg>
  )
}
