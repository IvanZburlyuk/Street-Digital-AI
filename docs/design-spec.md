# Street Digital AI — Portfolio Summary — Design Spec

Source: Figma file `kcHrOR1EBA5Fb1pr1rkTrH`, node `16898:101669` ("Portfolio Summary" frame).
Reference render: [`design/reference.png`](../design/reference.png) — exported at 1x, exactly **1754×1240px**.

## 1. Frame

| Property | Value |
|---|---|
| Width | 1754px |
| Height | 1240px |
| Background | `#ffffff` (Background/Body/bg-white) |
| Horizontal page margin | 40px each side (content column = 1674px) |

## 2. Layout skeleton (top → bottom, all absolute px at 1754×1240)

```
Header                              y=0     h=96
Main Container                      y=112   h=1108   (x=40, w=1674)
  content container                 y=0     h=1072  (relative to Main Container)
    KPI Bar                         y=0     h=132
    Stats Container                 y=148   h=236   (gap 16 above)
      Portfolio trends (charts)     x=0     w=950
      Opportunity Areas             x=966   w=708   (gap 16)
    Performing                      y=400   h=112   (gap 16)
    Monitor (table)                 y=528   h=264   (gap 16)
    Immediate Attention (table)     y=808   h=264   (gap 16)
  Footer                            y=1092  h=16    (20px gap above, inside Main Container)
```

Vertical rhythm between all stacked sections = **16px**. Card sections share a common shell: white bg, 1px `border-primary` border, 16px radius, 16px/24px padding (py 16 / px 24), 12–16px internal gap.

## 3. Design tokens (from `get_variable_defs`, resolved)

### Color
| Figma name | Value | Usage |
|---|---|---|
| Background/Body/bg-white | `#ffffff` | page + card backgrounds |
| Background/Body/bg-weak | `#f7f9fa` | table row stripe (even rows) |
| Background/Body/bg-black | `#252a33` | (unused directly on this frame) |
| Background/Table/Table-bg-header | `#eef0f2` | table header row bg |
| Background/Table/Table-text-header-primary | `#7a8494` | table header text |
| Border/Body/border-primary | `#cccfd5` | card borders, header rule, table row borders |
| Text/Body/text-primary | `#252a33` | headings, primary values |
| Text/Body/text-secondary | `#3f4856` | sub headings, table property names |
| Text/Body/text-third | `#596579` | meta text (dates, "·" separators) |
| Text/Body/text-subtle | `#7a8494` | tertiary meta (property count, page no.) |
| Text/Body/text-inactive | `#b3b8c1` | disabled/"·" glyph tint |
| Text/Status/text-success | `#03b79a` | positive deltas / green metrics |
| Text/Status/text-error | `#de4f46` | negative deltas / red metrics / critical bar |
| Icon/Body/icon-primary | `#7a8494` | icon default |
| Icon/Body/icon-third | `#596579` | icon secondary |

### Spacing (4px base)
`Spacing/none=0, ,5=4, 1=8, 2=12, 3=16, 4=24, 5=32, 6=40`

### Radius
`Radius/none=0, sm=4, md=8, lg=16`

### Typography (family variable `Font/Family/Inter` = `Inter`)
| Style name | Size | Line-height | Weight |
|---|---|---|---|
| Heading/H4 | 24 | 32 | 600 (SemiBold) |
| Heading/H6 | 16 | 24 | 600 (SemiBold) |
| Body/Base/Base-semibold | 16 | 24 | 600 |
| Body/Medium/Medium-semibold | 18 | 28 | 600 |
| Body/Small/Small-SemiBold | 14 | 20 | 600 |
| Body/Small/Small-medium | 14 | 20 | 500 |
| Body/Small/Small-regular | 14 | 20 | 400 |
| Body/Extra small/Extra small-medium | 13 | 16 | 500 |
| Body/Extrasmall 2/Extra small-medium | 12 | 16 | 500 |
| Body/Extrasmall 2/Extra small-regular | 12 | 16 | 400 |

