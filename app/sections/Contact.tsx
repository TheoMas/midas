'use client'

import { useState } from 'react'

const socials = [
  { name: 'Instagram',  url: 'https://instagram.com/dysteel.music',                           handle: '@dysteel.music' },
  { name: 'Spotify',    url: 'https://open.spotify.com/artist/1XTz49JeXffe9W16J7pV8T',        handle: 'Dysteel' },
  { name: 'TikTok',     url: 'https://tiktok.com/@dysteel4',                                  handle: '@dysteel4' },
  { name: 'YouTube',    url: 'https://youtube.com/@dysteel',                                   handle: '@dysteel' },
  { name: 'SoundCloud', url: 'https://soundcloud.com/dysteel',                                 handle: 'dysteel' },
]

const labelStyle: React.CSSProperties = {
  fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)',
}

const inputStyle: React.CSSProperties = {
  marginTop: 8, width: '100%', background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.18)', color: '#fff', padding: 14,
  fontSize: 15, transition: 'border-color .25s',
}

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const data = {
      name:    (form.elements.namedItem('name')    as HTMLInputElement).value,
      email:   (form.elements.namedItem('email')   as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }
    try {
      await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      setSent(true)
    } catch {
      // fail silently — user still sees loading stop
    } finally {
      setLoading(false)
    }
  }

  return (
    <section style={{ animation: 'pageIn .5s ease both', maxWidth: 1080, margin: '0 auto', padding: 'clamp(50px,7vw,90px) clamp(18px,5vw,48px) clamp(60px,8vw,100px)' }}>
      <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.34em', textTransform: 'uppercase', color: '#C9A84C' }}>Liaison</div>
      <h1 style={{ margin: '14px 0 0', fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: 'clamp(36px,7vw,76px)', lineHeight: 1.02 }}>
        Contact
      </h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(28px,5vw,56px)', marginTop: 42 }}>

        {/* ── Left: info + socials ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#9900FF' }}>E-mail</div>
            <a href="mailto:dysteel.music@gmail.com" style={{ textDecoration: 'none', fontFamily: "'Clash Display', sans-serif", fontWeight: 500, fontSize: 'clamp(18px,2.4vw,24px)', color: '#fff' }}>
              dysteel.music@gmail.com
            </a>
          </div>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#9900FF' }}>Téléphone</div>
            <a href="tel:+33687776252" style={{ textDecoration: 'none', fontFamily: "'Clash Display', sans-serif", fontWeight: 500, fontSize: 'clamp(18px,2.4vw,24px)', color: '#fff' }}>
              06 87 77 62 52
            </a>
          </div>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#9900FF', marginBottom: 12 }}>Réseaux</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {socials.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '13px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <span style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 500, fontSize: 17, color: '#fff' }}>{s.name}</span>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{s.handle} ↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right: form ── */}
        <div>
          {sent ? (
            <div style={{ border: '1px solid #C9A84C', background: 'rgba(201,168,76,0.06)', padding: '40px 30px', textAlign: 'center' }}>
              <div style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 600, fontSize: 26, color: '#C9A84C' }}>Message transmis</div>
              <p style={{ fontSize: 14.5, lineHeight: 1.7, color: 'rgba(255,255,255,0.7)', marginTop: 12 }}>Votre signal a bien été reçu. L'équipage vous répondra rapidement.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label style={labelStyle}>Nom</label>
                <input required name="name" type="text" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>E-mail</label>
                <input required name="email" type="email" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Message</label>
                <textarea required name="message" rows={5} style={{ ...inputStyle, resize: 'vertical' }} />
              </div>
              <button
                type="submit"
                disabled={loading}
                style={{ cursor: loading ? 'wait' : 'pointer', border: '1px solid #9900FF', background: '#9900FF', color: '#fff', fontWeight: 500, fontSize: 14, letterSpacing: '0.14em', textTransform: 'uppercase', padding: 15, boxShadow: '0 0 24px rgba(153,0,255,0.4)', opacity: loading ? 0.7 : 1 }}
              >
                {loading ? 'Envoi en cours…' : 'Envoyer le message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
