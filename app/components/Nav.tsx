'use client'

import type { Page } from '@/app/types'
import { INK, MidasMark, PINK, TEXT } from '@/app/components/ui'

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
  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 2000,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
        padding: '12px clamp(16px,4vw,40px)',
        background: '#000', borderBottom: `2px solid ${PINK}`,
      }}>
        <button onClick={() => onNavigate('accueil')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12, padding: 0 }}>
          <MidasMark width={30} />
          <span style={{ background: PINK, color: INK, fontSize: 15, letterSpacing: '0.04em', padding: '3px 12px' }}>Cabaret MIDAS</span>
        </button>

        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            {links.map((l) => {
              const active = page === l.id
              return (
                <button
                  key={l.id}
                  onClick={() => onNavigate(l.id)}
                  style={{
                    cursor: 'pointer', border: 'none', padding: '5px 12px',
                    fontSize: 15, fontWeight: 500,
                    background: active ? PINK : 'transparent',
                    color: active ? INK : PINK,
                    transition: 'background .2s, color .2s',
                  }}
                >
                  {l.label}
                </button>
              )
            })}
            <button onClick={() => onNavigate('billets')} className="btn btn-primary" style={{ marginLeft: 12, fontSize: 15, padding: '9px 22px' }}>
              Réserver
            </button>
          </div>
        )}

        {isMobile && (
          <button
            onClick={onToggleMenu}
            aria-label="Menu"
            aria-expanded={menuOpen}
            style={{ background: '#000', border: `2px solid ${PINK}`, cursor: 'pointer', padding: '9px 11px', display: 'flex', flexDirection: 'column', gap: 4 }}
          >
            <span style={{ display: 'block', width: 20, height: 2, background: PINK }} />
            <span style={{ display: 'block', width: 20, height: 2, background: PINK }} />
            <span style={{ display: 'block', width: 20, height: 2, background: PINK }} />
          </button>
        )}
      </nav>

      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 1900, background: '#000',
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10,
          animation: 'pageIn .3s ease',
        }}>
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => onNavigate(l.id)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontWeight: 500, fontSize: 30, color: page === l.id ? PINK : TEXT, padding: 8 }}
            >
              {l.label}
            </button>
          ))}
          <button onClick={() => onNavigate('billets')} className="btn btn-primary" style={{ marginTop: 18, fontSize: 18, padding: '14px 34px' }}>
            Réserver ma place
          </button>
        </div>
      )}
    </>
  )
}
