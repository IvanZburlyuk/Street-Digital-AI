import { CardShell } from '../CardShell/CardShell'
import type { PerformingProperty } from '../../mocks/performing'
import styles from './PerformingCard.module.css'
import { Fragment } from 'react'

export function PerformingCard({
  properties,
  propertiesCount,
  width,
  height,
}: {
  properties: PerformingProperty[]
  propertiesCount: number
  width: number
  height: number
}) {
  return (
    <CardShell
      title="Performing"
      propertiesCount={propertiesCount}
      gap={12}
      width={width}
      height={height}
      data-testid="performing-card"
    >
      <div className={styles.row}>
        {properties.map((property, i) => (
          <Fragment key={property.name}>
            {i > 0 ? <span className={styles.divider} aria-hidden="true" /> : null}
            <div className={styles.item}>
              <div className={styles.nameRow}>
                <p className={styles.name}>{property.name}</p>
                <p className={styles.dash}>—</p>
                <p className={styles.occupancy}>{property.occupancy}</p>
                <p className={styles.delta}>↑{property.delta}</p>
              </div>
              <p className={styles.extra}>
                <span>{property.exposure} Exposure</span>
                <span>·</span>
                <span>{property.status}</span>
              </p>
            </div>
          </Fragment>
        ))}
      </div>
    </CardShell>
  )
}
