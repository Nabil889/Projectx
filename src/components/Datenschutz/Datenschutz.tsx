import type { ReactNode } from 'react'
import { datenschutz, type PrivacyBlock } from '../../data/datenschutz'
import { impressum } from '../../data/impressum'
import { LegalPage } from '../LegalPage/LegalPage'
import styles from './Datenschutz.module.css'

const LINK_PATTERN = /([\w.-]+@[\w-]+\.[a-z]{2,}|https?:\/\/[^\s,]+)/g

/** Macht E-Mail-Adressen und URLs im Fliesstext klickbar. */
function linkify(text: string): ReactNode[] {
  return text.split(LINK_PATTERN).map((part, index) => {
    if (index % 2 === 0) return part
    const href = part.includes('@') ? `mailto:${part}` : part
    return (
      <a key={index} href={href}>
        {part}
      </a>
    )
  })
}

function ContactCard() {
  const { company, responsiblePersons, contact } = impressum

  return (
    <address className={styles.contact}>
      <p>
        <strong>{company.name}</strong>
        <br />
        {responsiblePersons.join(' und ')}
        <br />
        {company.street}
        <br />
        {company.postalCode} {company.city}
        <br />
        {company.country}
      </p>
      <p>
        E-Mail: <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <br />
        Telefon: <a href={`tel:${contact.phoneHref}`}>{contact.phoneDisplay}</a>
        <br />
        Website: <a href={company.website}>{company.websiteDisplay}</a>
      </p>
    </address>
  )
}

function Block({ block }: { block: PrivacyBlock }) {
  if (typeof block === 'string') return <p>{linkify(block)}</p>
  if ('heading' in block) return <h3>{block.heading}</h3>
  if ('list' in block) {
    return (
      <ul>
        {block.list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )
  }
  return <ContactCard />
}

export function Datenschutz() {
  const stand = `Stand: ${datenschutz.updatedAt}`

  return (
    <LegalPage id="datenschutzerklaerung" title="Datenschutzerklärung" meta={stand}>
      {datenschutz.sections.map((section) => (
        <SectionBlocks key={section.title} title={section.title} blocks={section.blocks} />
      ))}
      <p className={styles.footnote}>Stand der Datenschutzerklärung: {datenschutz.updatedAt}</p>
    </LegalPage>
  )
}

function SectionBlocks({ title, blocks }: { title: string; blocks: PrivacyBlock[] }) {
  return (
    <>
      <h2>{title}</h2>
      {blocks.map((block, index) => (
        <Block key={index} block={block} />
      ))}
    </>
  )
}
