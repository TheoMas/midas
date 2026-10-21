'use client'

import { useState, useEffect } from 'react'
import Nav from '@/app/components/Nav'
import { BORDER, GREEN, PINK, INK, dim } from '@/app/components/ui'
import Accueil from '@/app/sections/Accueil'
import Spectacle from '@/app/sections/Spectacle'
import Artistes from '@/app/sections/Artistes'
import Billets from '@/app/sections/Billets'
import Partenaires from '@/app/sections/Partenaires'
import Contact from '@/app/sections/Contact'
import type { Page } from '@/app/types'

export default function MidasPage() {
  const [page, setPage] = useState<Page>('accueil')
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [subscribed, setSubscribed] = useState(false)
  const [subLoading, setSubLoading] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const navigate = (p: Page) => {
    setPage(p)
    setMenuOpen(false)
    window.scrollTo({ top: 0 })
  }

  const handleSubscribe = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubLoading(true)
    const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) setSubscribed(true)
    } finally {
      setSubLoading(false)
    }
  }

  return (
    <>
      {/* Scanlines */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 60, pointerEvents: 'none', opacity: 0.35, background: 'repeating-linear-gradient(180deg, rgba(224,168,242,0.06) 0 1px, transparent 1px 3px)' }} />

      <Nav
        page={page}
        onNavigate={navigate}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((v) => !v)}
        isMobile={isMobile}
      />

      <main style={{ position: 'relative', zIndex: 1, paddingTop: 70 }}>
        <div key={page}>
          {page === 'accueil'     && <Accueil onNavigate={navigate} />}
          {page === 'spectacle'   && <Spectacle />}
          {page === 'artistes'    && <Artistes />}
          {page === 'billets'     && <Billets />}
          {page === 'partenaires' && <Partenaires />}
          {page === 'contact'     && <Contact />}
        </div>

        {/* Newsletter + Footer */}
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 clamp(14px,4vw,40px) clamp(20px,3vw,32px)', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ border: BORDER, padding: 'clamp(24px,4vw,40px)', display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ maxWidth: 520 }}>
              <div style={{ fontSize: 'clamp(24px,3.4vw,34px)', fontWeight: 500 }}>Embarquez avant tout le monde</div>
              <p style={{ fontSize: 15, color: dim(0.68), margin: '8px 0 0' }}>Accès anticipé à la billetterie, annonces du plateau, coulisses.</p>
            </div>
            {subscribed ? (
              <div style={{ fontSize: 18, color: GREEN }}>&gt; Bienvenue à bord.</div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', flexWrap: 'wrap', gap: 10, flex: '1 1 340px', maxWidth: 480 }}>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="votre@email.com"
                  aria-label="Adresse e-mail"
                  style={{ flex: 1, minWidth: 200, background: '#000', border: BORDER, color: '#F4E8F8', padding: '12px 14px', fontSize: 16 }}
                />
                <button type="submit" disabled={subLoading} className="btn btn-primary" style={{ fontSize: 16, padding: '12px 24px', boxShadow: 'none' }}>
                  S&apos;abonner
                </button>
              </form>
            )}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', justifyContent: 'space-between', padding: '6px 2px', fontSize: 13, color: dim(0.55) }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10 }}>
              <span style={{ background: PINK, color: INK, padding: '2px 10px' }}>Cabaret MIDAS</span>
              <span>Édition I – AECHOLA · Strasbourg · 16 janvier 2027</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2, textAlign: 'right' }}>
              <span>Association MIDAS · Dysteel Music · © {new Date().getFullYear()}</span>
              <span>Affiche : Anaïs Brobeck · Site : Théo Mas</span>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