Section titles ("Portfolio trends", "Opportunity Areas", "Performing", "Monitor", "Immediate Attention", header "Portfolio Summary") = Inter SemiBold, 20px/24 (header title itself is 28px/32 SemiBold, a one-off — see `raw.*`).

**Ambiguity flag:** `get_design_context` reported a literal font fallback of `'Montserrat:SemiBold'` for the 7 top KPI-bar tiles (node `16898:101676`–`101682`, heading + value text) while the identical-purpose text in the "Portfolio trends" mini-chart widgets below it reported `'Inter:SemiBold'`. Visual zoom-comparison of the reference screenshot shows the same rounded letterforms in both places (both look like the same font, distinct from the sharper "Portfolio Summary" header). No `Font/Family/Montserrat` variable exists anywhere in `get_variable_defs`; the only font-family variable in the file is `Font/Family/Inter = "Inter"`, and the named text styles bound to these nodes (Heading/H6, Heading/H4) both declare `Font/Family/Inter`. Since the task requires the token layer to be the source of truth and no Montserrat token exists, **all text in this build renders in Inter**, matching the variable defs. This is reported as an open ambiguity — a designer should confirm whether the top KPI tiles intentionally use Montserrat.

## 4. Non-token ("raw") values found on the frame

These appear in the canvas without a bound Figma variable. Declared in `tokens.ts` under `raw.*`:

| Token | Value | Figma layer |
|---|---|---|
| `raw.chartBarPurple` | `#a05eff` | "Portfolio trends" mini bar chart bars (`bars > bar > height`) |
| `raw.chartTrackGray` | `#f0f2f5` | "Opportunity Areas" bar track background |
| `raw.amberWarning` | `#e59a04` | mid-tier percentage value color in Monitor / Immediate Attention tables |
| `raw.headerTitleSize` | 28px / 32 line-height, SemiBold | Header "Portfolio Summary" (one-off size not in the type scale) |

`Text/Status/text-error` (`#de4f46`) doubles as the "critical" segment color in the Opportunity Areas bars.

## 5. Section breakdown

### 5.1 Header (`16898:101672`, instance, 1674×96)
Flex row, space-between, 1px bottom border (`border-primary`), padding 16/24.
- Logo area (flex, gap 16, center): 48×48 "AI" mark (`ai-logo-mark.svg`) → 1px×40px vertical divider (`header-divider.svg`) → Willow Bridge logomark 35.19×35.02 (`willow-bridge-logomark.svg`) + wordmark 66.57×39.96 (`willow-bridge-wordmark.svg`) inside a 109×40 box → 1px×40px divider (no asset, plain border).
- Center: "Portfolio Summary", Inter SemiBold 28/32, `text-primary` (raw size, see §4).
- Right: column, gap 8, right-aligned: "Jul 1 - Jul 30, 2026" (Inter Medium 14/20, `text-third`) over "50 properties" (Inter Regular 14/20, `text-subtle`).

### 5.2 KPI Bar (`16898:101675`, 1674×132) — 7 tiles, flex row gap 16, each `flex:1`
Card: bg white, 1px border-primary, radius 16, padding 16/24, gap 8. Heading row = label (16px, text-secondary) + 20×20 info icon (present in the component but **opacity 0 in this instance** — confirmed invisible in the reference screenshot; not rendered).
Value = 24px/32 SemiBold text-primary. Delta = 14px Medium, colored success/error, followed by " · " (text-third) and a note in text-third, with a lighter `·` glyph in text-inactive between number and unit for compound notes.

| # | Label | Value | Delta | Note |
|---|---|---|---|---|
| 1 | Occupancy | 91.7% | ↑ 2.3% (success) | — |
| 2 | Exposure | 8.6% | ↓ 1.2% (error) | — |
| 3 | Leads | 15,316 | ↑ 4.6% (success) | 306 per property |
| 4 | Lease | 1,468 | ↑ 1.3% (success) | 66.3% closing |
| 5 | Lease Revenue | $14,270,106.08 | ↑ 4.2% (success) | annualized |
| 6 | Ad Spend | $602,371.52 | ↑ 4.2% (success) | $412 per lease |
| 7 | ROAS | 22.0x | ↑ 0.8x (success) | revenue on spend |

