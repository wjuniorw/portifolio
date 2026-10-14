import type { HTMLAttributes } from 'react'

import { useState } from 'react'

import { ArrowRightAnimatedIcon, Button, Container, Heading, Text } from '@core/ui'

import * as styles from './Footer.css'

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  className?: string
}

export function Footer({ className, ...props }: FooterProps) {
  const [hoveredCta, setHoveredCta] = useState<'talks' | 'linkedin' | null>(null)
  const currentYear = new Date().getFullYear()
  return (
    <footer className={`${styles.footerSection} ${className || ''}`.trim()} {...props}>
      <Container>
        {/* Pre-footer Architectural CTA */}
        <div className={styles.ctaBox}>
          <Heading as="h2" size="4xl" align="center" className={styles.ctaTitle}>
            Vamos desenhar arquiteturas que escalam sem ruído?
          </Heading>
          <Text size="lg" align="center" className={styles.ctaText}>
            Aberto a conversas estratégicas sobre liderança técnica, advisory de engenharia, monólitos modulares,
            arquiteturas orientadas a eventos e modernização de plataformas críticas.
          </Text>
          <div className={styles.ctaActions}>
            <Button
              as="a"
              href="https://talks.wjunior.dev.br"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              onMouseEnter={() => setHoveredCta('talks')}
              onMouseLeave={() => setHoveredCta(null)}
            >
              <span>Ouvir Tech Talks 🎙️</span>
              <ArrowRightAnimatedIcon isAnimating={hoveredCta === 'talks'} />
            </Button>
            <Button
              as="a"
              href="https://www.linkedin.com/in/wilson-junior-dev"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              onMouseEnter={() => setHoveredCta('linkedin')}
              onMouseLeave={() => setHoveredCta(null)}
            >
              <span>Conectar via LinkedIn</span>
              <ArrowRightAnimatedIcon isAnimating={hoveredCta === 'linkedin'} />
            </Button>
          </div>
        </div>

        {/* Technical Footer Row */}
        <div className={styles.footerLayout}>
          <p className={styles.copyrightText}>
            © {currentYear} Wilson Junior (wjunior.dev.br) // Do silício à borda.
          </p>

          <nav className={styles.linkGroup} aria-label="Links do Ecossistema">
            <a
              href="https://github.com/wjunior-dev"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/wilson-junior-dev"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              LinkedIn
            </a>
            <a href="https://fullstack.wjunior.dev.br" className={styles.footerLink}>
              fullstack.wjunior
            </a>
            <a href="https://frontend.wjunior.dev.br" className={styles.footerLink}>
              frontend.wjunior
            </a>
            <a href="https://talks.wjunior.dev.br" className={styles.footerLink}>
              talks.wjunior
            </a>
            <a href="https://blog.wjunior.dev.br" className={styles.footerLink}>
              blog.wjunior
            </a>
          </nav>
        </div>
      </Container>
    </footer>
  )
}
