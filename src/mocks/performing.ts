export interface PerformingProperty {
  name: string
  occupancy: string
  delta: string
  exposure: string
  status: string
}

export const performingPropertiesCount = 15

export const performingProperties: PerformingProperty[] = [
  { name: 'Cedar Ridge', occupancy: '98.3%', delta: '2.4%', exposure: '2.9%', status: 'Stabilized' },
  { name: 'Vantage Point', occupancy: '97.9%', delta: '2.1%', exposure: '3.2%', status: 'Stabilized' },
  { name: 'Bayard Lofts', occupancy: '97.7%', delta: '1.9%', exposure: '3.6%', status: 'Stabilized' },
  { name: 'Clayton Reserve', occupancy: '96.8%', delta: '1.6%', exposure: '4.1%', status: 'Stabilized' },
  { name: 'Riverbend Flats', occupancy: '91.7%', delta: '2.3%', exposure: '4.4%', status: 'Stabilized' },
  { name: 'Sable Court', occupancy: '96.4%', delta: '1.2%', exposure: '4.6%', status: 'Stabilized' },
]
