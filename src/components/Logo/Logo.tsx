import { siteConfig } from '../../data/siteConfig'
import styles from './Logo.module.css'

type LogoProps = {
  inverted?: boolean
}

export function Logo({ inverted = false }: LogoProps) {
  return (
    <span className={`${styles.logo} ${inverted ? styles.inverted : ''}`}>
      <svg className={styles.mark} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <rect width="32" height="32" rx="8" className={styles.markBackground} />
        <path
          d="M8 21.5 13.5 16l4 3.5L24 11"
          fill="none"
          stroke="#a78bfa"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="11" r="2.6" fill="#34d399" />
      </svg>
      <span className={styles.name}>{siteConfig.productName}</span>
    </span>
  )
}
