'use client'

import { useEffect, useState } from 'react'
import { GREEN } from '@/app/components/ui'

const R = 90
const TILT = 0.5   // inclinaison de l'axe vers l'observateur (rad)
const ROLL = -0.35 // inclinaison de l'axe dans le plan de l'écran (rad)
const LATS = [-75, -60, -45, -30, -15, 0, 15, 30, 45, 60, 75]
const MERIDIANS = 24 // demi-méridiens

/** Projette un point (lat, lon) de la sphère dans le plan SVG (centre 100,100). */
function project(lat: number, lon: number): [number, number] {
  const x = Math.cos(lat) * Math.sin(lon)
  const y = Math.sin(lat)
  const z = Math.cos(lat) * Math.cos(lon)
  const y1 = y * Math.cos(TILT) + z * Math.sin(TILT)
  const x2 = x * Math.cos(ROLL) - y1 * Math.sin(ROLL)
  const y2 = x * Math.sin(ROLL) + y1 * Math.cos(ROLL)
  return [100 + R * x2, 100 - R * y2]
}

const toPath = (pts: [number, number][]) => 'M' + pts.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join('L')
const rad = (d: number) => (d * Math.PI) / 180
const steps = (n: number) => Array.from({ length: n + 1 }, (_, i) => i / n)

function buildPaths(rot: number): string[] {
  const parallels = LATS.map((la) => toPath(steps(72).map((t) => project(rad(la), t * 2 * Math.PI))))
  const meridians = Array.from({ length: MERIDIANS }, (_, k) =>
    toPath(steps(48).map((t) => project(-Math.PI / 2 + t * Math.PI, rot + (k * 2 * Math.PI) / MERIDIANS))),
  )
  return [...parallels, ...meridians]
}

/** Orbe vert en fil de fer, en rotation lente autour de son axe incliné. */
export default function Globe({ size = 300 }: { size?: number }) {
  const [rot, setRot] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    let last = 0
    const tick = (now: number) => {
      if (now - last > 33) {
        setRot((now / 1000) * 0.25)
        last = now
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <svg viewBox="0 0 200 200" aria-label="Orbe wireframe" style={{ width: size, maxWidth: '100%', height: 'auto', display: 'block' }} fill="none" stroke={GREEN} strokeWidth={0.9} strokeLinejoin="round">
      <circle cx={100} cy={100} r={R} strokeWidth={1.6} />
      {buildPaths(rot).map((d, i) => <path key={i} d={d} />)}
    </svg>
  )
}
