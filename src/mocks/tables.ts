export type CellTone = 'success' | 'error' | 'warning' | 'plain'

export interface MetricCell {
  value: string
  tone: CellTone
  delta?: string
  deltaTone?: CellTone
}

export interface PropertyTableRow {
  property: string
  lifecycle: string
  occupancy: MetricCell
  exposure: MetricCell
  digitalMarketing: MetricCell
  adSourcePerformance: MetricCell
  onsiteCallPerformance: MetricCell
  onsiteConversion: MetricCell
}

export const tableColumns = [
  { key: 'property', label: 'Property', width: 260 },
  { key: 'lifecycle', label: 'Lifecycle', width: 140 },
  { key: 'occupancy', label: 'Occupancy', width: 204.33 },
  { key: 'exposure', label: 'Exposure', width: 204.33 },
  { key: 'digitalMarketing', label: 'Digital Marketing', width: 204.33 },
  { key: 'adSourcePerformance', label: 'Ad Source Performance', width: 204.33 },
  { key: 'onsiteCallPerformance', label: 'Onsite Call Performance', width: 204.33 },
  { key: 'onsiteConversion', label: 'Onsite Conversion', width: 204.33 },
] as const

export const monitorPropertiesCount = 15
export const immediateAttentionPropertiesCount = 15

export const monitorRows: PropertyTableRow[] = [
  {
    property: 'Maple Heights',
    lifecycle: 'Renovation',
    occupancy: { value: '92.9%', tone: 'warning', delta: '1.4%', deltaTone: 'error' },
    exposure: { value: '9.8%', tone: 'plain' },
    digitalMarketing: { value: '70.3%', tone: 'success', delta: '22%', deltaTone: 'success' },
    adSourcePerformance: { value: '83.33%', tone: 'success', delta: '8%', deltaTone: 'success' },
    onsiteCallPerformance: { value: '76.47%', tone: 'success', delta: '9%', deltaTone: 'success' },
    onsiteConversion: { value: '80.4%', tone: 'success', delta: '17%', deltaTone: 'success' },
  },
  {
    property: 'Summit View',
    lifecycle: 'Stabilized',
    occupancy: { value: '92.7%', tone: 'warning', delta: '1.2%', deltaTone: 'error' },
    exposure: { value: '9.1%', tone: 'plain' },
    digitalMarketing: { value: '71.6%', tone: 'success', delta: '12%', deltaTone: 'success' },
    adSourcePerformance: { value: '80.00%', tone: 'success', delta: '3%', deltaTone: 'success' },
    onsiteCallPerformance: { value: '47.06%', tone: 'warning', delta: '2%', deltaTone: 'error' },
    onsiteConversion: { value: '80.9%', tone: 'warning', delta: '22%', deltaTone: 'error' },
  },
  {
    property: 'Harbor Ridge',
    lifecycle: 'Lease-Up',
    occupancy: { value: '92.2%', tone: 'warning', delta: '1.4%', deltaTone: 'error' },
    exposure: { value: '9.2%', tone: 'plain' },
    digitalMarketing: { value: '61.0%', tone: 'error', delta: '6%', deltaTone: 'error' },
    adSourcePerformance: { value: '61.54%', tone: 'error', delta: '8%', deltaTone: 'error' },
    onsiteCallPerformance: { value: '76.36%', tone: 'success', delta: '2%', deltaTone: 'success' },
    onsiteConversion: { value: '63.6%', tone: 'warning', delta: '4%', deltaTone: 'error' },
  },
  {
    property: 'Pine Grove',
    lifecycle: 'Stabilized',
    occupancy: { value: '91.8%', tone: 'warning', delta: '1.9%', deltaTone: 'error' },
    exposure: { value: '8.7%', tone: 'plain' },
    digitalMarketing: { value: '59.2%', tone: 'warning', delta: '22%', deltaTone: 'error' },
    adSourcePerformance: { value: '63.16%', tone: 'warning', delta: '12%', deltaTone: 'error' },
    onsiteCallPerformance: { value: '84.21%', tone: 'success', delta: '15%', deltaTone: 'success' },
    onsiteConversion: { value: '88.5%', tone: 'warning', delta: '3%', deltaTone: 'error' },
  },
  {
    property: 'Cypress Falls',
    lifecycle: 'Renovation',
    occupancy: { value: '91.8%', tone: 'warning', delta: '1.5%', deltaTone: 'error' },
    exposure: { value: '8.2%', tone: 'plain' },
    digitalMarketing: { value: '65.3%', tone: 'error', delta: '2%', deltaTone: 'error' },
    adSourcePerformance: { value: '55.56%', tone: 'error', delta: '8%', deltaTone: 'error' },
    onsiteCallPerformance: { value: '63.16%', tone: 'warning', delta: '17%', deltaTone: 'error' },
    onsiteConversion: { value: '65.7%', tone: 'warning', delta: '12%', deltaTone: 'error' },
  },
]

