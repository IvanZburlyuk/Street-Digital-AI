/**
 * Absolute geometry (relative to the frame's top-left, i.e. the page's
 * top-left) for key elements, computed by summing nested x/y offsets from
 * Figma's `get_metadata` response for node 16898:101669. See
 * docs/design-spec.md §2 for the derivation.
 */
export interface ExpectedRect {
  selector: string
  x: number
  y: number
  width: number
  height: number
}

export const expectedGeometry: ExpectedRect[] = [
  { selector: '[data-testid="app-header"]', x: 40, y: 0, width: 1674, height: 96 },
  { selector: '[data-testid="kpi-bar"]', x: 40, y: 112, width: 1674, height: 132 },
  { selector: '[data-testid="kpi-tile-0"]', x: 40, y: 116, width: 225.43, height: 124 },
  { selector: '[data-testid="kpi-tile-2"]', x: 522.86, y: 112, width: 225.43, height: 132 },
  { selector: '[data-testid="kpi-tile-6"]', x: 1488.57, y: 116, width: 225.43, height: 124 },
  { selector: '[data-testid="portfolio-trends-card"]', x: 40, y: 260, width: 950, height: 236 },
  { selector: '[data-testid="opportunity-areas-card"]', x: 1006, y: 260, width: 708, height: 236 },
  { selector: '[data-testid="performing-card"]', x: 40, y: 512, width: 1674, height: 112 },
  { selector: '[data-testid="monitor-table-card"]', x: 40, y: 640, width: 1674, height: 264 },
  {
    selector: '[data-testid="immediate-attention-table-card"]',
    x: 40,
    y: 920,
    width: 1674,
    height: 264,
  },
  { selector: '[data-testid="app-footer"]', x: 40, y: 1204, width: 1673.44, height: 16 },
]
