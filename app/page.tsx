'use client'

import { useState, useEffect } from 'react'
import Nav from '@/app/components/Nav'
import { PINK, INK, dim } from '@/app/components/ui'
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

  return (
    <>
      {/* Scanlines */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 60, pointerEvents: 'none', opacity: 0.35, background: 'repeating-linear-gradient(180deg, rgba(187,104,241,0.06) 0 1px, transparent 1px 3px)' }} />

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

        {/* Footer */}
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 clamp(14px,4vw,40px) clamp(20px,3vw,32px)', display: 'flex', flexDirection: 'column', gap: 14 }}>
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
