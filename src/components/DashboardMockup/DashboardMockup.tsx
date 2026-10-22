import type { CSSProperties } from 'react'
import { Icon } from '../Icon/Icon'
import styles from './DashboardMockup.module.css'

type TopicStatus = 'secure' | 'building' | 'review'

type Topic = {
  title: string
  progress: number
  status: TopicStatus
}

const statusLabels: Record<TopicStatus, string> = {
  secure: 'Sicher',
  building: 'Im Aufbau',
  review: 'Wiederholen',
}

const topics: Topic[] = [
  { title: 'Finanzbuchhaltung', progress: 86, status: 'secure' },
  { title: 'Wirtschaft & Recht', progress: 54, status: 'building' },
  { title: 'Kommunikation', progress: 32, status: 'review' },
]

const answerOptions = ['Bank / Debitoren', 'Debitoren / Bank', 'Kasse / Debitoren', 'Bank / Kreditoren']
const CORRECT_ANSWER = 'Bank / Debitoren'
const WEEKLY_PROGRESS = 68

/**
 * Purely decorative product preview built with HTML and CSS.
 * Exposed to assistive technology as a single image with a description.
 */
export function DashboardMockup() {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.window}
        role="img"
        aria-label="Beispielhafte Darstellung eines Dashboards für Lernende mit Wochenfortschritt, einer aktuellen Aufgabe zu Buchungssätzen im Rechnungswesen und Themenkarten mit Lernständen."
      >
        <div className={styles.topBar}>
          <span className={styles.dots}>
            <span />
            <span />
            <span />
          </span>
          <span className={styles.course}>KV-Ausbildung · Rechnungswesen</span>
          <span className={styles.avatar}>LM</span>
        </div>

        <div className={styles.body}>
          <div className={styles.greeting}>
            <p className={styles.greetingTitle}>Guten Morgen, Lea</p>
            <p className={styles.greetingText}>3 Übungen sind heute für dich empfohlen.</p>
          </div>

          <div className={styles.grid}>
            <div className={`${styles.card} ${styles.progressCard}`}>
              <span
                className={styles.ring}
                style={{ '--progress': WEEKLY_PROGRESS } as CSSProperties}
              >
                <span className={styles.ringValue}>{WEEKLY_PROGRESS} %</span>
              </span>
              <div>
                <p className={styles.cardLabel}>Wochenziel</p>
                <p className={styles.trend}>
                  <Icon name="trendUp" />
                  +12 % seit Montag
                </p>
              </div>
            </div>

            <div className={`${styles.card} ${styles.taskCard}`}>
              <div className={styles.taskHeader}>
                <span className={styles.chip}>Buchungssätze</span>
                <span className={styles.taskCount}>Aufgabe 4 von 8</span>
              </div>
              <p className={styles.question}>
                Ein Kunde bezahlt eine offene Rechnung per Bank. Welcher Buchungssatz ist korrekt?
              </p>
              <div className={styles.options}>
                {answerOptions.map((option) => (
                  <span
                    key={option}
                    className={`${styles.option} ${option === CORRECT_ANSWER ? styles.optionSelected : ''}`}
                  >
                    {option === CORRECT_ANSWER && <Icon name="check" />}
                    {option}
                  </span>
                ))}
              </div>
              <p className={styles.hint}>
                <Icon name="lightbulb" />
                Beim Zahlungseingang steigt das Bankguthaben und die offene Forderung gegenüber dem
                Kunden wird reduziert.
              </p>
            </div>
          </div>

          <div className={styles.topics}>
            {topics.map((topic) => (
              <div key={topic.title} className={`${styles.topic} ${styles[topic.status]}`}>
                <p className={styles.topicTitle}>{topic.title}</p>
                <span className={styles.bar}>
                  <span style={{ width: `${topic.progress}%` }} />
                </span>
                <p className={styles.topicStatus}>{statusLabels[topic.status]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`${styles.floating} ${styles.floatingTop}`} aria-hidden="true">
        <span className={styles.floatingIcon}>
          <Icon name="search" />
        </span>
        <span>
          <strong>Lernbedarf erkannt</strong>
          <br />
          Debitorenbuchhaltung
        </span>
      </div>

      <div className={`${styles.floating} ${styles.floatingBottom}`} aria-hidden="true">
        <span className={`${styles.floatingIcon} ${styles.floatingIconSuccess}`}>
          <Icon name="check" />
        </span>
        <span>
          <strong>Nächste Aufgabe angepasst</strong>
          <br />
          Schwierigkeit: mittel
        </span>
      </div>
    </div>
  )
}
