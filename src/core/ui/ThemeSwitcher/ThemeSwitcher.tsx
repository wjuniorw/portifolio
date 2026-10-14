import { useEffect, useState } from 'react'

import { ToggleIcon } from '@core/ui/icons/ToggleIcon'

import { themeSwitcherButton } from './ThemeSwitcher.css'

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light')

  useEffect(() => {
    // Read the current theme from HTML element
    const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
    setTheme(currentTheme)
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
    
    // Apply theme to the document and save preference
    document.documentElement.setAttribute('data-theme', nextTheme)
    localStorage.setItem('theme', nextTheme)
  }
  return (
    <button
      type="button"
      role="switch"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      aria-checked={theme === 'dark'}
      className={themeSwitcherButton}
    >
      <ToggleIcon isDark={theme === 'dark'} />
    </button>
  )
}
