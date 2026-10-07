'use client'

import { useState } from 'react'
import { BORDER, GREEN, PINK, PageHeader, TEXT, box, sectionStyle } from '@/app/components/ui'

const socials = [
  { name: 'Instagram',  url: 'https://instagram.com/dysteel.music',                    handle: '@dysteel.music' },
  { name: 'Spotify',    url: 'https://open.spotify.com/artist/1XTz49JeXffe9W16J7pV8T', handle: 'Dysteel' },
  { name: 'TikTok',     url: 'https://tiktok.com/@dysteel4',                           handle: '@dysteel4' },
  { name: 'YouTube',    url: 'https://youtube.com/@dysteel',                           handle: '@dysteel' },
  { name: 'SoundCloud', url: 'https://soundcloud.com/dysteel',                         handle: 'dysteel' },
]

const labelStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14, color: PINK }
const inputStyle: React.CSSProperties = { background: '#000', border: BORDER, color: TEXT, padding: 12, fontSize: 16 }
const bigLink: React.CSSProperties = { textDecoration: 'none', fontSize: 'clamp(19px,2.4vw,24px)', fontWeight: 500, color: TEXT }

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const form = e.currentTarget
    const data = {
      name:    (form.elements.namedItem('name')    as HTMLInputElement).value,
      email:   (form.elements.namedItem('email')   as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        setError(body.error ?? 'Transmission échouée. Réessayez.')
        return
      }
      setSent(true)
    } catch {
      setError('Transmission échouée. Réessayez.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section style={sectionStyle}>
      <PageHeader tag="Liaison" title="Contact" />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))', gap: 14 }}>
        <div style={{ ...box, padding: 'clamp(22px,3vw,32px)', display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div>
            <div style={{ fontSize: 14, color: GREEN }}>e-mail</div>
            <a href="mailto:dysteel.music@gmail.com" style={bigLink}>dysteel.music@gmail.com</a>
          </div>
          <div>
            <div style={{ fontSize: 14, color: GREEN }}>téléphone</div>
            <a href="tel:+33687776252" style={bigLink}>06 87 77 62 52</a>
          </div>
          <div>
            <div style={{ fontSize: 14, color: GREEN, marginBottom: 6 }}>réseaux</div>
            {socials.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="social-link">
                <span style={{ fontSize: 18, fontWeight: 500, color: TEXT }}>{s.name}</span>
                <span style={{ fontSize: 14, color: PINK }}>{s.handle} ↗</span>
              </a>
            ))}
          </div>
        </div>

        <div style={{ ...box, padding: 'clamp(22px,3vw,32px)' }}>
          {sent ? (
            <div style={{ padding: '30px 0', textAlign: 'center' }}>
              <div style={{ fontSize: 26, fontWeight: 500, color: PINK }}>Message transmis</div>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: GREEN, margin: '10px 0 0' }}>&gt; Signal reçu. L&apos;équipage vous répondra rapidement.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <label style={labelStyle}>Nom
                <input required name="name" type="text" autoComplete="name" style={inputStyle} />
              </label>
              <label style={labelStyle}>E-mail
                <input required name="email" type="email" autoComplete="email" style={inputStyle} />
              </label>
              <label style={labelStyle}>Message
                <textarea required name="message" rows={5} style={{ ...inputStyle, resize: 'vertical' }} />
              </label>
              {error && <div style={{ fontSize: 14, color: GREEN }} role="alert">&gt; {error}</div>}
              <button type="submit" disabled={loading} className="btn btn-primary" style={{ fontSize: 17, padding: 12 }}>
                {loading ? 'Transmission…' : 'Envoyer le message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
