import { footerData } from '../../mocks/header'
import sdAiWordmark from '../../assets/logos/sd-ai-wordmark.svg'
import arrowUpRight from '../../assets/icons/arrow-up-right.svg'
import styles from './AppFooter.module.css'

export function AppFooter() {
  return (
    <footer className={styles.footer} data-testid="app-footer">
      <img src={sdAiWordmark} alt="Street Digital AI" className={styles.logo} />
      <div className={styles.linkRow}>
        <p className={styles.linkText}>{footerData.returnLabel}</p>
        <img src={arrowUpRight} alt="" className={styles.linkIcon} />
      </div>
      <p className={styles.page}>{footerData.page}</p>
    </footer>
  )
}
