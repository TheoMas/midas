'use client'

import { useEffect, useState } from 'react'
import Reveal from '@/app/components/Reveal'
import { GREEN, PINK, PageHeader, SHOW_AT, Tag, box, dim, sectionStyle } from '@/app/components/ui'

interface Artist { name: string; disc: string; tag: string; code: string; photo?: string }

const artists: Artist[] = [
  { name: 'Najim Ziani',      disc: 'Stand-up',      tag: 'Humoriste',         code: '08-768' },
  { name: 'Laurine Defrance', disc: 'Stand-up',      tag: 'Humoriste',         code: '08-457' },
  { name: 'Clyventz',         disc: 'Stand-up',      tag: 'Humoriste',         code: '08-512', photo: '/artistes/clyventz.jpg' },
  { name: "Imp'Out",          disc: 'Improvisation', tag: 'Troupe',            code: '08-695' },
  { name: 'Dysteel',          disc: 'Musique live',  tag: "L'équipage sonore", code: '08-119' },
]

// Artistes drag : surprise. Aucun vrai nom dans le code tant qu'ils ne sont pas révélés.
const surprises = ['08-??1', '08-??2']

const portrait: React.CSSProperties = { aspectRatio: '3/4', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed rgba(187,104,241,0.5)', fontSize: 12.5, color: 'rgba(187,104,241,0.75)' }

function TargetCode({ code }: { code: string }) {
  return (
    <div style={{ position: 'absolute', top: 10, right: 10, textAlign: 'right', lineHeight: 1.15, zIndex: 1 }}>
      <div style={{ fontSize: 12, color: PINK }}>target code</div>
      <div style={{ fontSize: 14, color: GREEN }}>{code}</div>
    </div>
  )
}

export default function Artistes() {
  const [revealed, setRevealed] = useState(false)
  useEffect(() => { setRevealed(Date.now() >= SHOW_AT) }, [])

  return (
    <section style={sectionStyle}>
      <PageHeader tag="L'équipage" title="Les artistes">
        Le plateau confirmé à ce jour. D&apos;autres noms rejoindront l&apos;équipage au fil des confirmations.
      </PageHeader>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))', gap: 14 }}>
        {artists.map((a) => (
          <Reveal key={a.name} style={{ ...box, padding: 14, display: 'flex', flexDirection: 'column' }}>
            <div style={{ ...portrait, ...(a.photo && { border: 'none' }) }}>
              {a.photo
                ? <img src={a.photo} alt={a.name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                : '[ Portrait ]'}
              <TargetCode code={a.code} />
            </div>
            <Tag size={13} style={{ padding: '2px 10px', alignSelf: 'flex-start', marginTop: 14 }}>{a.disc}</Tag>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 26, textTransform: 'uppercase', marginTop: 10, lineHeight: 1.05 }}>{a.name}</div>
            <div style={{ fontSize: 14, color: dim(0.6), marginTop: 4 }}>{a.tag}</div>
          </Reveal>
        ))}
        {surprises.map((code) => (
          <Reveal key={code} style={{ ...box, padding: 14, display: 'flex', flexDirection: 'column' }}>
            <div style={portrait}>
              <div aria-hidden style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 50% 38%, ${PINK} 0 18%, transparent 19%), radial-gradient(ellipse at 50% 100%, ${PINK} 0 42%, transparent 43%)`, opacity: 0.55, filter: 'blur(14px)' }} />
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, color: GREEN }}>
                <svg width="42" height="48" viewBox="0 0 42 48" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
                  <rect x="4" y="21" width="34" height="24" />
                  <path d="M11 21v-7a10 10 0 0 1 20 0v7" />
                  <rect x="19" y="29" width="4" height="8" fill="currentColor" stroke="none" />
                </svg>
                <span style={{ fontSize: 13 }}>{revealed ? '> Révélé le 16/01' : '> Accès verrouillé'}</span>
              </div>
              <TargetCode code={code} />
            </div>
            <Tag size={13} style={{ padding: '2px 10px', alignSelf: 'flex-start', marginTop: 14 }}>Surprise</Tag>
            <div aria-label="Nom masqué" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 26, textTransform: 'uppercase', marginTop: 10, lineHeight: 1.05, filter: 'blur(7px)', userSelect: 'none' }}>Xxxxxx Xxxxx</div>
            <div style={{ fontSize: 14, color: dim(0.6), marginTop: 4 }}>Révélation le soir du 16 janvier</div>
          </Reveal>
        ))}
        <Reveal style={{ border: `2px dashed ${PINK}`, minHeight: 320, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 22 }}>
          <div style={{ fontSize: 48, fontWeight: 500, color: PINK, animation: 'blink 2.4s ease-in-out infinite' }}>?</div>
          <div style={{ fontSize: 15, color: dim(0.65), marginTop: 8 }}>D&apos;autres à annoncer</div>
        </Reveal>
      </div>
    </section>
  )
}
