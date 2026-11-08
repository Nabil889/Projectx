import { impressum } from '../../data/impressum'
import { LegalPage } from '../LegalPage/LegalPage'
import styles from './Impressum.module.css'

export function Impressum() {
  const { company, responsiblePersons, contact, legalStatus, sections } = impressum

  return (
    <LegalPage id="impressum" title="Impressum">
      <div className={styles.facts}>
        <div className={styles.card}>
          <h2 className={styles.heading}>Unternehmensangaben</h2>
          <address className={styles.address}>
            <strong>{company.name}</strong>
            <br />
            {company.street}
            <br />
            {company.postalCode} {company.city}
            <br />
            {company.country}
          </address>
          <p>
            Website: <a href={company.website}>{company.websiteDisplay}</a>
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.heading}>Verantwortliche Personen</h2>
          <ul className={styles.list}>
            {responsiblePersons.map((person) => (
              <li key={person}>{person}</li>
            ))}
          </ul>
        </div>

        <div className={styles.card}>
          <h2 className={styles.heading}>Kontakt</h2>
          <dl className={styles.contact}>
            <dt>E-Mail</dt>
            <dd>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </dd>
            <dt>Telefon</dt>
            <dd>
              <a href={`tel:${contact.phoneHref}`}>{contact.phoneDisplay}</a>
            </dd>
          </dl>
        </div>
      </div>

      <h2>Rechtlicher Status</h2>
      <p>{legalStatus}</p>

      {sections.map((section) => (
        <SectionBlock key={section.title} title={section.title} paragraphs={section.paragraphs} />
      ))}
    </LegalPage>
  )
}

function SectionBlock({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <>
      <h2>{title}</h2>
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </>
  )
}
