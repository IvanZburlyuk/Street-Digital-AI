import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'

import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'

import './theme/variables.css'
import { theme } from './theme/theme'
import { PortfolioSummaryPage } from './pages/PortfolioSummaryPage'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <PortfolioSummaryPage />
    </MantineProvider>
  </React.StrictMode>,
)
