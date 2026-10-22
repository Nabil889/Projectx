import { teacherCards } from '../../data/content'
import { Icon } from '../Icon/Icon'
import { Reveal } from '../Reveal/Reveal'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import styles from './TeacherSection.module.css'

export function TeacherSection() {
  return (
    <section className={styles.section} aria-labelledby="teacher-title">
      <div className="container">
        <SectionHeader
          id="teacher-title"
          eyebrow="Für Lehrpersonen"
          title="Mehr Überblick. Mehr Zeit für individuelle Förderung."
        >
          <p>
            Die Plattform unterstützt Lehrpersonen dabei, Lerninhalte effizient vorzubereiten,
            Lernfortschritte sichtbar zu machen und gezielt auf den individuellen Lernbedarf ihrer
            Lernenden einzugehen.
          </p>
        </SectionHeader>

        <ul className={styles.grid}>
          {teacherCards.map((card, index) => (
            <li key={card.title}>
              <Reveal className={styles.cardWrapper} delay={index * 80}>
                <article className={styles.card}>
                  <span className={styles.icon}>
                    <Icon name={card.icon} />
                  </span>
                  <h3 className={styles.title}>{card.title}</h3>
                  <p className={styles.text}>{card.description}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
