import { color, fontFamily, fontSize, fontWeight, lineHeight } from './tokens'

export interface TextStyle {
  fontFamily: string
  fontWeight: number
  fontSize: number
  lineHeight: number
  letterSpacing: number
}

/**
 * One entry per named Figma text style (`get_variable_defs` "Heading/*" and
 * "Body/*" entries). Family/weight/size/line-height/letter-spacing match
 * Figma exactly; letter-spacing is 0 on every style in this file.
 */
export const typography = {
  heading: {
    h4: {
      fontFamily: fontFamily.inter,
      fontWeight: fontWeight.semibold,
      fontSize: fontSize.xl,
      lineHeight: lineHeight.md,
      letterSpacing: 0,
    },
    h6: {
      fontFamily: fontFamily.inter,
      fontWeight: fontWeight.semibold,
      fontSize: fontSize.base,
      lineHeight: lineHeight.xs,
      letterSpacing: 0,
    },
  },
  body: {
    baseSemibold: {
      fontFamily: fontFamily.inter,
      fontWeight: fontWeight.semibold,
      fontSize: fontSize.base,
      lineHeight: lineHeight.xs,
      letterSpacing: 0,
    },
    mediumSemibold: {
      fontFamily: fontFamily.inter,
      fontWeight: fontWeight.semibold,
      fontSize: fontSize.md,
      lineHeight: lineHeight['sm-2'],
      letterSpacing: 0,
    },
    smallSemibold: {
      fontFamily: fontFamily.inter,
      fontWeight: fontWeight.semibold,
      fontSize: fontSize.sm,
      lineHeight: lineHeight.exs,
      letterSpacing: 0,
    },
    smallMedium: {
      fontFamily: fontFamily.inter,
      fontWeight: fontWeight.medium,
      fontSize: fontSize.sm,
      lineHeight: lineHeight.exs,
      letterSpacing: 0,
    },
    smallRegular: {
      fontFamily: fontFamily.inter,
      fontWeight: fontWeight.regular,
      fontSize: fontSize.sm,
      lineHeight: lineHeight.exs,
      letterSpacing: 0,
    },
    extraSmallMedium13: {
      fontFamily: fontFamily.inter,
      fontWeight: fontWeight.medium,
      fontSize: 13,
      lineHeight: 16,
      letterSpacing: 0,
    },
    extraSmallMedium: {
      fontFamily: fontFamily.inter,
      fontWeight: fontWeight.medium,
      fontSize: fontSize.exs,
      lineHeight: 16,
      letterSpacing: 0,
    },
    extraSmallRegular: {
      fontFamily: fontFamily.inter,
      fontWeight: fontWeight.regular,
      fontSize: fontSize.exs,
      lineHeight: 16,
      letterSpacing: 0,
    },
  },
  /** One-off, see tokens.raw.headerTitleSize — not a named Figma style. */
  headerTitle: {
    fontFamily: fontFamily.inter,
    fontWeight: fontWeight.semibold,
    fontSize: 28,
    lineHeight: 32,
    letterSpacing: 0,
  },
} as const satisfies Record<string, TextStyle | Record<string, TextStyle>>

export const textColor = {
  primary: color.text.body.textPrimary,
  secondary: color.text.body.textSecondary,
  third: color.text.body.textThird,
  subtle: color.text.body.textSubtle,
  inactive: color.text.body.textInactive,
  success: color.text.status.textSuccess,
  error: color.text.status.textError,
  tableHeader: color.background.table.tableTextHeaderPrimary,
} as const
