import { features } from '../../data/content'
import { Icon } from '../Icon/Icon'
import { Reveal } from '../Reveal/Reveal'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import styles from './Features.module.css'

export function Features() {
  return (
    <section className={styles.section} aria-labelledby="features-title">
      <div className="container">
        <SectionHeader
          id="features-title"
          eyebrow="Funktionsübersicht"
          title="Alles, was adaptives Lernen in der Berufsbildung braucht"
        >
          <p>Die Kernfunktionen der KI-gestützten Lernplattform im Überblick.</p>
        </SectionHeader>

        <ul className={styles.grid}>
          {features.map((feature, index) => (
            <li key={feature.title}>
              <Reveal className={styles.cardWrapper} delay={(index % 4) * 70}>
                <div className={styles.card}>
                  <span className={styles.icon}>
                    <Icon name={feature.icon} />
                  </span>
                  <h3 className={styles.title}>{feature.title}</h3>
                  <p className={styles.text}>{feature.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
