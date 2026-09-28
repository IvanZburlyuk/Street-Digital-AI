import type { KpiTile } from '../../mocks/kpis'
import styles from './KpiBar.module.css'

const arrow = { success: '↑', error: '↓' } as const

function KpiCard({ tile, index }: { tile: KpiTile; index: number }) {
  return (
    <div
      className={styles.tile}
      style={{ height: tile.cardHeight }}
      data-testid={`kpi-tile-${index}`}
    >
      <p className={styles.heading}>{tile.label}</p>
      <div className={styles.body} style={{ gap: tile.valueDeltaGap }}>
        <div className={styles.valueRow}>
          <p className={styles.value}>{tile.value}</p>
        </div>
        <p className={styles.deltaRow}>
          <span className={styles[tile.trend]}>
            {arrow[tile.trend]} {tile.delta}
          </span>
          {tile.note ? (
            <>
              <span> </span>
              <span className={styles.note}>·</span>
              <span className={styles.dot}> </span>
              <span className={styles.note}>{tile.note}</span>
            </>
          ) : null}
        </p>
      </div>
    </div>
  )
}

export function KpiBar({ tiles }: { tiles: KpiTile[] }) {
  return (
    <div className={styles.bar} data-testid="kpi-bar">
      {tiles.map((tile, index) => (
        <KpiCard key={tile.label} tile={tile} index={index} />
      ))}
    </div>
  )
}
