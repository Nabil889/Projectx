import type { ReactNode } from 'react'
import styles from './LegalPage.module.css'

type LegalPageProps = {
  id: string
  title: string
  /** Optionale Zeile unter dem Titel, z. B. «Stand: …». */
  meta?: string
  children: ReactNode
}

/** Gemeinsames Seitenlayout für Impressum, Datenschutzerklärung usw. */
export function LegalPage({ id, title, meta, children }: LegalPageProps) {
  const titleId = `${id}-title`

  return (
    <section className={styles.section} aria-labelledby={titleId}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.back}>
          ← Zurück zur Startseite
        </a>

        <header className={styles.header}>
          <h1 id={titleId} className={styles.title}>
            {title}
          </h1>
          {meta && <p className={styles.meta}>{meta}</p>}
        </header>

        <div className={styles.prose}>{children}</div>
      </div>
    </section>
  )
}
