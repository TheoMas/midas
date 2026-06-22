const baseStyle: React.CSSProperties = {
  fontFamily: "'Clash Display', sans-serif",
  fontWeight: 700,
  fontSize: 'clamp(76px, 19vw, 280px)',
  letterSpacing: '0.02em',
}

export default function GlitchTitle() {
  return (
    <div style={{ position: 'relative', display: 'inline-block', lineHeight: 0.9 }}>
      <span aria-hidden="true" style={{ ...baseStyle, position: 'absolute', inset: 0, color: '#9900FF', mixBlendMode: 'screen', animation: 'gT 3.6s steps(2) infinite' }}>
        MIDAS
      </span>
      <span aria-hidden="true" style={{ ...baseStyle, position: 'absolute', inset: 0, color: '#C9A84C', mixBlendMode: 'screen', animation: 'gB 3.6s steps(2) infinite' }}>
        MIDAS
      </span>
      <span style={{ ...baseStyle, position: 'relative', color: '#fff', textShadow: '0 0 50px rgba(153,0,255,0.55)' }}>
        MIDAS
      </span>
    </div>
  )
}
