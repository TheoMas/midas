import Reveal from '@/app/components/Reveal'
import { GREEN, PINK, Tag, box, dim, sectionStyle } from '@/app/components/ui'

const experience = [
  { t: "L'immersion", d: 'Un décor SF, une lumière vivante, un son qui enveloppe.' },
  { t: 'Le vivant',   d: "De l'impro et du stand-up : rien n'est tout à fait joué d'avance." },
  { t: 'La fusion',   d: 'Cinq arts qui se répondent sur une même scène, sans frontière.' },
]

const note = { fontSize: 13.5, color: dim(0.5), margin: 0 }

export default function Spectacle() {
  return (
    <section style={sectionStyle}>
      <div style={{ ...box, padding: 'clamp(24px,4vw,44px)' }}>
        <Tag>Le Spectacle · Édition I – AECHOLA</Tag>
        <h1 style={{ margin: '20px 0 0', fontWeight: 500, fontSize: 'clamp(36px,6.5vw,72px)', lineHeight: 1.04 }}>
          Une soirée.<br />Une histoire.<br />Un équipage. <span style={{ color: PINK }}>Et vous.</span>
        </h1>
        <p style={{ maxWidth: 680, fontSize: 'clamp(16px,1.9vw,19px)', lineHeight: 1.75, color: dim(0.78), margin: '24px 0 0' }}>
          Le Cabaret MIDAS est une expérience narrative pluridisciplinaire. Comme si une comédie musicale, un concert, un spectacle d&apos;impro et une performance drag avaient fusionné dans un univers de science-fiction. Vous ne regardez pas un spectacle — vous embarquez.
        </p>
      </div>

      <Reveal style={{ ...box, padding: 'clamp(22px,3vw,32px)' }}>
        <div style={{ fontSize: 15, color: GREEN }}>target code 16-01</div>
        <div style={{ fontSize: 30, fontWeight: 500, marginTop: 8 }}>Samedi 16 janvier 2027 · Le Fossé des Treize</div>
        <p style={{ fontSize: 15, lineHeight: 1.7, color: dim(0.68), margin: '12px 0 0', maxWidth: 720 }}>
          Les portes du vaisseau s&apos;ouvrent. On rencontre l&apos;équipage, on prend de l&apos;altitude, et l&apos;histoire se déploie jusqu&apos;à sa destination. Une soirée unique, à vivre d&apos;un seul trait.
        </p>
      </Reveal>
      <p style={note}>&gt; Le détail du déroulé reste secret jusqu&apos;à l&apos;embarquement.</p>

      <Reveal style={{ ...box, padding: 'clamp(22px,3vw,32px)' }}>
        <Tag>Ce que vous allez vivre</Tag>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))', gap: 24, marginTop: 22 }}>
          {experience.map((e) => (
            <div key={e.t}>
              <div style={{ fontSize: 21, fontWeight: 500, color: PINK }}>{e.t}</div>
              <div style={{ fontSize: 14.5, color: dim(0.68), lineHeight: 1.6, marginTop: 6 }}>{e.d}</div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))', gap: 14 }}>
        {[1, 2, 3].map((g) => (
          <div key={g} style={{ ...box, aspectRatio: '4/3', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, color: 'rgba(224,168,242,0.8)' }}>
            [ Visuel à venir ]
          </div>
        ))}
      </Reveal>
      <p style={note}>Visuels officiels par l&apos;Atelier Obturation — disponibles prochainement.</p>
    </section>
  )
}
