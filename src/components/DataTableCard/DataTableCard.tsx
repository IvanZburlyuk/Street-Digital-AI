import { useMemo } from 'react'
import { Table } from '@mantine/core'
import { createColumnHelper, getCoreRowModel, useReactTable, flexRender } from '@tanstack/react-table'
import { CardShell } from '../CardShell/CardShell'
import type { MetricCell, PropertyTableRow } from '../../mocks/tables'
import { tableColumns } from '../../mocks/tables'
import styles from './DataTableCard.module.css'

const columnHelper = createColumnHelper<PropertyTableRow>()

function MetricCellView({ cell }: { cell: MetricCell }) {
  const valueToneClass = cell.tone === 'plain' ? undefined : styles[cell.tone]
  const deltaToneClass = cell.deltaTone ? styles[cell.deltaTone] : undefined
  return (
    <div className={styles.metricCell}>
      <p className={`${styles.metricValue} ${valueToneClass ?? ''}`}>{cell.value}</p>
      {cell.delta ? (
        <p className={`${styles.metricDelta} ${deltaToneClass ?? ''}`}>
          {cell.deltaTone === 'error' ? '↓' : '↑'}
          {cell.delta}
        </p>
      ) : null}
    </div>
  )
}

const columns = [
  columnHelper.accessor('property', {
    header: 'Property',
    cell: (info) => <p className={styles.propertyText}>{info.getValue()}</p>,
  }),
  columnHelper.accessor('lifecycle', {
    header: 'Lifecycle',
    cell: (info) => <p className={styles.lifecycleText}>{info.getValue()}</p>,
  }),
  columnHelper.accessor('occupancy', {
    header: 'Occupancy',
    cell: (info) => <MetricCellView cell={info.getValue()} />,
  }),
  columnHelper.accessor('exposure', {
    header: 'Exposure',
    cell: (info) => <p className={styles.plainText}>{info.getValue().value}</p>,
  }),
  columnHelper.accessor('digitalMarketing', {
    header: 'Digital Marketing',
    cell: (info) => <MetricCellView cell={info.getValue()} />,
  }),
  columnHelper.accessor('adSourcePerformance', {
    header: 'Ad Source Performance',
    cell: (info) => <MetricCellView cell={info.getValue()} />,
  }),
  columnHelper.accessor('onsiteCallPerformance', {
    header: 'Onsite Call Performance',
    cell: (info) => <MetricCellView cell={info.getValue()} />,
  }),
  columnHelper.accessor('onsiteConversion', {
    header: 'Onsite Conversion',
    cell: (info) => <MetricCellView cell={info.getValue()} />,
  }),
]

export function DataTableCard({
  title,
  rows,
  propertiesCount,
  width,
  height,
  testId,
}: {
  title: string
  rows: PropertyTableRow[]
  propertiesCount: number
  width: number
  height: number
  testId: string
}) {
  const table = useReactTable({
    data: rows,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  const colWidths = useMemo(() => tableColumns.map((c) => c.width), [])

  return (
    <CardShell
      title={title}
      propertiesCount={propertiesCount}
      gap={12}
      width={width}
      height={height}
      data-testid={testId}
    >
      <Table className={styles.table}>
        <colgroup>
          {colWidths.map((w, i) => (
            <col key={tableColumns[i].key} style={{ width: w }} />
          ))}
        </colgroup>
        <Table.Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.Tr key={headerGroup.id}>
              {headerGroup.headers.map((header, i) => (
                <Table.Th
                  key={header.id}
                  className={`${styles.headerCell} ${i >= 2 ? styles.headerCellRight : ''}`}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </Table.Th>
              ))}
            </Table.Tr>
          ))}
        </Table.Thead>
        <Table.Tbody>
          {table.getRowModel().rows.map((row, rowIndex) => (
            <Table.Tr
              key={row.id}
              className={`${styles.bodyRow} ${rowIndex % 2 === 0 ? styles.bodyRowEven : styles.bodyRowOdd}`}
            >
              {row.getVisibleCells().map((cell) => (
                <Table.Td key={cell.id} className={styles.bodyCell}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Table.Td>
              ))}
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </CardShell>
  )
}

export type { PropertyTableRow }
