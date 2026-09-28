import type { ReactNode } from 'react'
import styles from './CardShell.module.css'

interface CardShellProps {
  title: string
  subtitle?: string
  propertiesCount?: number
  gap: number
  width?: number | string
  height?: number
  children: ReactNode
  'data-testid'?: string
}

export function CardShell({
  title,
  subtitle,
  propertiesCount,
  gap,
  width,
  height,
  children,
  'data-testid': testId,
}: CardShellProps) {
  return (
    <section className={styles.card} style={{ gap, width, height }} data-testid={testId}>
      <div className={styles.titleRow}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
        {propertiesCount !== undefined ? (
          <div className={styles.countRow}>
            <p className={styles.countNumber}>{propertiesCount}</p>
            <p className={styles.countLabel}>properties</p>
          </div>
        ) : null}
      </div>
      {children}
    </section>
  )
}
