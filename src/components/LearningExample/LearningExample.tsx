import type { ReactNode } from 'react'
import { learningSteps } from '../../data/content'
import type { LearningStepKind } from '../../types'
import { Icon } from '../Icon/Icon'
import { Reveal } from '../Reveal/Reveal'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import styles from './LearningExample.module.css'

function MistakeVisual() {
  return (
    <div className={styles.visual}>
      <p className={styles.caption}>Zahlungseingang eines Kunden</p>
      <p className={`${styles.entry} ${styles.entryWrong}`}>
        <span className={styles.entryLabel}>Gebucht</span>
        <span className={styles.entryValue}>Debitoren / Bank</span>
        <Icon name="close" className={styles.entryIcon} label="falsch" />
      </p>
      <p className={`${styles.entry} ${styles.entryCorrect}`}>
        <span className={styles.entryLabel}>Korrekt</span>
        <span className={styles.entryValue}>Bank / Debitoren</span>
        <Icon name="check" className={styles.entryIcon} label="richtig" />
      </p>
      <p className={`${styles.status} ${styles.statusError}`}>
        <Icon name="warning" />
        3× gleiches Fehlermuster
      </p>
    </div>
  )
}

function EasierVisual() {
  return (
    <div className={styles.visual}>
      <ul className={styles.rows}>
        <li>
          <span>Bank</span>
          <span className={styles.tag}>Soll</span>
          <Icon name="check" className={styles.rowCheck} label="richtig" />
        </li>
        <li>
          <span>Debitoren</span>
          <span className={styles.tag}>Haben</span>
          <Icon name="check" className={styles.rowCheck} label="richtig" />
        </li>
      </ul>
      <div className={styles.level}>
        <span className={styles.levelLabel}>Schwierigkeit</span>
        <span className={styles.levelBars} aria-label="Stufe 1 von 3" role="img">
          <span className={styles.levelActive} />
          <span />
          <span />
        </span>
      </div>
    </div>
  )
}

function ExplainVisual() {
  return (
    <div className={styles.visual}>
      <ul className={styles.rows}>
        <li>
          <span>Bank</span>
          <span className={styles.change}>
            <span aria-hidden="true">↑</span> Guthaben steigt
          </span>
        </li>
        <li>
          <span>Debitoren</span>
          <span className={styles.change}>
            <span aria-hidden="true">↓</span> Forderung sinkt
          </span>
        </li>
      </ul>
      <p className={`${styles.status} ${styles.statusInfo}`}>
        <Icon name="lightbulb" />
        Buchungssatz: Bank / Debitoren
      </p>
    </div>
  )
}

function PracticeVisual() {
  return (
    <div className={styles.visual}>
      <ul className={styles.rows}>
        <li>
          <span>Teilzahlung eines Kunden</span>
          <Icon name="check" className={styles.rowCheck} label="richtig" />
        </li>
        <li>
          <span>Zahlung mit Skontoabzug</span>
          <Icon name="check" className={styles.rowCheck} label="richtig" />
        </li>
      </ul>
      <p className={`${styles.status} ${styles.statusSuccess}`}>
        <Icon name="trendUp" />
        Schwierigkeit schrittweise erhöht
      </p>
    </div>
  )
}

const stepVisuals: Record<LearningStepKind, () => ReactNode> = {
  mistake: MistakeVisual,
  easier: EasierVisual,
  explain: ExplainVisual,
  practice: PracticeVisual,
}

export function LearningExample() {
  return (
    <section className={styles.section} aria-labelledby="example-title">
      <div className="container">
        <SectionHeader
          id="example-title"
          eyebrow="Ein Beispiel aus der Praxis"
          title="Wie die Plattform auf wiederkehrende Fehler reagiert"
        >
          <p>
            Eine lernende Person beantwortet mehrere Aufgaben zur Debitorenbuchhaltung falsch. Statt
            einfach weitere gleichartige Aufgaben zu stellen, erkennt die Plattform das Fehlermuster
            und passt den Lernweg Schritt für Schritt an.
          </p>
        </SectionHeader>

        <ol className={styles.flow}>
          {learningSteps.map((step, index) => {
            const Visual = stepVisuals[step.kind]
            return (
              <li key={step.kind} className={`${styles.flowItem} ${styles[step.kind]}`}>
                <Reveal className={styles.reveal} delay={index * 120}>
                  <article className={styles.card}>
                    <p className={styles.stepLabel}>{step.label}</p>
                    <h3 className={styles.title}>{step.title}</h3>
                    <Visual />
                    <p className={styles.text}>{step.description}</p>
                  </article>
                </Reveal>
                {index < learningSteps.length - 1 && (
                  <span className={styles.connector} aria-hidden="true">
                    <Icon name="arrowRight" />
                  </span>
                )}
              </li>
            )
          })}
        </ol>

        <p className={styles.note}>
          Die Lehrperson sieht im Dashboard, bei welchen Themen Unterstützung notwendig ist, und
          kann bei Bedarf gezielt eingreifen.
        </p>
      </div>
    </section>
  )
}
