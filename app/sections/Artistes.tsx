'use client'

import Reveal from '@/app/components/Reveal'

const artists = [
  { name: 'Najim Ziani',       disc: 'Stand-up',      tag: "Tête d'affiche · Soirée 2" },
  { name: 'Laurine de France', disc: 'Stand-up',      tag: "Tête d'affiche · Soirée 1" },
  { name: 'H.O.M.E / Nöxïmä', disc: 'Drag',          tag: 'Performance' },
  { name: 'Atelier Obturation',disc: 'Photographie',  tag: "Capteur d'instants" },
  { name: 'Dysteel',           disc: 'Musique live',  tag: "L'équipage sonore" },
]

export default function Artistes() {
  return (
    <section style={{ animation: 'pageIn .5s ease both', maxWidth: 1180, margin: '0 auto', padding: 'clamp(50px,7vw,90px) clamp(18px,5vw,48px) clamp(60px,8vw,100px)' }}>
      <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.34em', textTransform: 'uppercase', color: '#C9A84C' }}>L'équipage</div>
      <h1 style={{ margin: '14px 0 0', fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: 'clamp(36px,7vw,76px)', lineHeight: 1.02 }}>
        Les artistes
      </h1>
      <p style={{ maxWidth: 640, fontSize: 'clamp(15px,1.8vw,18px)', lineHeight: 1.7, color: 'rgba(255,255,255,0.7)', marginTop: 22 }}>
        Le plateau confirmé à ce jour. D'autres noms rejoindront l'équipage au fil des confirmations.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(232px, 1fr))', gap: 18, marginTop: 46 }}>
        {artists.map((a, i) => (
          <Reveal key={a.name} delay={i * 0.07}>
            <div style={{ aspectRatio: '3/4', background: 'repeating-linear-gradient(135deg,#0c0c12 0 12px,#131320 12px 24px)', border: '1px solid rgba(153,0,255,0.28)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <span style={{ fontSize: 10.5, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.65)' }}>[ Portrait ]</span>
              <div style={{ position: 'absolute', top: 12, left: 12, fontSize: 10, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#9900FF', background: 'rgba(0,0,0,0.6)', padding: '4px 8px', border: '1px solid rgba(153,0,255,0.35)' }}>
                {a.disc}
              </div>
            </div>
            <div style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 600, fontSize: 22, marginTop: 16 }}>{a.name}</div>
            <div style={{ fontSize: 13, letterSpacing: '0.04em', color: '#C9A84C', marginTop: 5 }}>{a.tag}</div>
          </Reveal>
        ))}

        <Reveal delay={artists.length * 0.07}>
          <div style={{ aspectRatio: '3/4', border: '1px dashed rgba(255,255,255,0.22)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 22 }}>
            <div style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: 46, color: 'rgba(255,255,255,0.18)', animation: 'pulse 4s ease-in-out infinite' }}>?</div>
            <div style={{ fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginTop: 12 }}>D'autres à annoncer</div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
