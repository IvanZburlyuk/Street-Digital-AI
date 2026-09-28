import { createTheme, type MantineColorsTuple } from '@mantine/core'
import { color, fontSize, radius, spacing } from './tokens'

/**
 * Mantine requires every color to be a 10-shade tuple. Figma only defines a
 * single flat value for each of these (no ramp exists in the file), so the
 * tuple repeats that one real value at every index — nothing is invented.
 * `primaryShade` below pins index 6 as "the" shade Mantine components use,
 * which is where the real Figma value lives.
 */
function flatTuple(hex: string): MantineColorsTuple {
  return [hex, hex, hex, hex, hex, hex, hex, hex, hex, hex]
}

/**
 * `gray` is the one color with more than one real Figma value, so it is a
 * genuine (if short) ramp built entirely from real tokens:
 *   0 bg-white · 1 bg-weak · 2 table-bg-header · 3 (dup of 2, unused)
 *   4 border-primary · 5 text-inactive · 6 text-subtle · 7 text-third
 *   8 text-secondary · 9 text-primary
 */
const gray: MantineColorsTuple = [
  color.background.body.bgWhite,
  color.background.body.bgWeak,
  color.background.table.tableBgHeader,
  color.background.table.tableBgHeader,
  color.border.body.borderPrimary,
  color.text.body.textInactive,
  color.text.body.textSubtle,
  color.text.body.textThird,
  color.text.body.textSecondary,
  color.text.body.textPrimary,
]

export const theme = createTheme({
  fontFamily: 'Inter, sans-serif',
  fontFamilyMonospace: 'Inter, sans-serif',
  primaryColor: 'chartPurple',
  primaryShade: 6,
  black: color.text.body.textPrimary,
  white: color.background.body.bgWhite,
  colors: {
    gray,
    chartPurple: flatTuple('#a05eff'),
    success: flatTuple(color.text.status.textSuccess),
    error: flatTuple(color.text.status.textError),
    warning: flatTuple('#e59a04'),
  },
  fontSizes: {
    exs: `${fontSize.exs / 16}rem`,
    sm: `${fontSize.sm / 16}rem`,
    md: `${fontSize.base / 16}rem`,
    lg: `${fontSize.lg / 16}rem`,
    xl: `${fontSize.xl / 16}rem`,
  },
  lineHeights: {
    exs: '20px',
    sm: '24px',
    md: '28px',
    lg: '32px',
  },
  headings: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: '600',
  },
  spacing: {
    xs: `${spacing[',5']}px`,
    sm: `${spacing[1]}px`,
    md: `${spacing[3]}px`,
    lg: `${spacing[4]}px`,
    xl: `${spacing[5]}px`,
  },
  radius: {
    xs: `${radius.sm}px`,
    sm: `${radius.sm}px`,
    md: `${radius.md}px`,
    lg: `${radius.lg}px`,
    xl: `${radius.lg}px`,
  },
  defaultRadius: 'md',
  shadows: {
    // The frame uses flat 1px borders, not shadows — no shadow token exists
    // in the Figma file. Left at Mantine's default so nothing on this page
    // (which never sets a `shadow` prop) is affected.
  },
  components: {
    Table: {
      defaultProps: {
        verticalSpacing: 0,
        horizontalSpacing: 0,
        withRowBorders: false,
        highlightOnHover: false,
      },
    },
  },
})
