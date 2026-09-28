import { AppHeader } from '../components/AppHeader/AppHeader'
import { AppFooter } from '../components/AppFooter/AppFooter'
import { KpiBar } from '../components/KpiBar/KpiBar'
import { PortfolioTrendsCard } from '../components/PortfolioTrendsCard/PortfolioTrendsCard'
import { OpportunityAreasCard } from '../components/OpportunityAreasCard/OpportunityAreasCard'
import { PerformingCard } from '../components/PerformingCard/PerformingCard'
import { DataTableCard } from '../components/DataTableCard/DataTableCard'

import { kpiTiles } from '../mocks/kpis'
import { portfolioTrends } from '../mocks/trends'
import { opportunityAreas } from '../mocks/opportunityAreas'
import { performingProperties, performingPropertiesCount } from '../mocks/performing'
import {
  monitorRows,
  immediateAttentionRows,
  monitorPropertiesCount,
  immediateAttentionPropertiesCount,
} from '../mocks/tables'

import styles from './PortfolioSummaryPage.module.css'

export function PortfolioSummaryPage() {
  return (
    <div className={styles.page}>
      <div className={styles.body}>
        <AppHeader />
        <main className={styles.main}>
          <div className={styles.content}>
            <KpiBar tiles={kpiTiles} />

            <div className={styles.statsRow}>
              <PortfolioTrendsCard charts={portfolioTrends} width={950} height={236} />
              <OpportunityAreasCard rows={opportunityAreas} width={708} height={236} />
            </div>

            <PerformingCard
              properties={performingProperties}
              propertiesCount={performingPropertiesCount}
              width={1674}
              height={112}
            />

            <DataTableCard
              title="Monitor"
              rows={monitorRows}
              propertiesCount={monitorPropertiesCount}
              width={1674}
              height={264}
              testId="monitor-table-card"
            />

            <DataTableCard
              title="Immediate Attention"
              rows={immediateAttentionRows}
              propertiesCount={immediateAttentionPropertiesCount}
              width={1674}
              height={264}
              testId="immediate-attention-table-card"
            />
          </div>

          <div className={styles.footerWrap}>
            <AppFooter />
          </div>
        </main>
      </div>
    </div>
  )
}
