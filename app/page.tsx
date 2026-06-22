'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import StarField from '@/app/components/StarField'
import Nav from '@/app/components/Nav'
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
    const check = () => setIsMobile(window.innerWidth < 880)
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
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setSubscribed(true)
    } finally {
      setSubLoading(false)
    }
  }

  return (
    <>
      {/* Fixed backgrounds */}
      <StarField />
      <div style={{ position: 'fixed', inset: 0, zIndex: -2, pointerEvents: 'none', background: 'radial-gradient(ellipse 90% 55% at 50% -5%, rgba(153,0,255,0.26), transparent 60%), radial-gradient(circle at 82% 85%, rgba(153,0,255,0.14), transparent 48%), radial-gradient(circle at 12% 62%, rgba(201,168,76,0.07), transparent 42%)', animation: 'neb 14s ease-in-out infinite alternate' }} />
      <div style={{ position: 'fixed', inset: 0, zIndex: 55, pointerEvents: 'none', background: 'radial-gradient(ellipse at center, transparent 52%, rgba(0,0,0,0.72) 100%)' }} />
      <div style={{ position: 'fixed', inset: 0, zIndex: 60, pointerEvents: 'none', opacity: 0.45, mixBlendMode: 'overlay', background: 'repeating-linear-gradient(180deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 3px)' }} />

      <Nav
        page={page}
        onNavigate={navigate}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((v) => !v)}
        isMobile={isMobile}
      />

      <main style={{ position: 'relative', zIndex: 1, paddingTop: 74 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {page === 'accueil'     && <Accueil     onNavigate={navigate} />}
            {page === 'spectacle'   && <Spectacle />}
            {page === 'artistes'    && <Artistes />}
            {page === 'billets'     && <Billets     onNavigate={navigate} />}
            {page === 'partenaires' && <Partenaires />}
            {page === 'contact'     && <Contact />}
          </motion.div>
        </AnimatePresence>

        {/* Newsletter + Footer */}
        <div style={{ position: 'relative', zIndex: 1, borderTop: '1px solid rgba(153,0,255,0.2)', marginTop: 20 }}>
          <div style={{ maxWidth: 1080, margin: '0 auto', padding: 'clamp(46px,6vw,72px) clamp(18px,5vw,48px)', textAlign: 'center' }}>
            <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.34em', textTransform: 'uppercase', color: '#C9A84C' }}>Newsletter</div>
            <h2 style={{ margin: '12px 0 0', fontFamily: "'Clash Display', sans-serif", fontWeight: 600, fontSize: 'clamp(24px,4vw,40px)' }}>
              Embarquez avant tout le monde
            </h2>
            <p style={{ fontSize: 14.5, color: 'rgba(255,255,255,0.65)', marginTop: 10 }}>
              Accès anticipé à la billetterie · annonces du plateau · coulisses.
            </p>

            {subscribed ? (
              <div style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 600, fontSize: 18, color: '#C9A84C', marginTop: 22 }}>
                Bienvenue à bord. ✦
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', maxWidth: 480, margin: '22px auto 0' }}>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="votre@email.com"
                  style={{ flex: 1, minWidth: 200, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '14px 16px', fontSize: 15 }}
                />
                <button
                  type="submit"
                  disabled={subLoading}
                  style={{ cursor: subLoading ? 'wait' : 'pointer', border: '1px solid #9900FF', background: '#9900FF', color: '#fff', fontWeight: 500, fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '14px 26px', opacity: subLoading ? 0.7 : 1 }}
                >
                  S'abonner
                </button>
              </form>
            )}
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.5)' }}>
            <div style={{ maxWidth: 1180, margin: '0 auto', padding: '34px clamp(18px,5vw,48px)', display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: 22, letterSpacing: '0.16em' }}>MIDAS</div>
                <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.5)', marginTop: 6 }}>
                  Cabaret SF pluridisciplinaire · Strasbourg · 19 &amp; 20 février 2027
                </div>
              </div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', textAlign: 'right' }}>
                Association MIDAS · Loi 1908<br />
                Dysteel Music · © {new Date().getFullYear()}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
