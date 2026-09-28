export type Trend = 'success' | 'error'

export interface KpiTile {
  label: string
  value: string
  delta: string
  trend: Trend
  note?: string
  /** Figma renders this tile's card at a fixed height (row uses items-center); see design-spec.md §5.2. */
  cardHeight: 124 | 132
  /** Gap between the value and delta/note line — 16px on the 3 "tall" tiles, 8px on the rest. */
  valueDeltaGap: 8 | 16
}

export const kpiTiles: KpiTile[] = [
  { label: 'Occupancy', value: '91.7%', delta: '2.3%', trend: 'success', cardHeight: 124, valueDeltaGap: 8 },
  { label: 'Exposure', value: '8.6%', delta: '1.2%', trend: 'error', cardHeight: 124, valueDeltaGap: 8 },
  {
    label: 'Leads',
    value: '15,316',
    delta: '4.6%',
    trend: 'success',
    note: '306 per property',
    cardHeight: 132,
    valueDeltaGap: 16,
  },
  {
    label: 'Lease',
    value: '1,468',
    delta: '1.3%',
    trend: 'success',
    note: '66.3% closing',
    cardHeight: 132,
    valueDeltaGap: 16,
  },
  {
    label: 'Lease Revenue',
    value: '$14,270,106.08',
    delta: '4.2%',
    trend: 'success',
    note: 'annualized',
    cardHeight: 132,
    valueDeltaGap: 16,
  },
  {
    label: 'Ad Spend',
    value: '$602,371.52',
    delta: '4.2%',
    trend: 'success',
    note: '$412 per lease',
    cardHeight: 124,
    valueDeltaGap: 8,
  },
  {
    label: 'ROAS',
    value: '22.0x',
    delta: '0.8x',
    trend: 'success',
    note: 'revenue on spend',
    cardHeight: 124,
    valueDeltaGap: 8,
  },
]
