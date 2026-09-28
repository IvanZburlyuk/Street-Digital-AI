import { CardShell } from '../CardShell/CardShell'
import type { OpportunityRow } from '../../mocks/opportunityAreas'
import { opportunityAreasSubtitle, opportunityBarWidth } from '../../mocks/opportunityAreas'
import styles from './OpportunityAreasCard.module.css'

export function OpportunityAreasCard({
  rows,
  width,
  height,
}: {
  rows: OpportunityRow[]
  width: number
  height: number
}) {
  return (
    <CardShell
      title="Opportunity Areas"
      subtitle={opportunityAreasSubtitle}
      gap={12}
      width={width}
      height={height}
      data-testid="opportunity-areas-card"
    >
      <div className={styles.rows}>
        {rows.map((row) => (
          <div className={styles.row} key={row.label}>
            <p className={styles.label}>{row.label}</p>
            <div className={styles.barGroup}>
              <div className={styles.track} style={{ maxWidth: opportunityBarWidth }}>
                <div
                  className={`${styles.segment} ${styles.criticalSegment}`}
                  style={{ width: row.criticalWidth }}
                />
                <div
                  className={`${styles.segment} ${styles.watchSegment}`}
                  style={{ width: row.watchWidth, left: row.criticalWidth }}
                />
              </div>
              <div className={styles.stat}>
                <p className={styles.statNumber}>{row.critical}</p>
                <p className={styles.statLabel}>critical</p>
              </div>
              <div className={styles.stat}>
                <p className={styles.statNumber}>{row.watch}</p>
                <p className={styles.statLabel}>watch</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </CardShell>
  )
}
