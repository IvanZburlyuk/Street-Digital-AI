import { test, expect } from '@playwright/test'
import { PNG } from 'pngjs'
import pixelmatch from 'pixelmatch'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { expectedGeometry } from './expected-geometry'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const REFERENCE_PATH = path.join(ROOT, 'design', 'reference.png')
const RESULTS_DIR = path.join(ROOT, 'test-results')

const FRAME_WIDTH = 1754
const FRAME_HEIGHT = 1240

test.beforeAll(() => {
  fs.mkdirSync(RESULTS_DIR, { recursive: true })
})

test('portfolio summary matches Figma reference', async ({ page }) => {
  await page.setViewportSize({ width: FRAME_WIDTH, height: FRAME_HEIGHT })
  await page.goto('/')

  await page.evaluate(() => document.fonts.ready)
  await page.waitForFunction(() =>
    Array.from(document.images).every((img) => img.complete && img.naturalWidth > 0),
  )
  await page.waitForTimeout(100)

  const box = await page.locator('body').boundingBox()
  expect(box, 'page must render at the exact frame size').not.toBeNull()

  const actualPath = path.join(RESULTS_DIR, 'actual.png')
  await page.screenshot({ path: actualPath, clip: { x: 0, y: 0, width: FRAME_WIDTH, height: FRAME_HEIGHT } })

  const actual = PNG.sync.read(fs.readFileSync(actualPath))
  const reference = PNG.sync.read(fs.readFileSync(REFERENCE_PATH))

  expect(actual.width, 'rendered width must equal the Figma frame width').toBe(reference.width)
  expect(actual.height, 'rendered height must equal the Figma frame height').toBe(reference.height)

  const diff = new PNG({ width: actual.width, height: actual.height })
  const mismatchedPixels = pixelmatch(actual.data, reference.data, diff.data, actual.width, actual.height, {
    threshold: 0.1,
    includeAA: false,
  })
  fs.writeFileSync(path.join(RESULTS_DIR, 'diff.png'), PNG.sync.write(diff))

  const totalPixels = actual.width * actual.height
  const mismatchPercent = (mismatchedPixels / totalPixels) * 100
  fs.writeFileSync(
    path.join(RESULTS_DIR, 'pixel-diff.json'),
    JSON.stringify({ mismatchedPixels, totalPixels, mismatchPercent }, null, 2),
  )

  // eslint-disable-next-line no-console
  console.log(`Pixel mismatch: ${mismatchPercent.toFixed(3)}% (${mismatchedPixels}/${totalPixels})`)

  const geometryResults = []
  for (const expected of expectedGeometry) {
    const locator = page.locator(expected.selector)
    const rect = await locator.boundingBox()
    const dx = rect ? rect.x - expected.x : null
    const dy = rect ? rect.y - expected.y : null
    const dw = rect ? rect.width - expected.width : null
    const dh = rect ? rect.height - expected.height : null
    geometryResults.push({ selector: expected.selector, expected, actual: rect, delta: { dx, dy, dw, dh } })
  }
  fs.writeFileSync(path.join(RESULTS_DIR, 'geometry.json'), JSON.stringify(geometryResults, null, 2))

  for (const result of geometryResults) {
    expect(result.actual, `${result.selector} should be present`).not.toBeNull()
    const TOLERANCE = 1
    expect(Math.abs(result.delta.dx ?? Infinity), `${result.selector} x`).toBeLessThanOrEqual(TOLERANCE)
    expect(Math.abs(result.delta.dy ?? Infinity), `${result.selector} y`).toBeLessThanOrEqual(TOLERANCE)
    expect(Math.abs(result.delta.dw ?? Infinity), `${result.selector} width`).toBeLessThanOrEqual(TOLERANCE)
    expect(Math.abs(result.delta.dh ?? Infinity), `${result.selector} height`).toBeLessThanOrEqual(TOLERANCE)
  }

  expect(mismatchPercent, 'overall pixel mismatch must be <= 1.5%').toBeLessThanOrEqual(1.5)
})
