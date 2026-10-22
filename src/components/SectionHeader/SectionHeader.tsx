import type { ReactNode } from 'react'
import styles from './SectionHeader.module.css'

type SectionHeaderProps = {
  id: string
  eyebrow: string
  title: string
  children?: ReactNode
  align?: 'center' | 'start'
  inverted?: boolean
}

export function SectionHeader({
  id,
  eyebrow,
  title,
  children,
  align = 'center',
  inverted = false,
}: SectionHeaderProps) {
  const classNames = [styles.header, styles[align], inverted ? styles.inverted : '']
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classNames}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {children && <div className={styles.description}>{children}</div>}
    </div>
  )
}