export const immediateAttentionRows: PropertyTableRow[] = [
  {
    property: 'Maple Heights',
    lifecycle: 'Lease-Up',
    occupancy: { value: '89.6%', tone: 'error', delta: '4.8%', deltaTone: 'error' },
    exposure: { value: '11.2%', tone: 'plain' },
    digitalMarketing: { value: '68.9%', tone: 'success', delta: '19%', deltaTone: 'success' },
    adSourcePerformance: { value: '71.5%', tone: 'success', delta: '24%', deltaTone: 'success' },
    onsiteCallPerformance: { value: '64.3%', tone: 'success', delta: '14%', deltaTone: 'success' },
    onsiteConversion: { value: '74.2%', tone: 'success', delta: '27%', deltaTone: 'success' },
  },
  {
    property: 'Summit View',
    lifecycle: 'Lease-Up',
    occupancy: { value: '88.9%', tone: 'error', delta: '2.2%', deltaTone: 'error' },
    exposure: { value: '13.9%', tone: 'plain' },
    digitalMarketing: { value: '72.1%', tone: 'success', delta: '25%', deltaTone: 'success' },
    adSourcePerformance: { value: '67.2%', tone: 'success', delta: '18%', deltaTone: 'success' },
    onsiteCallPerformance: { value: '70.9%', tone: 'warning', delta: '22%', deltaTone: 'error' },
    onsiteConversion: { value: '65.7%', tone: 'warning', delta: '16%', deltaTone: 'error' },
  },
  {
    property: 'Harbor Ridge',
    lifecycle: 'Renovation',
    occupancy: { value: '87.4%', tone: 'error', delta: '0.7%', deltaTone: 'error' },
    exposure: { value: '12.4%', tone: 'plain' },
    digitalMarketing: { value: '65.4%', tone: 'error', delta: '15%', deltaTone: 'success' },
    adSourcePerformance: { value: '73.9%', tone: 'success', delta: '26%', deltaTone: 'success' },
    onsiteCallPerformance: { value: '69.7%', tone: 'success', delta: '20%', deltaTone: 'success' },
    onsiteConversion: { value: '71.0%', tone: 'warning', delta: '23%', deltaTone: 'error' },
  },
  {
    property: 'Pine Grove',
    lifecycle: 'Stabilized',
    occupancy: { value: '86.8%', tone: 'error', delta: '3.2%', deltaTone: 'error' },
    exposure: { value: '14.5%', tone: 'plain' },
    digitalMarketing: { value: '74.8%', tone: 'warning', delta: '28%', deltaTone: 'error' },
    adSourcePerformance: { value: '66.8%', tone: 'warning', delta: '17%', deltaTone: 'error' },
    onsiteCallPerformance: { value: '72.4%', tone: 'success', delta: '25%', deltaTone: 'success' },
    onsiteConversion: { value: '67.9%', tone: 'success', delta: '18%', deltaTone: 'success' },
  },
  {
    property: 'Cypress Falls',
    lifecycle: 'Stabilized',
    occupancy: { value: '86.4%', tone: 'error', delta: '2.5%', deltaTone: 'error' },
    exposure: { value: '10.8%', tone: 'plain' },
    digitalMarketing: { value: '69.0%', tone: 'error', delta: '21%', deltaTone: 'error' },
    adSourcePerformance: { value: '75.6%', tone: 'error', delta: '29%', deltaTone: 'error' },
    onsiteCallPerformance: { value: '68.0%', tone: 'warning', delta: '19%', deltaTone: 'error' },
    onsiteConversion: { value: '73.1%', tone: 'error', delta: '26%', deltaTone: 'error' },
  },
]
