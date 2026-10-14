import type { HTMLAttributes } from 'react'

import { Button, Container, ThemeSwitcher } from '@core/ui'

import * as styles from './Header.css'

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  className?: string
}

export function Header({ className, ...props }: HeaderProps) {
  const containerClass = [styles.header, className].filter(Boolean).join(' ')

  return (
    <header className={containerClass} {...props}>
      <Container className={styles.headerInner}>
        <a href="/" className={styles.brandLink} aria-label="Wilson Junior Portfolio Root">
          <span className={styles.statusDot} aria-hidden="true" />
          <span className={styles.brandTitle}>wjunior.dev.br</span>
          <span className={styles.rootBadge}>ROOT // ARCHITECT</span>
        </a>

        <nav aria-label="Ecossistema e Lentes de Conteúdo" className={styles.navGroup}>
          <div className={styles.lensesList}>
            <Button
              as="a"
              href="https://fullstack.wjunior.dev.br"
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="sm"
            >
              fullstack.wjunior
            </Button>
            <Button
              as="a"
              href="https://frontend.wjunior.dev.br"
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="sm"
            >
              frontend.wjunior
            </Button>
            <Button
              as="a"
              href="https://talks.wjunior.dev.br"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="sm"
            >
              talks.wjunior 🎙️
            </Button>
            <Button
              as="a"
              href="https://blog.wjunior.dev.br"
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="sm"
            >
              blog.wjunior
            </Button>
          </div>

          <ThemeSwitcher />
        </nav>
      </Container>
    </header>
  )
}
