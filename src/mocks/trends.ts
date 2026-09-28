import type { Trend } from './kpis'

export interface TrendChart {
  label: string
  value: string
  delta: string
  trend: Trend
  months: string[]
  /** bar heights in px, out of a 100px-tall chart, Feb -> Jul */
  barHeights: number[]
}

export const portfolioTrends: TrendChart[] = [
  {
    label: 'Occupancy',
    value: '91.7%',
    delta: '2.3%',
    trend: 'success',
    months: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    barHeights: [54, 62, 54, 67, 73, 80],
  },
  {
    label: 'Exposure',
    value: '91.7%',
    delta: '1.2%',
    trend: 'error',
    months: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    barHeights: [54, 28, 54, 67, 57, 80],
  },
  {
    label: 'Leads',
    value: '15,316',
    delta: '4.6%',
    trend: 'success',
    months: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    barHeights: [62, 53, 39, 67, 68, 53],
  },
  {
    label: 'Applications',
    value: '2,048',
    delta: '6.1%',
    trend: 'error',
    months: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    barHeights: [54, 80, 66, 50, 66, 72],
  },
  {
    label: 'Lease',
    value: '1,468',
    delta: '1.3%',
    trend: 'success',
    months: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    barHeights: [49, 54, 63, 52, 80, 67],
  },
]

export const portfolioTrendsSubtitle = 'February – July 2026'
