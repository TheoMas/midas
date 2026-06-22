'use client'

import { useEffect, useState } from 'react'

interface Cd { d: string; h: string; m: string; s: string }

const TARGET = new Date('2027-02-19T20:00:00').getTime()

function pad(n: number) { return String(n).padStart(2, '0') }

function compute(): Cd {
  const t = TARGET - Date.now()
  if (t <= 0) return { d: '00', h: '00', m: '00', s: '00' }
  return {
    d: String(Math.floor(t / 86400000)),
    h: pad(Math.floor(t / 3600000) % 24),
    m: pad(Math.floor(t / 60000) % 60),
    s: pad(Math.floor(t / 1000) % 60),
  }
}

function Unit({ val, label, color }: { val: string; label: string; color: string }) {
  return (
    <div style={{ minWidth: 64 }}>
      <div style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: 'clamp(40px, 7vw, 72px)', color, lineHeight: 1 }}>
        {val}
      </div>
      <div style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginTop: 8 }}>
        {label}
      </div>
    </div>
  )
}

export default function Countdown() {
  const [cd, setCd] = useState<Cd>({ d: '—', h: '—', m: '—', s: '—' })

  useEffect(() => {
    setCd(compute())
    const id = setInterval(() => setCd(compute()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div style={{ border: '1px solid rgba(153,0,255,0.3)', background: 'rgba(153,0,255,0.05)', padding: 'clamp(26px, 4vw, 44px)', textAlign: 'center' }}>
      <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.34em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 24 }}>
        Décollage dans
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(14px, 4vw, 48px)', justifyContent: 'center' }}>
        <Unit val={cd.d} label="Jours"    color="#fff"     />
        <Unit val={cd.h} label="Heures"   color="#9900FF"  />
        <Unit val={cd.m} label="Minutes"  color="#9900FF"  />
        <Unit val={cd.s} label="Secondes" color="#C9A84C"  />
      </div>
    </div>
  )
}
