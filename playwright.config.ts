import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  fullyParallel: false,
  workers: 1,
  reporter: [['list']],
  webServer: {
    command: 'npm run build && npm run preview',
    url: 'http://localhost:4173',
    reuseExistingServer: false,
    timeout: 60_000,
  },
  use: {
    baseURL: 'http://localhost:4173',
    viewport: { width: 1754, height: 1240 },
    deviceScaleFactor: 1,
    launchOptions: {
      args: ['--disable-lcd-text', '--font-render-hinting=none', '--force-color-profile=srgb'],
    },
  },
})
