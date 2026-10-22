import { audienceBenefits } from '../../data/content'
import { Icon } from '../Icon/Icon'
import { Reveal } from '../Reveal/Reveal'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import styles from './Benefits.module.css'

export function Benefits() {
  return (
    <section id="vorteile" className={styles.section} aria-labelledby="benefits-title">
      <div className="container">
        <SectionHeader
          id="benefits-title"
          eyebrow="Vorteile"
          title="Ein Mehrwert für alle Beteiligten"
        >
          <p>
            Die Plattform unterstützt Lernende auf ihrem persönlichen Lernweg, entlastet
            Lehrpersonen bei der Vorbereitung und passt zu den Strukturen Ihrer Schule.
          </p>
        </SectionHeader>

        <ul className={styles.grid}>
          {audienceBenefits.map((benefit, index) => (
            <li key={benefit.audience}>
              <Reveal className={styles.cardWrapper} delay={index * 100}>
                <article
                  className={`${styles.card} ${styles[benefit.tone]}`}
                  aria-labelledby={`benefit-${index}`}
                >
                  <div className={styles.cardHeader}>
                    <span className={styles.icon}>
                      <Icon name={benefit.icon} />
                    </span>
                    <h3 id={`benefit-${index}`} className={styles.title}>
                      Für {benefit.audience}
                    </h3>
                  </div>
                  <p className={styles.intro}>{benefit.intro}</p>
                  <ul className={styles.list}>
                    {benefit.items.map((item) => (
                      <li key={item} className={styles.listItem}>
                        <Icon name="check" className={styles.check} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
