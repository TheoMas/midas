'use client'

import Reveal from '@/app/components/Reveal'

export default function Spectacle() {
  return (
    <section style={{ animation: 'pageIn .5s ease both', maxWidth: 1080, margin: '0 auto', padding: 'clamp(50px,7vw,90px) clamp(18px,5vw,48px) clamp(60px,8vw,100px)' }}>
      <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.34em', textTransform: 'uppercase', color: '#C9A84C' }}>Le Spectacle</div>
      <h1 style={{ margin: '14px 0 0', fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: 'clamp(36px,7vw,76px)', lineHeight: 1.02 }}>
        Deux soirées.<br />Une histoire.<br />Un équipage. <span style={{ color: '#9900FF' }}>Et vous.</span>
      </h1>
      <p style={{ maxWidth: 680, fontSize: 'clamp(16px,1.9vw,19px)', lineHeight: 1.8, color: 'rgba(255,255,255,0.78)', marginTop: 28 }}>
        Le Cabaret MIDAS est une expérience narrative pluridisciplinaire. Comme si une comédie musicale, un concert, un spectacle d'impro et une performance drag avaient fusionné dans un univers de science-fiction. Vous ne regardez pas un spectacle — vous embarquez.
      </p>

      {/* Structure du voyage */}
      <Reveal style={{ marginTop: 'clamp(48px,7vw,90px)' }}>
        <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#9900FF', marginBottom: 22 }}>La structure du voyage</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
          <div style={{ border: '1px solid rgba(255,255,255,0.14)', background: 'rgba(255,255,255,0.02)', padding: 32, position: 'relative', overflow: 'hidden' }}>
            <div style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A84C' }}>Soirée 1 · Vendredi 19</div>
            <div style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: 30, marginTop: 10 }}>L'EMBARQUEMENT</div>
            <p style={{ fontSize: 14.5, lineHeight: 1.7, color: 'rgba(255,255,255,0.65)', marginTop: 14 }}>
              Les portes du vaisseau s'ouvrent. On rencontre l'équipage, on prend de l'altitude. La première moitié de l'histoire se met en mouvement.
            </p>
          </div>
          <div style={{ border: '1px solid rgba(153,0,255,0.35)', background: 'rgba(153,0,255,0.06)', padding: 32, position: 'relative', overflow: 'hidden' }}>
            <div style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A84C' }}>Soirée 2 · Samedi 20</div>
            <div style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: 30, marginTop: 10 }}>L'ODYSSÉE</div>
            <p style={{ fontSize: 14.5, lineHeight: 1.7, color: 'rgba(255,255,255,0.65)', marginTop: 14 }}>
              Le voyage atteint son point de bascule. L'histoire se déploie, s'accélère, et trouve sa destination. Une seconde soirée qui se vit pleinement, seule ou en prolongement de la première.
            </p>
          </div>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginTop: 16, fontStyle: 'italic' }}>
          Le détail du déroulé reste secret jusqu'à l'embarquement.
        </p>
      </Reveal>

      {/* Ce que vous vivrez */}
      <Reveal style={{ marginTop: 'clamp(48px,7vw,90px)' }}>
        <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#9900FF', marginBottom: 22 }}>Ce que vous allez vivre</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 }}>
          {[
            { t: "L'immersion",  d: 'Un décor SF, une lumière vivante, un son qui enveloppe.' },
            { t: 'Le vivant',    d: "De l'impro et du stand-up : rien n'est tout à fait joué d'avance." },
            { t: 'La fusion',    d: 'Cinq arts qui se répondent sur une même scène, sans frontière.' },
          ].map((item) => (
            <div key={item.t} style={{ borderLeft: '2px solid #C9A84C', padding: '8px 0 8px 20px' }}>
              <div style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 600, fontSize: 18 }}>{item.t}</div>
              <div style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginTop: 6 }}>{item.d}</div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Galerie placeholder */}
      <Reveal style={{ marginTop: 'clamp(48px,7vw,90px)' }}>
        <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#9900FF', marginBottom: 22 }}>Galerie</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{ aspectRatio: '4/3', background: 'repeating-linear-gradient(135deg,#0c0c12 0 11px,#131320 11px 22px)', border: '1px solid rgba(153,0,255,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 11, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.7)' }}>[ Visuel à venir ]</span>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginTop: 14, fontStyle: 'italic' }}>
          Visuels officiels par l'Atelier Obturation — disponibles prochainement.
        </p>
      </Reveal>
    </section>
  )
}
