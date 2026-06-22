'use client'

import { AnimatePresence, motion } from 'motion/react'
import type { Page } from '@/app/types'

const links: { id: Page; label: string }[] = [
  { id: 'accueil',     label: 'Accueil' },
  { id: 'spectacle',   label: 'Le Spectacle' },
  { id: 'artistes',    label: 'Artistes' },
  { id: 'partenaires', label: 'Partenaires' },
  { id: 'contact',     label: 'Contact' },
]

interface NavProps {
  page: Page
  onNavigate: (p: Page) => void
  menuOpen: boolean
  onToggleMenu: () => void
  isMobile: boolean
}

export default function Nav({ page, onNavigate, menuOpen, onToggleMenu, isMobile }: NavProps) {
  const nav = (p: Page) => () => onNavigate(p)

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 2000,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
        padding: '16px clamp(18px, 4vw, 48px)',
        background: 'linear-gradient(180deg, rgba(0,0,0,0.92), rgba(0,0,0,0.55) 70%, transparent)',
        backdropFilter: 'blur(6px)',
        borderBottom: '1px solid rgba(153,0,255,0.18)',
      }}>
        <button onClick={nav('accueil')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'baseline', gap: 8, padding: 0 }}>
          <span style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: 24, letterSpacing: '0.18em', color: '#fff' }}>MIDAS</span>
          <span style={{ fontFamily: 'system-ui, sans-serif', fontWeight: 500, fontSize: 10, letterSpacing: '0.34em', color: '#C9A84C', textTransform: 'uppercase' }}>Cabaret</span>
        </button>

        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 26 }}>
            {links.map((l) => (
              <button
                key={l.id}
                onClick={nav(l.id)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer', padding: '6px 1px',
                  fontSize: 14, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase',
                  color: page === l.id ? '#C9A84C' : 'rgba(255,255,255,0.72)',
                  borderBottom: page === l.id ? '1px solid #C9A84C' : '1px solid transparent',
                  transition: 'color .25s, border-color .25s',
                }}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={nav('billets')}
              style={{
                cursor: 'pointer', border: '1px solid #9900FF', background: '#9900FF',
                color: '#fff', fontWeight: 500, fontSize: 13, letterSpacing: '0.14em',
                textTransform: 'uppercase', padding: '11px 22px',
                boxShadow: '0 0 22px rgba(153,0,255,0.45)',
              }}
            >
              Réserver
            </button>
          </div>
        )}

        {isMobile && (
          <button
            onClick={onToggleMenu}
            aria-label="Menu"
            style={{ background: 'none', border: '1px solid rgba(255,255,255,0.25)', cursor: 'pointer', padding: '9px 12px', display: 'flex', flexDirection: 'column', gap: 4 }}
          >
            <span style={{ display: 'block', width: 20, height: 2, background: '#C9A84C' }} />
            <span style={{ display: 'block', width: 20, height: 2, background: '#C9A84C' }} />
            <span style={{ display: 'block', width: 20, height: 2, background: '#C9A84C' }} />
          </button>
        )}
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 1900,
              background: 'rgba(0,0,0,0.96)', backdropFilter: 'blur(8px)',
              display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 8,
            }}
          >
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => { onNavigate(l.id); onToggleMenu() }}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: "'Clash Display', sans-serif", fontWeight: 600, fontSize: 30,
                  letterSpacing: '0.04em', color: '#fff', padding: 10,
                }}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => { onNavigate('billets'); onToggleMenu() }}
              style={{
                marginTop: 18, cursor: 'pointer', border: '1px solid #9900FF', background: '#9900FF',
                color: '#fff', fontWeight: 500, fontSize: 15, letterSpacing: '0.14em',
                textTransform: 'uppercase', padding: '14px 34px',
                boxShadow: '0 0 24px rgba(153,0,255,0.5)',
              }}
            >
              Réserver ma place
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
