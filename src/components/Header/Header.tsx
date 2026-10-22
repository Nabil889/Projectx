import { useEffect, useState } from 'react'
import { navLinks } from '../../data/content'
import { Icon } from '../Icon/Icon'
import { Logo } from '../Logo/Logo'
import styles from './Header.module.css'

const MOBILE_MENU_ID = 'mobile-navigation'
const DESKTOP_QUERY = '(min-width: 960px)'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }
    const desktopQuery = window.matchMedia(DESKTOP_QUERY)
    const handleBreakpoint = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMenuOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    desktopQuery.addEventListener('change', handleBreakpoint)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      desktopQuery.removeEventListener('change', handleBreakpoint)
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`${styles.header} ${isScrolled || isMenuOpen ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.brand} aria-label="Zur Startseite" onClick={closeMenu}>
          <Logo />
        </a>

        <nav className={styles.desktopNav} aria-label="Hauptnavigation">
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <a href="#demo" className={`btn btn-primary btn-small ${styles.cta}`}>
            Demo anfragen
          </a>
          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={isMenuOpen}
            aria-controls={MOBILE_MENU_ID}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <Icon name={isMenuOpen ? 'close' : 'menu'} />
            <span className="visually-hidden">
              {isMenuOpen ? 'Menü schliessen' : 'Menü öffnen'}
            </span>
          </button>
        </div>
      </div>

      <nav
        id={MOBILE_MENU_ID}
        className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ''}`}
        aria-label="Mobile Navigation"
        hidden={!isMenuOpen}
      >
        <div className="container">
          <ul className={styles.mobileList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.mobileLink} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#demo"
            className={`btn btn-primary ${styles.mobileCta}`}
            onClick={closeMenu}
          >
            Demo anfragen
          </a>
        </div>
      </nav>
    </header>
  )
}
