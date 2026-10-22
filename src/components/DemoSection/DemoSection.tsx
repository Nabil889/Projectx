import { Icon } from '../Icon/Icon'
import type { IconName } from '../../types'
import { DemoForm } from './DemoForm'
import styles from './DemoSection.module.css'

type DemoHighlight = {
  icon: IconName
  text: string
}

const demoHighlights: DemoHighlight[] = [
  { icon: 'clipboard', text: 'Vorstellung anhand konkreter Beispielaufgaben' },
  { icon: 'dashboard', text: 'Einblick in die Ansichten für Lernende und Lehrpersonen' },
  { icon: 'shield', text: 'Antworten auf Ihre Fragen zu Rollen und Datenschutz' },
  { icon: 'message', text: 'Unverbindlich und auf Ihre Schule abgestimmt' },
]

export function DemoSection() {
  return (
    <section id="demo" className={styles.section} aria-labelledby="demo-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Demo</p>
          <h2 id="demo-title" className={styles.title}>
            Erleben Sie KI-gestütztes Lernen in der Berufsbildung
          </h2>
          <p className={styles.lead}>
            Entdecken Sie, wie individuelle Aufgaben, verständliche Erklärungen und adaptive
            Lernwege Lernende und Lehrpersonen im Unterricht unterstützen können.
          </p>
          <ul className={styles.highlights}>
            {demoHighlights.map((highlight) => (
              <li key={highlight.text} className={styles.highlight}>
                <span className={styles.highlightIcon}>
                  <Icon name={highlight.icon} />
                </span>
                {highlight.text}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.formCard}>
          <h3 className={styles.formTitle}>Demo anfragen</h3>
          <p className={styles.formText}>
            Die Anfrage ist unverbindlich. Wir melden uns bei Ihnen, um einen Termin zu vereinbaren.
          </p>
          <DemoForm />
        </div>
      </div>
    </section>
  )
}
