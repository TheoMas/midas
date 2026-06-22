'use client'

import Reveal from '@/app/components/Reveal'

export default function Partenaires() {
  return (
    <section style={{ animation: 'pageIn .5s ease both', maxWidth: 1080, margin: '0 auto', padding: 'clamp(50px,7vw,90px) clamp(18px,5vw,48px) clamp(60px,8vw,100px)' }}>
      <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.34em', textTransform: 'uppercase', color: '#C9A84C' }}>Réseau GLITCH</div>
      <h1 style={{ margin: '14px 0 0', fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: 'clamp(36px,7vw,76px)', lineHeight: 1.02 }}>
        Partenaires
      </h1>
      <p style={{ maxWidth: 640, fontSize: 'clamp(15px,1.8vw,18px)', lineHeight: 1.7, color: 'rgba(255,255,255,0.7)', marginTop: 22 }}>
        Ils soutiennent l'aventure MIDAS. La constellation s'agrandit à chaque nouvelle alliance.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 14, marginTop: 44 }}>
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} style={{ aspectRatio: '16/9', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>Logo partenaire</span>
          </div>
        ))}
      </div>

      <Reveal style={{ marginTop: 42, border: '1px solid rgba(153,0,255,0.32)', background: 'linear-gradient(135deg, rgba(153,0,255,0.1), rgba(0,0,0,0))', padding: 'clamp(30px,5vw,52px)', display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ maxWidth: 520 }}>
          <div style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 600, fontSize: 'clamp(24px,3.5vw,34px)' }}>Devenir partenaire</div>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.7)', marginTop: 12 }}>
            Associez votre marque à un format inédit en France. Recevez notre dossier de partenariat et embarquez avec nous.
          </p>
        </div>
        <a
          href="mailto:dysteel.music@gmail.com?subject=Partenariat%20Cabaret%20MIDAS"
          style={{ textDecoration: 'none', cursor: 'pointer', border: '1px solid #9900FF', background: '#9900FF', color: '#fff', fontWeight: 500, fontSize: 14, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '15px 30px', boxShadow: '0 0 24px rgba(153,0,255,0.45)', whiteSpace: 'nowrap' }}
        >
          Recevoir le dossier
        </a>
      </Reveal>

      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginTop: 30 }}>
        Association MIDAS · Loi 1908 · Portée par Dysteel Music.
      </p>
    </section>
  )
}
