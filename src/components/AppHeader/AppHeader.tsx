import { headerData } from '../../mocks/header'
import aiLogoMark from '../../assets/logos/ai-logo-mark.svg'
import willowBridgeLogomark from '../../assets/logos/willow-bridge-logomark.svg'
import willowBridgeWordmark from '../../assets/logos/willow-bridge-wordmark.svg'
import styles from './AppHeader.module.css'

export function AppHeader() {
  return (
    <header className={styles.header} data-testid="app-header">
      <div className={styles.logoArea}>
        <img src={aiLogoMark} alt="Street Digital AI" className={styles.logoMark} />
        <span className={styles.divider} aria-hidden="true" />
        <div className={styles.clientLogo}>
          <img src={willowBridgeLogomark} alt="" className={styles.clientLogoMark} />
          <img src={willowBridgeWordmark} alt="Willow Bridge" className={styles.clientWordmark} />
        </div>
        <span className={styles.divider} aria-hidden="true" />
      </div>
      <h1 className={styles.title}>{headerData.title}</h1>
      <div className={styles.meta}>
        <p className={styles.metaDate}>{headerData.dateRange}</p>
        <p className={styles.metaCount}>{headerData.propertiesCount}</p>
      </div>
    </header>
  )
}
