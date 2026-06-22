'use client'

import Reveal from '@/app/components/Reveal'
import type { Page } from '@/app/types'

const tiers = [
  {
    name: 'Passager', price: '12–15 €', desc: 'Accès à la soirée', feat: false,
    accent: 'rgba(255,255,255,0.85)', border: 'rgba(255,255,255,0.14)', bg: 'rgba(255,255,255,0.02)',
    btnBorder: 'rgba(255,255,255,0.3)', btnBg: 'transparent', btnColor: '#fff',
    list: ['Entrée standard', 'Sans placement', 'Embarquement libre'],
  },
  {
    name: 'Équipier', price: '22–28 €', desc: 'Placement standard', feat: false,
    accent: '#9900FF', border: 'rgba(153,0,255,0.3)', bg: 'rgba(153,0,255,0.05)',
    btnBorder: '#9900FF', btnBg: '#9900FF', btnColor: '#fff',
    list: ['Place assise garantie', 'Placement standard', 'Programme de bord'],
  },
  {
    name: 'Commandant', price: '35–40 €', desc: "L'expérience VIP", feat: true,
    accent: '#C9A84C', border: '#C9A84C', bg: 'rgba(201,168,76,0.07)',
    btnBorder: '#C9A84C', btnBg: '#C9A84C', btnColor: '#000',
    list: ['Accueil privilégié', 'Placement premium', 'Accès passerelle VIP'],
  },
]

interface Props { onNavigate: (p: Page) => void }

export default function Billets({ onNavigate }: Props) {
  return (
    <section style={{ animation: 'pageIn .5s ease both', maxWidth: 1180, margin: '0 auto', padding: 'clamp(50px,7vw,90px) clamp(18px,5vw,48px) clamp(60px,8vw,100px)' }}>
      <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.34em', textTransform: 'uppercase', color: '#C9A84C' }}>Embarquement</div>
      <h1 style={{ margin: '14px 0 0', fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: 'clamp(36px,7vw,76px)', lineHeight: 1.02 }}>
        Billets
      </h1>
      <p style={{ maxWidth: 640, fontSize: 'clamp(15px,1.8vw,18px)', lineHeight: 1.7, color: 'rgba(255,255,255,0.7)', marginTop: 22 }}>
        Choisissez votre place à bord. Trois niveaux d'embarquement, pour une ou deux soirées.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(258px, 1fr))', gap: 18, marginTop: 46, alignItems: 'stretch' }}>
        {tiers.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08}>
            <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${t.border}`, background: t.bg, padding: '34px 28px', position: 'relative', height: '100%' }}>
              {t.feat && (
                <div style={{ position: 'absolute', top: -1, right: -1, background: '#C9A84C', color: '#000', fontWeight: 700, fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '6px 12px' }}>Premium</div>
              )}
              <div style={{ fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase', color: t.accent }}>{t.name}</div>
              <div style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: 'clamp(34px,4.5vw,48px)', marginTop: 14, lineHeight: 1 }}>{t.price}</div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', marginTop: 8 }}>{t.desc}</div>
              <div style={{ height: 1, background: 'rgba(255,255,255,0.12)', margin: '22px 0' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 11, marginBottom: 26 }}>
                {t.list.map((f) => (
                  <div key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, color: 'rgba(255,255,255,0.78)' }}>
                    <span style={{ color: '#9900FF', fontWeight: 700 }}>›</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => onNavigate('billets')}
                style={{ marginTop: 'auto', cursor: 'pointer', width: '100%', border: `1px solid ${t.btnBorder}`, background: t.btnBg, color: t.btnColor, fontWeight: 500, fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', padding: 14 }}
              >
                Choisir
              </button>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18, marginTop: 24 }}>
        <div style={{ border: '1px dashed rgba(201,168,76,0.4)', padding: 26, background: 'rgba(201,168,76,0.03)' }}>
          <div style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 600, fontSize: 20, color: '#C9A84C' }}>Pass 2 soirées</div>
          <div style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.65)', marginTop: 8 }}>Formules combinées pour vivre l'histoire complète — disponibles en bonus.</div>
        </div>
        <div style={{ border: '1px solid rgba(153,0,255,0.3)', padding: 26, background: 'rgba(153,0,255,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#9900FF', boxShadow: '0 0 12px #9900FF', display: 'inline-block', animation: 'blink 1.8s infinite' }} />
            <span style={{ fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase' }}>Billetterie</span>
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.7)', marginTop: 10 }}>
            Ouverture le 1<sup>er</sup> décembre 2026. Accès anticipé réservé aux abonnés de la newsletter.
          </div>
        </div>
      </Reveal>

      <p style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.4)', marginTop: 18, fontStyle: 'italic' }}>
        Tarifs indicatifs, à confirmer avant l'ouverture de la billetterie.
      </p>
    </section>
  )
}
