import type { NavLink } from '../types'

/**
 * Zentrale Unternehmens- und Produktdaten.
 *
 * TODO(company-data): Alle Werte in dieser Datei sind Platzhalter und müssen
 * vor einer Veröffentlichung durch echte Unternehmensdaten ersetzt werden.
 */
export const siteConfig = {
  /** TODO(company-data): Finalen Produktnamen eintragen. */
  productName: 'EduGo Learn',
  /** TODO(company-data): Rechtlichen Firmennamen eintragen (inkl. Rechtsform). */
  companyName: 'Edugo-Learn',
  privacyPolicyHref: '#datenschutzerklaerung',
  legalLinks: [
    { label: 'Datenschutzerklärung', href: '#datenschutzerklaerung' },
    { label: 'Impressum', href: '#impressum' },
    { label: 'Kontakt', href: '#demo' },
  ] satisfies NavLink[],
}
