import { CardShell } from '../CardShell/CardShell'
import type { TrendChart } from '../../mocks/trends'
import { portfolioTrendsSubtitle } from '../../mocks/trends'
import styles from './PortfolioTrendsCard.module.css'

const arrow = { success: '↑', error: '↓' } as const

export function PortfolioTrendsCard({
  charts,
  width,
  height,
}: {
  charts: TrendChart[]
  width: number
  height: number
}) {
  return (
    <CardShell
      title="Portfolio trends"
      subtitle={portfolioTrendsSubtitle}
      gap={16}
      width={width}
      height={height}
      data-testid="portfolio-trends-card"
    >
      <div className={styles.charts}>
        {charts.map((chart) => (
          <div className={styles.chart} key={chart.label}>
            <div>
              <p className={styles.label}>{chart.label}</p>
              <div className={styles.valueRow}>
                <p className={styles.value}>{chart.value}</p>
                <span className={`${styles.delta} ${styles[chart.trend]}`}>
                  {arrow[chart.trend]} {chart.delta}
                </span>
              </div>
            </div>
            <div className={styles.bars}>
              {chart.barHeights.map((height, i) => (
                <div className={styles.barColumn} key={chart.months[i]}>
                  <div className={styles.barFill} style={{ height: `${height}px` }} />
                  <p className={styles.monthLabel}>{chart.months[i]}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </CardShell>
  )
}
