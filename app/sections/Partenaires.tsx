import Reveal from '@/app/components/Reveal'
import { PageHeader, box, dim, sectionStyle } from '@/app/components/ui'

export default function Partenaires() {
  return (
    <section style={sectionStyle}>
      <PageHeader tag="Réseau GLITCH" title="Partenaires">
        Ils soutiennent l&apos;aventure MIDAS. La constellation s&apos;agrandit à chaque nouvelle alliance.
      </PageHeader>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,170px),1fr))', gap: 14 }}>
        {[1, 2, 3, 4, 5, 6].map((p) => (
          <div key={p} style={{ ...box, aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, color: 'rgba(187,104,241,0.7)' }}>
            Logo partenaire
          </div>
        ))}
      </div>

      <Reveal style={{ ...box, padding: 'clamp(24px,4vw,44px)', display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ maxWidth: 540 }}>
          <div style={{ fontSize: 'clamp(26px,3.5vw,36px)', fontWeight: 500 }}>Devenir partenaire</div>
          <p style={{ fontSize: 15.5, lineHeight: 1.7, color: dim(0.72), margin: '10px 0 0' }}>
            Associez votre marque au Cabaret MIDAS. Recevez notre dossier de partenariat et embarquez avec nous.
          </p>
        </div>
        <a href="mailto:contact@associationmidas.fr?subject=Partenariat%20Cabaret%20MIDAS" className="btn btn-primary" style={{ fontSize: 17, padding: '12px 28px' }}>
          Recevoir le dossier
        </a>
      </Reveal>
      <p style={{ fontSize: 13.5, color: dim(0.5), margin: 0 }}>Association MIDAS · Portée par Dysteel Music.</p>
    </section>
  )
}
