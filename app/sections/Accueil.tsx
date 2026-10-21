'use client'

import { useState } from 'react'
import Countdown from '@/app/components/Countdown'
import Reveal from '@/app/components/Reveal'
import Globe from '@/app/components/Globe'
import { BORDER, GREEN, MidasMark, PINK, RetroWindow, TEXT, Tag, box, dim } from '@/app/components/ui'
import type { Page } from '@/app/types'

const HELLOASSO = 'https://www.helloasso.com/associations/association-midas/adhesions/adhesion-association-midas'

const disciplines = [
  { l: 'M', n: 'usique',       d: 'Le live qui fait vibrer la coque du vaisseau.' },
  { l: 'I', n: 'mprovisation', d: "L'imprévu comme carburant. Rien n'est écrit." },
  { l: 'D', n: 'anse',         d: 'Les corps en apesanteur, la gravité en option.' },
  { l: 'A', n: 'rt',           d: 'Le visuel qui transcende le réel.' },
  { l: 'S', n: 'tand-up',      d: 'Le rire propulsé à la vitesse lumière.' },
]

const participants = ['Najim Ziani', 'Laurine Defrance', "Imp'Out"]

const popupMsgs = [
  '',
  '> Refus non autorisé. Réessayez.',
  "> Erreur 08-457 : l'équipage vous attend déjà.",
  '> Signal verrouillé. Il ne reste que « Accept ».',
]

const corner = (pos: React.CSSProperties): React.CSSProperties => ({ position: 'absolute', width: 34, height: 34, ...pos })
const edge = `3px solid ${GREEN}`

interface Props { onNavigate: (p: Page) => void }

