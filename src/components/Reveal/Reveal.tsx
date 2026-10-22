import { useEffect, useRef } from 'react'
import type { CSSProperties, ReactNode } from 'react'
import styles from './Reveal.module.css'

type RevealProps = {
  children: ReactNode
  className?: string
  /** Delay in milliseconds, useful for staggering items in a grid. */
  delay?: number
}

/**
 * Fades content in once it scrolls into view.
 * The effect is disabled via CSS when the user prefers reduced motion.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (typeof IntersectionObserver === 'undefined') {
      element.dataset.visible = 'true'
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.dataset.visible = 'true'
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${className ?? ''}`}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  )
}