### 5.3 Portfolio trends — mini bar charts (`16898:101684`, 950×236, left half of Stats Container)
Card, gap 16. Title row: "Portfolio trends" (20/24 SemiBold) + "February – July 2026" (Inter Medium 13/16, text-third), space-between.
Below: 5 equal-width (`flex:1`) columns, gap 32, each: label (14px SemiBold text-secondary) / value (18px/28 SemiBold text-primary) + delta (12px Medium, success/error) → 6-bar mini chart (Feb…Jul), bars 4px gap, rounded 4px top corners, fill `raw.chartBarPurple` (#a05eff), 100px max height, month labels below (10px Inter Regular, text-third).

| Metric | Value | Delta | Bar heights (Feb→Jul, px of 100) |
|---|---|---|---|
| Occupancy | 91.7% | ↑2.3% | 54,62,54,67,73,80 |
| Exposure | 91.7% | ↓1.2% | 54,28,54,67,57,80 |
| Leads | 15,316 | ↑4.6% | 62,53,39,67,68,53 |
| Applications | 2,048 | ↓6.1% | 54,80,66,50,66,72 |
| Lease | 1,468 | ↑1.3% | 49,54,63,52,80,67 |

(Heights read left-to-right as drawn Feb…Jul; exact px values captured from `get_design_context`.)

### 5.4 Opportunity Areas (`16898:101854`, 708×236, right half of Stats Container)
Card, gap 12. Title row: "Opportunity Areas" (20/24 SemiBold) / "Properties off Benchmarks" (13/16 Medium, text-third).
List of 4 rows, each: label (168px fixed, 14px SemiBold text-secondary) — bar (326px, 18px tall, track `raw.chartTrackGray`, rounded 4px) with two stacked segments (critical=`text-error` #de4f46, watch=`raw.amberWarning`-adjacent yellow #fdc83a) — then two number+unit groups ("N critical" / "N watch", number 14px SemiBold text-primary, unit 12px Medium text-subtle).

Each row's watch segment starts immediately after the critical segment (`left: criticalWidth`) — confirmed against the standalone "Opportunity Areas" component (`16780:47330`), which renders all 4 rows with both segments visibly adjacent, never overlapping.

Corner rounding is per-segment, not per-track: critical rounds only its **left** corners (`border-top-left-radius`/`border-bottom-left-radius: 4px`), watch rounds only its **right** corners — the seam where they meet is square on both sides. Confirmed from Figma's own export: the critical rectangle carries `rounded-tl`/`rounded-bl` only, the watch rectangle `rounded-tr`/`rounded-br` only.

| Row | Critical px / n | Watch px / n |
|---|---|---|
| Digital Marketing | 196px / 18 | 131px / 11 |
| Ad Source Performance | 66px / 9 | 188px / 19 |
| Onsite Call Performance | 165px / 18 | 175px / 15 |
| Onsite Conversion | 120px / 13 | 120px / 13 |

**Correction (component review, `16780:47330`):** the dashboard-embedded instance of this component (`16898:101854`, 708px wide) exports the "Onsite Conversion" watch rectangle with a `right: 207px` constraint that, at that specific card width, resolves to the same x-position as the critical rectangle — painting yellow directly over red so the critical segment is invisible. Comparing against the standalone component at its natural (829px) width shows the same `right: 207px` constraint resolving to "adjacent to critical" instead, which is clearly the intended design (it matches the other 3 rows' pattern exactly). The dashboard export's overlap is a Figma auto-layout artifact of that instance's width, not the intended design — the app now always renders the watch segment adjacent to critical.

### 5.5 Performing (`16898:101863`, 1674×112)
Card, gap 12. Title row: "Performing" (20/24 SemiBold) / "15 properties" (number 14px SemiBold text-primary + " properties" 12px Medium text-subtle).
6 equal columns (flex:1, gap 32) separated by 1px vertical divider lines (`divider-vertical.svg`, rotated 90°, full column height). Each column: `"{Name} — {value}% {arrow}{delta}%"` (name = 14 SemiBold text-primary, em dash 14 SemiBold text-secondary, value 16px/24 SemiBold success-colored, delta 12px Medium success-colored) then a second line `"{exposure}% Exposure · {status}"` (12px Medium text-third).

| Property | Occupancy | Δ | Exposure | Status |
|---|---|---|---|---|
| Cedar Ridge | 98.3% | ↑2.4% | 2.9% | Stabilized |
| Vantage Point | 97.9% | ↑2.1% | 3.2% | Stabilized |
| Bayard Lofts | 97.7% | ↑1.9% | 3.6% | Stabilized |
| Clayton Reserve | 96.8% | ↑1.6% | 4.1% | Stabilized |
| Riverbend Flats | 91.7% | ↑2.3% | 4.4% | Stabilized |
| Sable Court | 96.4% | ↑1.2% | 4.6% | Stabilized |

### 5.6 Data tables — Monitor & Immediate Attention (`16898:101959`, `16898:102044`, both 1674×264)
Card, gap 12. Title row: name (20/24 SemiBold) / "15 properties" (same pattern as 5.5).
Table, 8 columns, fixed widths: Property 260 / Lifecycle 140 / Occupancy 204.33 / Exposure 204.33 / Digital Marketing 204.33 / Ad Source Performance 204.33 / Onsite Call Performance 204.33 / Onsite Conversion 204.33 (sums to 1626 = content width 1674 − 2×24 padding).
Header row: bg `table-bg-header` #eef0f2, text `table-text-header-primary` #7a8494, 14px SemiBold, 8/16 padding, bottom border. Body rows height 32, alternating bg white / `bg-weak` #f7f9fa, 1px bottom border `border-primary`, 6/16 padding.
- Property cell: 14px Medium, text-secondary, left aligned.
- Lifecycle cell: 14px Regular, text-secondary, left aligned.
- Occupancy / Exposure / metric cells: right aligned; value 14px SemiBold + delta 12px Regular, colors per cell (success #03b79a / error #de4f46 / amber `raw.amberWarning` #e59a04) — colors are **not** a simple function of sign; exact per-cell colors are enumerated in `src/mocks/tables.ts` straight from Figma.
- Exposure column has no delta, plain 14px Medium text-secondary, right aligned.

**Monitor — rows:**
| Property | Lifecycle | Occupancy | Exposure | Digital Marketing | Ad Source Perf. | Onsite Call Perf. | Onsite Conversion |
|---|---|---|---|---|---|---|---|
| Maple Heights | Renovation | 92.9%↓1.4% (amber/red) | 9.8% | 70.3%↑22% (green/green) | 83.33%↑8% (green/green) | 76.47%↑9% (green/green) | 80.4%↑17% (green/green) |
| Summit View | Stabilized | 92.7%↓1.2% (amber/red) | 9.1% | 71.6%↑12% (green/green) | 80.00%↑3% (green/green) | 47.06%↓2% (amber/red) | 80.9%↓22% (amber/red) |
| Harbor Ridge | Lease-Up | 92.2%↓1.4% (amber/red) | 9.2% | 61.0%↓6% (red/red) | 61.54%↓8% (red/red) | 76.36%↑2% (green/green) | 63.6%↓4% (amber/red) |
| Pine Grove | Stabilized | 91.8%↓1.9% (amber/red) | 8.7% | 59.2%↓22% (amber/red) | 63.16%↓12% (amber/red) | 84.21%↑15% (green/green) | 88.5%↓3% (amber/red) |
| Cypress Falls | Renovation | 91.8%↓1.5% (amber/red) | 8.2% | 65.3%↓2% (red/red) | 55.56%↓8% (red/red) | 63.16%↓17% (amber/red) | 65.7%↓12% (amber/red) |

**Immediate Attention — rows:**
| Property | Lifecycle | Occupancy | Exposure | Digital Marketing | Ad Source Perf. | Onsite Call Perf. | Onsite Conversion |
|---|---|---|---|---|---|---|---|
| Maple Heights | Lease-Up | 89.6%↓4.8% (red/red) | 11.2% | 68.9%↑19% (green/green) | 71.5%↑24% (green/green) | 64.3%↑14% (green/green) | 74.2%↑27% (green/green) |
| Summit View | Lease-Up | 88.9%↓2.2% (red/red) | 13.9% | 72.1%↑25% (green/green) | 67.2%↑18% (green/green) | 70.9%↑22% (amber/red) | 65.7%↑16% (amber/red) |
| Harbor Ridge | Renovation | 87.4%↓0.7% (red/red) | 12.4% | 65.4%↑15% (red/green) | 73.9%↑26% (green/green) | 69.7%↑20% (green/green) | 71.0%↑23% (amber/red) |
| Pine Grove | Stabilized | 86.8%↓3.2% (red/red) | 14.5% | 74.8%↑28% (amber/red) | 66.8%↑17% (amber/red) | 72.4%↑25% (green/green) | 67.9%↑18% (green/green) |
| Cypress Falls | Stabilized | 86.4%↓2.5% (red/red) | 10.8% | 69.0%↑21% (red/red) | 75.6%↑29% (red/red) | 68.0%↑19% (amber/red) | 73.1%↑26% (red/red) |

Colors written as `(value-color/delta-color)`.

### 5.7 Footer (`16898:102129`, 1673.44×16, inside Main Container)
Flex row, space-between. Left: "STREETDIGITAL.AI" wordmark, 178.9×20 (`sd-ai-wordmark.svg`). Center: "Return to main page" (Inter Medium 12/16, text-third) + 16×16 arrow-up-right icon. Right: "Page 1" (Inter Regular 12/16, text-subtle), right-aligned, 180px box.

## 6. Assets (all downloaded via Figma's `download_assets`, saved as SVG, kebab-case, in `src/assets/`)

| File | Source layer | Size |
|---|---|---|
| `logos/ai-logo-mark.svg` | Header "logo" (AI mark) | 49×48 |
| `icons/header-divider.svg` | Header "divider" | 40×1 |
| `logos/willow-bridge-logomark.svg` | Header "image 1 [Vectorized] > logo" | 35.19×35.02 |
| `logos/willow-bridge-wordmark.svg` | Header "image 1 [Vectorized] > text" | 66.57×39.96 |
| `icons/info.svg` | KPI tile "info" — **not rendered** (opacity 0 in this frame instance; confirmed against reference screenshot) | 32×32 |
| `icons/divider-vertical.svg` | "Performing" > "Line" | 45×1 |
| `logos/sd-ai-wordmark.svg` | Footer "sd.ai logo [Vectorized]" | 178.9×20 |
| `icons/arrow-up-right.svg` | Footer "arrow-up-right" | 16×16 |

No other icons/images are used on this frame — the "tiles arrow" component seen throughout is **not an icon**; every "arrow" is a unicode glyph (↑ / ↓) inside colored text, confirmed both by `get_design_context` output and by zooming the reference screenshot. The `fi-rr-angle-small-right` and `Avatar` nodes referenced in table row templates are `hidden="true"` in this instance and are not part of the visible design.

## 7. Open items / ambiguities

1. **Font mismatch** — see §3 ambiguity flag (Montserrat fallback vs. Inter token). Resolved by using Inter everywhere per the token system.
2. **`info` icon** present in KPI tile component but opacity 0 → intentionally omitted from render.
3. Table "hidden" overflow rows (`row-1` nodes with `hidden="true"`, 20 extra stub rows at x=1472) are Figma component library placeholders for a scrollable state; not part of the visible frame and excluded.
4. Color-to-value mapping in the two data tables is not a simple threshold function (confirmed via literal per-node classes) — encoded as explicit per-cell data in `src/mocks/tables.ts` rather than a computed rule.
