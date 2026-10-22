import { trustItems } from '../../data/content'
import { DashboardMockup } from '../DashboardMockup/DashboardMockup'
import { Icon } from '../Icon/Icon'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <h1 id="hero-title" className={styles.title}>
            Jeder Lernende lernt anders. <span className={styles.highlight}>Die nächsten Aufgaben sollten es auch.</span>
          </h1>

          <p className={styles.lead}>
            Unsere KI-gestützte Lernplattform erkennt individuelle Stärken und Wissenslücken,
            berücksichtigt frühere Fehler und passt Aufgaben, Erklärungen und Schwierigkeitsgrad
            gezielt an. So unterstützt sie Lernende auf ihrem persönlichen Lernweg und gibt
            Lehrpersonen einen transparenten Einblick in den Lernfortschritt.
          </p>

          <div className={styles.buttons}>
            <a href="#demo" className="btn btn-primary">
              Demo anfragen
              <Icon name="arrowRight" />
            </a>
            <a href="#funktionsweise" className="btn btn-secondary">
              So funktioniert es
            </a>
          </div>

          <ul className={styles.trustList} aria-label="Merkmale der Plattform">
            {trustItems.map((item) => (
              <li key={item} className={styles.trustItem}>
                <Icon name="check" className={styles.trustIcon} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.visual}>
          <DashboardMockup />
        </div>
      </div>
    </section>
  )
}
