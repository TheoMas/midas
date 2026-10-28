'use client'

import { useEffect, useState } from 'react'
import { BORDER, GREEN, PINK, SHOW_AT, Tag } from '@/app/components/ui'

interface Cd { d: string; h: string; m: string; s: string; progress: number }

const TARGET = SHOW_AT
const START = new Date('2026-06-01T00:00:00+02:00').getTime()

function pad(n: number) { return String(n).padStart(2, '0') }

function compute(): Cd {
  const now = Date.now()
  const t = TARGET - now
  const progress = Math.max(0, Math.min(100, ((now - START) / (TARGET - START)) * 100))
  if (t <= 0) return { d: '00', h: '00', m: '00', s: '00', progress: 100 }
  return {
    d: String(Math.floor(t / 86400000)),
    h: pad(Math.floor(t / 3600000) % 24),
    m: pad(Math.floor(t / 60000) % 60),
    s: pad(Math.floor(t / 1000) % 60),
    progress,
  }
}

function Unit({ val, label }: { val: string; label: string }) {
  return (
    <div style={{ border: BORDER, padding: 16, textAlign: 'center' }}>
      <div style={{ fontSize: 'clamp(40px,6vw,64px)', fontWeight: 500, color: GREEN, lineHeight: 1 }}>{val}</div>
      <div style={{ fontSize: 14, color: PINK, marginTop: 6 }}>{label}</div>
    </div>
  )
}

export default function Countdown() {
  const [cd, setCd] = useState<Cd>({ d: '—', h: '—', m: '—', s: '—', progress: 0 })

  useEffect(() => {
    const tick = () => setCd(compute())
    const first = setTimeout(tick, 0)
    const id = setInterval(tick, 1000)
    return () => { clearTimeout(first); clearInterval(id) }
  }, [])

  return (
    <div style={{ border: BORDER, padding: 'clamp(20px,3vw,32px)' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <Tag>Décollage dans</Tag>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: GREEN }}>
          <span style={{ width: 8, height: 8, background: GREEN, animation: 'blink 1.4s infinite' }} />
          signal actif
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(120px,1fr))', gap: 12, marginTop: 20 }}>
        <Unit val={cd.d} label="jours" />
        <Unit val={cd.h} label="heures" />
        <Unit val={cd.m} label="minutes" />
        <Unit val={cd.s} label="secondes" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 18 }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: PINK }}>WD</span>
        <div style={{ flex: 1, height: 12, border: BORDER, padding: 1 }}>
          <div style={{ height: '100%', width: `${cd.progress.toFixed(1)}%`, background: PINK }} />
        </div>
      </div>
    </div>
  )
}