export default function Accueil({ onNavigate }: Props) {
  const [declines, setDeclines] = useState(0)
  const [shakeKey, setShakeKey] = useState(0)

  const decline = () => {
    setDeclines((d) => Math.min(d + 1, 3))
    setShakeKey((k) => k + 1)
  }

  return (
    <section style={{ animation: 'pageIn .5s ease both', maxWidth: 1240, margin: '0 auto', padding: 'clamp(24px,4vw,44px) clamp(14px,4vw,40px) 0', display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div style={{ fontSize: 13, color: dim(0.6) }}>01 — Plan d&apos;embarquement</div>

      {/* Hero */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
        <div style={{ flex: '1 1 560px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ ...box, flex: 1, padding: 'clamp(20px,3vw,34px)', display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ flex: '1 1 260px', display: 'flex', justifyContent: 'center' }}>
              <Globe size={320} />
            </div>
            <div style={{ flex: '0 0 auto', display: 'flex', alignItems: 'stretch', gap: 18, alignSelf: 'stretch', padding: '8px 0' }}>
              <div aria-hidden style={{ width: 22, borderTop: `2px solid ${PINK}`, borderRight: `2px solid ${PINK}`, position: 'relative' }}>
                <div style={{ position: 'absolute', top: '22%', right: 0, width: 22, height: 2, background: PINK }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontSize: 'clamp(34px,4.4vw,46px)', fontWeight: 500, lineHeight: 1, color: TEXT }}>
                <span>16</span>
                <span style={{ width: '100%', height: 2, background: TEXT, margin: '12px 0' }} />
                <span>01</span>
                <span style={{ width: '100%', height: 2, background: TEXT, margin: '12px 0' }} />
                <span>20</span>
                <span>27</span>
              </div>
            </div>
          </div>
          <div>
            <h1 style={{ margin: 0, fontWeight: 600, fontSize: 'clamp(64px,13vw,168px)', lineHeight: 0.88, letterSpacing: '0.02em', color: PINK }}>MIDAS</h1>
            <p style={{ margin: '16px 0 0', fontSize: 'clamp(18px,2.4vw,26px)', fontWeight: 500, color: TEXT }}>Une soirée unique à Strasbourg.</p>
            <p style={{ margin: '10px 0 0', maxWidth: 560, fontSize: 16, lineHeight: 1.65, color: dim(0.72) }}>
              Musique, improvisation, danse, art et stand-up réunis sur une même scène, dans un univers de science-fiction narratif, le temps d&apos;une soirée.
            </p>
          </div>
        </div>
        </div>

        <div style={{ flex: '1 1 300px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ ...box, padding: 22, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Tag size={17} block>Cabaret MIDAS</Tag>
            <Rules widths={[85, 65, 90]} />
            <Tag size={17} block>Édition I – AECHOLA</Tag>
            <Rules widths={[80, 60, 88]} />
            <Tag size={17} block>Strasbourg · 16 janvier 2027</Tag>
          </div>
          <div style={{ ...box, flex: 1, minHeight: 260, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg viewBox="0 0 200 200" preserveAspectRatio="none" aria-hidden style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} fill="none" stroke={PINK} strokeWidth={1.4} vectorEffect="non-scaling-stroke">
              <rect x="20" y="20" width="160" height="160" vectorEffect="non-scaling-stroke" />
              <rect x="45" y="45" width="110" height="110" vectorEffect="non-scaling-stroke" />
              <rect x="68" y="68" width="64" height="64" vectorEffect="non-scaling-stroke" />
              {[
                [0, 0, 68, 68], [200, 0, 132, 68], [0, 200, 68, 132], [200, 200, 132, 132],
                [60, 0, 86, 68], [140, 0, 114, 68], [60, 200, 86, 132], [140, 200, 114, 132],
                [0, 60, 68, 86], [0, 140, 68, 114], [200, 60, 132, 86], [200, 140, 132, 114],
              ].map(([x1, y1, x2, y2], i) => <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} vectorEffect="non-scaling-stroke" />)}
            </svg>
            <MidasMark width={64} color={GREEN} style={{ position: 'relative' }} />
          </div>
        </div>
      </div>

      {/* Popup */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '18px 0 26px' }}>
        <RetroWindow style={{ width: 'min(560px,100%)', animation: 'popIn .6s ease both .2s' }} bodyStyle={{ padding: 'clamp(24px,4vw,36px)' }}>
          <div style={{ fontSize: 'clamp(24px,3.6vw,34px)', fontWeight: 500, color: TEXT }}>You have been selected.</div>
          <div style={{ minHeight: 52, marginTop: 12, fontSize: 15, lineHeight: 1.6, color: GREEN }} aria-live="polite">{popupMsgs[declines]}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 18, marginTop: 18 }}>
            <button onClick={() => onNavigate('billets')} className="btn btn-primary" style={{ flex: '1 1 160px', fontSize: 19, padding: '10px 20px' }}>Accept</button>
            <button
              key={shakeKey}
              onClick={decline}
              className="btn btn-ghost"
              style={{ flex: '1 1 160px', fontSize: 19, padding: '10px 20px', animation: shakeKey > 0 ? 'shake .4s ease' : 'none', opacity: declines >= 3 ? 0.35 : 1 }}
            >
              Decline
            </button>
          </div>
        </RetroWindow>
      </div>

      <Reveal><Countdown /></Reveal>

      {/* Disciplines */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
        <Reveal style={{ ...box, flex: '1 1 300px', minWidth: 0, padding: 'clamp(20px,3vw,30px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 24 }}>
          <svg viewBox="0 0 300 150" aria-hidden style={{ width: '100%', height: 'auto', display: 'block' }} fill="none">
            <g stroke={PINK} strokeWidth={1} opacity={0.6}>
              {[0, 75, 150, 225, 300].map((x) => <line key={`v${x}`} x1={x} y1={0} x2={x} y2={150} />)}
              {[0, 50, 100, 150].map((y) => <line key={`h${y}`} x1={0} y1={y} x2={300} y2={y} />)}
            </g>
            <path d="M0 115 C 40 95, 80 70, 130 75 S 200 105, 230 60 S 280 70, 300 80" stroke={GREEN} strokeWidth={2.5} />
            <path d="M0 95 C 30 140, 60 140, 85 100 S 120 70, 150 110 S 190 150, 215 70 S 245 -5, 262 60 S 285 120, 300 105" stroke={PINK} strokeWidth={3} />
          </svg>
          <div>
            <Tag>L&apos;équipage à bord</Tag>
            <p style={{ margin: '14px 0 0', fontSize: 15, lineHeight: 1.65, color: dim(0.72) }}>Cinq disciplines qui se répondent sur une même scène, sans frontière.</p>
          </div>
        </Reveal>

        <Reveal style={{ ...box, flex: '2 1 560px', minWidth: 0, padding: 'clamp(20px,3vw,30px)', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px,4vw,40px)', alignItems: 'center' }}>
          <MidasMark width={210} style={{ flex: '0 1 210px', maxWidth: '100%' }} />
          <div style={{ flex: '1 1 280px', display: 'flex', flexDirection: 'column' }}>
            {disciplines.map((d) => (
              <div key={d.l} style={{ display: 'flex', alignItems: 'stretch', gap: 12 }}>
                <div style={{ width: 42, flex: '0 0 42px', borderLeft: BORDER, borderRight: BORDER, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30, fontWeight: 500, color: PINK, padding: '4px 0' }}>{d.l}</div>
                <div style={{ padding: '6px 0' }}>
                  <div style={{ fontSize: 'clamp(22px,2.6vw,30px)', fontWeight: 500, lineHeight: 1.1, color: TEXT }}>{d.n}</div>
                  <div style={{ fontSize: 13.5, color: dim(0.6), marginTop: 2 }}>{d.d}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Participation + date + lieu */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
        <Reveal style={{ ...box, flex: '1 1 300px', minWidth: 0, padding: 'clamp(20px,3vw,30px)' }}>
          <div aria-hidden style={{ position: 'relative', height: 150, marginBottom: 22 }}>
            <div style={corner({ top: 0, left: 0, borderTop: edge, borderLeft: edge })} />
            <div style={corner({ bottom: 0, left: 0, borderBottom: edge, borderLeft: edge })} />
            <div style={corner({ bottom: 0, right: 0, borderBottom: edge, borderRight: edge })} />
          </div>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 20, color: TEXT }}>Avec la participation de :</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 16 }}>
            {participants.map((n) => (
              <div key={n} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 22, letterSpacing: '0.01em', textTransform: 'uppercase', color: TEXT }}>{n}</div>
            ))}
          </div>
          <button onClick={() => onNavigate('artistes')} className="btn btn-ghost" style={{ marginTop: 22, fontSize: 15, padding: '9px 20px' }}>Voir les artistes</button>
        </Reveal>
        <Reveal style={{ ...box, flex: '1 1 300px', minWidth: 0, padding: 'clamp(20px,3vw,30px)' }}>
          <Tag>La soirée</Tag>
          <div style={{ fontSize: 'clamp(28px,4vw,40px)', fontWeight: 500, lineHeight: 1.1, marginTop: 16 }}>Samedi 16<br />janvier 2027</div>
        </Reveal>
        <Reveal style={{ ...box, flex: '1 1 300px', minWidth: 0, padding: 'clamp(20px,3vw,30px)' }}>
          <Tag>Point d&apos;embarquement</Tag>
          <div style={{ fontSize: 'clamp(28px,4vw,40px)', fontWeight: 500, lineHeight: 1.1, marginTop: 16 }}>Le Fossé des Treize</div>
          <div style={{ fontSize: 14.5, color: dim(0.7), marginTop: 12 }}>6 rue du Fossé des Treize · 67000 Strasbourg</div>
        </Reveal>
      </div>

      {/* Adhésion HelloAsso */}
      <div style={{ ...box, padding: 'clamp(20px,3vw,30px)', display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px,4vw,40px)', alignItems: 'flex-start' }}>
        <div style={{ flex: '1 1 300px', minWidth: 0 }}>
          <Tag>Rejoindre l&apos;association</Tag>
          <h2 style={{ margin: '16px 0 0', fontSize: 'clamp(28px,4vw,42px)', fontWeight: 500, lineHeight: 1.1 }}>Devenez membre de l&apos;équipage.</h2>
          <p style={{ margin: '12px 0 0', maxWidth: 440, fontSize: 15.5, lineHeight: 1.65, color: dim(0.72) }}>
            Adhérez à l&apos;Association MIDAS et soutenez la création du cabaret. Paiement sécurisé via HelloAsso.
          </p>
          <div style={{ marginTop: 22, maxWidth: 420 }}>
            <iframe id="haWidgetButton" title="Adhérer via HelloAsso" src={`${HELLOASSO}/widget-bouton`} style={{ width: '100%', height: 70, border: 'none' }} />
          </div>
        </div>
        <div style={{ flex: '1 1 340px', minWidth: 0, maxWidth: 460 }}>
          <iframe id="haWidgetVignette" title="Adhésion Association MIDAS" src={`${HELLOASSO}/widget-vignette`} style={{ width: '100%', height: 513, border: 'none' }} />
        </div>
      </div>

      {/* Teaser */}
      <Reveal style={{ ...box, padding: 'clamp(28px,5vw,56px)', marginBottom: 'clamp(30px,5vw,60px)' }}>
        <div style={{ fontSize: 14, color: GREEN, animation: 'blink 3s ease-in-out infinite' }}>&gt; transmission entrante_</div>
        <p style={{ fontSize: 'clamp(22px,3.4vw,36px)', fontWeight: 500, lineHeight: 1.35, margin: '18px 0 0', maxWidth: 880 }}>
          Quelque part, un signal nommé <span style={{ background: PINK, color: '#1A0F1E', padding: '0 8px' }}>AECHOLA</span> traverse le vide. L&apos;équipage est en route. Le reste, vous le vivrez à bord.
        </p>
      </Reveal>
    </section>
  )
}

function Rules({ widths }: { widths: number[] }) {
  return (
    <>
      {widths.map((w, i) => (
        <div key={i} style={{ height: 2, background: PINK, width: `${w}%`, marginTop: i === 0 ? 6 : 0, marginBottom: i === widths.length - 1 ? 6 : 0 }} />
      ))}
    </>
  )
}
