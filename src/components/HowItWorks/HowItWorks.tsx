import { processSteps } from '../../data/content'
import { Icon } from '../Icon/Icon'
import { Reveal } from '../Reveal/Reveal'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import styles from './HowItWorks.module.css'

export function HowItWorks() {
  return (
    <section id="funktionsweise" className={styles.section} aria-labelledby="how-title">
      <div className="container">
        <SectionHeader id="how-title" eyebrow="Funktionsweise" title="So funktioniert es">
          <p>
            KI-gestütztes Lernen in drei Schritten: Die Plattform erkennt den Lernstand, stellt
            individuell angepasste Aufgaben bereit und unterstützt gezielt bei Wissenslücken.
          </p>
        </SectionHeader>

        <ol className={styles.steps}>
          {processSteps.map((step, index) => (
            <li key={step.number} className={styles.stepItem}>
              <Reveal className={styles.stepReveal} delay={index * 120}>
                <article className={styles.step}>
                  <div className={styles.stepTop}>
                    <span className={styles.icon}>
                      <Icon name={step.icon} />
                    </span>
                    <span className={styles.number} aria-hidden="true">
                      {String(step.number).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className={styles.title}>
                    <span className="visually-hidden">Schritt {step.number}: </span>
                    {step.title}
                  </h3>
                  <p className={styles.text}>{step.description}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
