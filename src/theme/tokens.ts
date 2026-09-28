/**
 * Design tokens extracted from Figma (`get_variable_defs` on node 16898:101669).
 * Names mirror the Figma variable names (collection/path) so the same token
 * can be found in both Figma and code. Values are the resolved final hex/px,
 * with alias chains already flattened.
 */

export const color = {
  background: {
    body: {
      bgWhite: '#ffffff',
      bgWeak: '#f7f9fa',
      bgBlack: '#252a33',
    },
    table: {
      tableBgHeader: '#eef0f2',
      tableTextHeaderPrimary: '#7a8494',
    },
  },
  border: {
    body: {
      borderPrimary: '#cccfd5',
    },
  },
  text: {
    body: {
      textPrimary: '#252a33',
      textSecondary: '#3f4856',
      textThird: '#596579',
      textSubtle: '#7a8494',
      textInactive: '#b3b8c1',
    },
    status: {
      textSuccess: '#03b79a',
      textError: '#de4f46',
    },
  },
  icon: {
    body: {
      iconPrimary: '#7a8494',
      iconThird: '#596579',
    },
  },
} as const

export const spacing = {
  none: 0,
  ',5': 4,
  1: 8,
  2: 12,
  3: 16,
  4: 24,
  5: 32,
  6: 40,
} as const

export const radius = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 16,
} as const

export const fontFamily = {
  inter: 'Inter',
} as const

export const fontSize = {
  exs: 12,
  sm: 14,
  base: 16,
  md: 18,
  lg: 20,
  xl: 24,
} as const

export const lineHeight = {
  exs: 20,
  xs: 24,
  'sm-2': 28,
  md: 32,
} as const

export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
} as const

/**
 * Values used on the frame that have no bound Figma variable. Each is
 * commented with the Figma layer it was read from — see docs/design-spec.md
 * §4 for the full write-up. These are the only allowed "hardcoded" values
 * in the app; every component must otherwise reference a token above.
 */
export const raw = {
  /** "Portfolio trends" mini bar chart fill (`bars > bar > height`). No bound variable. */
  chartBarPurple: '#a05eff',
  /** "Opportunity Areas" bar track background (`bar container > bar`). No bound variable. */
  chartTrackGray: '#f0f2f5',
  /** "Opportunity Areas" watch-tier segment fill. No bound variable. */
  chartWatchYellow: '#fdc83a',
  /** Mid-tier ("watch") percentage color in Monitor / Immediate Attention tables. No bound variable. */
  amberWarning: '#e59a04',
  /** Header "Portfolio Summary" title — one-off size outside the type scale (SemiBold, no bound font-size variable). */
  headerTitleSize: 28,
  headerTitleLineHeight: 32,
  /** Header "Portfolio Summary" title uses Tailwind `text-black` (#000000) literally, not the text-primary variable. */
  headerTitleColor: '#000000',
} as const

export type Color = typeof color
