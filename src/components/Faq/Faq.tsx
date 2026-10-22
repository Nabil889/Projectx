import { faqItems } from '../../data/content'
import { Icon } from '../Icon/Icon'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import styles from './Faq.module.css'

export function Faq() {
  return (
    <section className={styles.section} aria-labelledby="faq-title">
      <div className={`container ${styles.inner}`}>
        <SectionHeader id="faq-title" eyebrow="FAQ" title="Häufige Fragen">
          <p>Antworten auf die wichtigsten Fragen rund um die Plattform.</p>
        </SectionHeader>

        <div className={styles.list}>
          {faqItems.map((item) => (
            <details key={item.question} className={styles.item}>
              <summary className={styles.question}>
                <h3 className={styles.questionText}>{item.question}</h3>
                <span className={styles.toggle}>
                  <Icon name="chevronDown" />
                </span>
              </summary>
              <div className={styles.answer}>
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
