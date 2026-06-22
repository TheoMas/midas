'use client'

import GlitchTitle from '@/app/components/GlitchTitle'
import Countdown from '@/app/components/Countdown'
import Reveal from '@/app/components/Reveal'
import type { Page } from '@/app/types'

const disciplines = [
  { l: 'M', n: 'Musique',       d: 'Le live qui fait vibrer la coque du vaisseau.' },
  { l: 'I', n: 'Improvisation', d: "L'imprévu comme carburant. Rien n'est écrit." },
  { l: 'D', n: 'Danse',         d: 'Les corps en apesanteur, la gravité en option.' },
  { l: 'A', n: 'Art',           d: 'Le visuel qui transcende le réel.' },
  { l: 'S', n: 'Stand-up',      d: 'Le rire propulsé à la vitesse lumière.' },
]

interface Props { onNavigate: (p: Page) => void }

export default function Accueil({ onNavigate }: Props) {
  return (
    <section style={{ animation: 'pageIn .5s ease both' }}>

      {/* ── Hero ── */}
      <div style={{ position: 'relative', minHeight: '88vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '60px clamp(18px,5vw,48px) 40px' }}>
        <div style={{ position: 'absolute', width: 'min(72vw,620px)', aspectRatio: '1', border: '1px solid rgba(153,0,255,0.25)', borderRadius: '50%', animation: 'spinCW 60s linear infinite', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: 'min(52vw,440px)', aspectRatio: '1', border: '1px dashed rgba(201,168,76,0.3)', borderRadius: '50%', animation: 'spinCCW 45s linear infinite', pointerEvents: 'none' }} />

        <div style={{ fontSize: 'clamp(11px,1.6vw,14px)', fontWeight: 500, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 26 }}>
          Strasbourg · 19 &amp; 20 Février 2027
        </div>

        <GlitchTitle />

        <h1 style={{ margin: '28px 0 0', fontFamily: "'Clash Display', sans-serif", fontWeight: 500, fontSize: 'clamp(20px,3.4vw,40px)', letterSpacing: '0.02em', color: '#fff' }}>
          Un format inédit en France.
        </h1>
        <p style={{ maxWidth: 600, margin: '18px auto 0', fontSize: 'clamp(15px,1.7vw,18px)', lineHeight: 1.7, color: 'rgba(255,255,255,0.72)' }}>
          Musique · Improvisation · Danse · Art · Stand-up. Cinq disciplines, une seule scène, un univers de science-fiction narratif déployé sur deux soirées.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center', marginTop: 34 }}>
          <button onClick={() => onNavigate('billets')} style={{ cursor: 'pointer', border: '1px solid #9900FF', background: '#9900FF', color: '#fff', fontWeight: 500, fontSize: 14, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '15px 30px', boxShadow: '0 0 26px rgba(153,0,255,0.5)' }}>
            Réserver ma place
          </button>
          <button onClick={() => onNavigate('spectacle')} style={{ cursor: 'pointer', border: '1px solid rgba(255,255,255,0.3)', background: 'transparent', color: '#fff', fontWeight: 500, fontSize: 14, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '15px 30px' }}>
            Découvrir le spectacle
          </button>
        </div>
      </div>

      {/* ── Countdown ── */}
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 clamp(18px,5vw,48px)' }}>
        <Reveal><Countdown /></Reveal>
      </div>

      {/* ── Disciplines ── */}
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(60px,9vw,120px) clamp(18px,5vw,48px) 0' }}>
        <Reveal>
          <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.34em', textTransform: 'uppercase', color: '#C9A84C' }}>L'équipage à bord</div>
          <h2 style={{ margin: '14px 0 0', fontFamily: "'Clash Display', sans-serif", fontWeight: 600, fontSize: 'clamp(30px,5vw,56px)', lineHeight: 1.05 }}>
            Cinq disciplines.<br />Une trajectoire.
          </h2>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(178px, 1fr))', gap: 14, marginTop: 42 }}>
          {disciplines.map((d, i) => (
            <Reveal key={d.n} delay={i * 0.07}>
              <div style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.02)', padding: '26px 22px', minHeight: 230, display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: 58, lineHeight: 1, color: '#9900FF' }}>{d.l}</div>
                <div style={{ marginTop: 'auto', fontFamily: "'Clash Display', sans-serif", fontWeight: 600, fontSize: 21, color: '#fff', paddingTop: 18 }}>{d.n}</div>
                <div style={{ fontSize: 13.5, lineHeight: 1.6, color: 'rgba(255,255,255,0.6)', marginTop: 8 }}>{d.d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── Dates / Lieu ── */}
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(60px,9vw,120px) clamp(18px,5vw,48px) 0' }}>
        <Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
            <div style={{ border: '1px solid rgba(201,168,76,0.3)', background: 'rgba(201,168,76,0.04)', padding: 34 }}>
              <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#C9A84C' }}>Les deux soirées</div>
              <div style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: 'clamp(30px,4.5vw,46px)', marginTop: 14, lineHeight: 1.1 }}>VEN. 19 &amp; SAM. 20<br />FÉVRIER 2027</div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', marginTop: 14 }}>Deux soirées consécutives · 250 places par soirée</div>
            </div>
            <div style={{ border: '1px solid rgba(153,0,255,0.3)', background: 'rgba(153,0,255,0.05)', padding: 34 }}>
              <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#C9A84C' }}>Le point d'embarquement</div>
              <div style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: 'clamp(30px,4.5vw,46px)', marginTop: 14, lineHeight: 1.1 }}>ESPACE DJANGO</div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', marginTop: 14 }}>4 impasse Kiefer · 67100 Strasbourg</div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ── Teaser ── */}
      <Reveal>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: 'clamp(60px,9vw,120px) clamp(18px,5vw,48px) clamp(40px,6vw,80px)', textAlign: 'center' }}>
          <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.34em', textTransform: 'uppercase', color: '#9900FF', animation: 'blink 3s ease-in-out infinite' }}>
            // Transmission entrante
          </div>
          <p style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 500, fontSize: 'clamp(22px,3.6vw,38px)', lineHeight: 1.35, margin: '22px 0 0', color: '#fff' }}>
            Quelque part, un signal nommé <span style={{ color: '#C9A84C' }}>AECHOLA</span> traverse le vide. L'équipage est en route. Le reste, vous le vivrez à bord.
          </p>
        </div>
      </Reveal>

    </section>
  )
}
