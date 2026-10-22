import { navLinks } from '../../data/content'
import { siteConfig } from '../../data/siteConfig'
import { Logo } from '../Logo/Logo'
import styles from './Footer.module.css'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <Logo inverted />
          <p className={styles.tagline}>
            KI-gestütztes, adaptives Lernen für die Berufsbildung.
          </p>
        </div>

        <nav aria-label="Seitenbereiche" className={styles.column}>
          <h2 className={styles.heading}>Seite</h2>
          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Rechtliches" className={styles.column}>
          <h2 className={styles.heading}>Rechtliches</h2>
          {/* TODO(company-data): Echte Seiten für Datenschutz, Impressum und Kontakt verlinken (siehe siteConfig). */}
          <ul className={styles.links}>
            {siteConfig.legalLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>
          © {currentYear} {siteConfig.companyName}. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  )
}
