import { privacyPoints } from '../../data/content'
import { Icon } from '../Icon/Icon'
import { Reveal } from '../Reveal/Reveal'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import styles from './Privacy.module.css'

export function Privacy() {
  return (
    <section id="sicherheit" className={styles.section} aria-labelledby="privacy-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.intro}>
          <SectionHeader
            id="privacy-title"
            eyebrow="Datenschutz & Kontrolle"
            title="Ihre Inhalte bleiben unter Ihrer Kontrolle"
            align="start"
            inverted
          >
            <p>
              Schulen arbeiten mit sensiblen Informationen. Deshalb ist die Plattform darauf
              ausgelegt, Zugriffe klar zu regeln, Daten sparsam zu verarbeiten und Lernende gezielt
              zu unterstützen.
            </p>
          </SectionHeader>
        </div>

        <ul className={styles.grid}>
          {privacyPoints.map((point, index) => (
            <li key={point.title}>
              <Reveal className={styles.cardWrapper} delay={index * 60}>
                <div className={styles.card}>
                  <span className={styles.icon}>
                    <Icon name={point.icon} />
                  </span>
                  <div>
                    <h3 className={styles.title}>{point.title}</h3>
                    <p className={styles.text}>{point.description}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
