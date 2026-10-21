'use client'

import { useEffect } from 'react'
import Reveal from '@/app/components/Reveal'
import { BORDER, GREEN, PageHeader, RetroWindow, Tag, dim, sectionStyle } from '@/app/components/ui'

const HELLOASSO_WIDGET = 'https://www.helloasso.com/associations/association-midas/evenements/cabaret-midas/widget'

const tiers = [
  { name: 'Passager',   price: '15 €',      desc: 'Accès à la soirée',     feat: false, list: ['Entrée standard', 'Sans placement', 'Embarquement libre'] },
  { name: 'Équipier',   price: '25 €',      desc: 'Placement standard',    feat: false, list: ['Place assise garantie', 'Placement standard', 'Programme de bord'] },
  { name: 'Équipage',   price: '80 €',      desc: 'Pack 4 personnes',      feat: false, list: ['4 places', 'Embarquez à plusieurs', 'Programme de bord'] },
  { name: 'Commandant', price: 'dès 30 €',  desc: 'Prix libre',            feat: true,  list: ['Vous fixez votre prix', 'Soutien direct au projet', 'Accueil privilégié'] },
]

function scrollToWidget() {
  const el = document.getElementById('ha-anchor')
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: 'smooth' })
}

export default function Billets() {
  // Le widget HelloAsso envoie sa hauteur via postMessage : on agrandit l'iframe en conséquence.
  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      if (!e.origin.endsWith('helloasso.com')) return
      const h = e.data?.height
      const el = document.getElementById('haWidget') as HTMLIFrameElement | null
      if (el && typeof h === 'number' && h > parseFloat(el.style.height || '0')) el.style.height = `${h}px`
    }
    window.addEventListener('message', onMsg)
    return () => window.removeEventListener('message', onMsg)
  }, [])

  return (
    <section style={sectionStyle}>
      <PageHeader tag="Embarquement" title="Réserver">
        Choisissez votre place à bord. Quatre formules d&apos;embarquement pour la soirée du 16 janvier.
      </PageHeader>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,270px),1fr))', gap: 14 }}>
        {tiers.map((t) => (
          <Reveal key={t.name} style={{ display: 'flex', flexDirection: 'column', border: BORDER, padding: 'clamp(22px,3vw,30px)', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
              <Tag size={15} style={{ padding: '2px 12px' }}>{t.name}</Tag>
              {t.feat && <div style={{ fontSize: 13, color: GREEN }}>VIP</div>}
            </div>
            <div style={{ fontSize: 'clamp(36px,4.5vw,48px)', fontWeight: 500, marginTop: 18, lineHeight: 1 }}>{t.price}</div>
            <div style={{ fontSize: 14.5, color: dim(0.65), marginTop: 8 }}>{t.desc}</div>
            <div style={{ height: 2, background: '#E0A8F2', margin: '20px 0' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
              {t.list.map((f) => (
                <div key={f} style={{ display: 'flex', gap: 10, fontSize: 14.5, color: dim(0.82) }}>
                  <span style={{ color: GREEN }}>&gt;</span><span>{f}</span>
                </div>
              ))}
            </div>
            <button onClick={scrollToWidget} className="btn btn-primary" style={{ marginTop: 'auto', width: '100%', fontSize: 17, padding: 10 }}>Accept</button>
          </Reveal>
        ))}
      </div>

      <RetroWindow id="ha-anchor" title="Paiement sécurisé · HelloAsso" style={{ margin: '14px 12px 12px 0' }} bodyStyle={{ padding: 'clamp(12px,2vw,20px)', background: '#fff' }}>
        <iframe
          id="haWidget"
          title="Formulaire HelloAsso"
          allow="payment 'self' https://paymenthub.helloassopay.com https://helloasso.com"
          src={HELLOASSO_WIDGET}
          style={{ width: '100%', height: 750, border: 'none', display: 'block' }}
        />
      </RetroWindow>
    </section>
  )
}
