export interface OpportunityRow {
  label: string
  critical: number
  criticalWidth: number
  watch: number
  watchWidth: number
}

/** Bar track is a fixed 326px wide in the Figma frame (see design-spec §5.4). */
export const opportunityBarWidth = 326

export const opportunityAreas: OpportunityRow[] = [
  { label: 'Digital Marketing', critical: 18, criticalWidth: 196, watch: 11, watchWidth: 131 },
  { label: 'Ad Source Performance', critical: 9, criticalWidth: 66, watch: 19, watchWidth: 188 },
  { label: 'Onsite Call Performance', critical: 18, criticalWidth: 165, watch: 15, watchWidth: 175 },
  { label: 'Onsite Conversion', critical: 13, criticalWidth: 120, watch: 13, watchWidth: 120 },
]

export const opportunityAreasSubtitle = 'Properties off Benchmarks'
