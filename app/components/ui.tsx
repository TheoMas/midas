import type { CSSProperties, ReactNode } from 'react'

export const PINK = '#bb68f1'
export const GREEN = '#3ddb00'
export const INK = '#1A0F1E'
export const TEXT = '#F4E8F8'
export const BORDER = `2px solid ${PINK}`

/** Début de la soirée (lancement du compte à rebours, révélation des artistes surprise). */
export const SHOW_AT = new Date('2027-01-16T20:00:00+01:00').getTime()

export const dim = (a: number) => `rgba(244,232,248,${a})`

export const box: CSSProperties = { border: BORDER }

export const sectionStyle: CSSProperties = {
  animation: 'pageIn .5s ease both',
  maxWidth: 1240,
  margin: '0 auto',
  padding: 'clamp(30px,5vw,60px) clamp(14px,4vw,40px) clamp(40px,6vw,80px)',
  display: 'flex',
  flexDirection: 'column',
  gap: 14,
}

/** Étiquette rose pleine (« Cabaret MIDAS », « La soirée »…). */
export function Tag({ children, size = 16, block = false, style }: { children: ReactNode; size?: number; block?: boolean; style?: CSSProperties }) {
  return (
    <div style={{ background: PINK, color: INK, fontSize: size, padding: '3px 12px', display: block ? 'block' : 'inline-block', ...style }}>
      {children}
    </div>
  )
}

/** En-tête de page : étiquette + grand titre + intro. */
export function PageHeader({ tag, title, children }: { tag: string; title: ReactNode; children?: ReactNode }) {
  return (
    <div style={{ ...box, padding: 'clamp(24px,4vw,44px)' }}>
      <Tag>{tag}</Tag>
      <h1 style={{ margin: '20px 0 0', fontWeight: 500, fontSize: 'clamp(36px,6.5vw,72px)', lineHeight: 1.04 }}>{title}</h1>
      {children && (
        <p style={{ maxWidth: 640, fontSize: 'clamp(15px,1.8vw,18px)', lineHeight: 1.7, color: dim(0.72), margin: '16px 0 0' }}>{children}</p>
      )}
    </div>
  )
}

/** Fenêtre façon OS rétro (barre de titre dégradée + boutons). */
export function RetroWindow({ title, children, style, bodyStyle, id }: { title?: string; children: ReactNode; style?: CSSProperties; bodyStyle?: CSSProperties; id?: string }) {
  const ctl: CSSProperties = { width: 18, height: 18, border: `2px solid ${INK}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }
  return (
    <div id={id} style={{ ...box, background: '#000', boxShadow: `12px 12px 0 -2px #000, 12px 12px 0 0 ${PINK}`, ...style }}>
      <div style={{ height: 30, background: `linear-gradient(90deg,#9a4fd0,${PINK})`, display: 'flex', justifyContent: title ? 'space-between' : 'flex-end', alignItems: 'center', gap: 4, padding: title ? '0 6px 0 12px' : '0 6px' }}>
        {title && <span style={{ fontSize: 14, color: INK }}>{title}</span>}
        <span style={{ display: 'flex', gap: 4 }} aria-hidden>
          <span style={{ ...ctl, alignItems: 'flex-end', paddingBottom: 2 }}><span style={{ width: 8, height: 2, background: INK }} /></span>
          <span style={ctl}><span style={{ width: 8, height: 8, border: `2px solid ${INK}` }} /></span>
          <span style={{ ...ctl, fontSize: 14, lineHeight: 1, color: INK, fontWeight: 600 }}>×</span>
        </span>
      </div>
      <div style={bodyStyle}>{children}</div>
    </div>
  )
}

const M_BITMAP = [
  '##.....##',
  '###...###',
  '####.####',
  '##.###.##',
  '##..#..##',
  '##.....##',
  '##.....##',
]
// Une ligne de cellules contiguës = un seul <rect> (pas de joints entre cellules).
const M_RUNS = M_BITMAP.flatMap((row, y) =>
  [...row.matchAll(/#+/g)].map((m) => ({ x: m.index ?? 0, y, w: m[0].length })),
)
const M_SKEW = Math.tan((14 * Math.PI) / 180) * M_BITMAP.length

/** Logo « M » pixelisé, incliné. L'inclinaison est incluse dans la viewBox : le logo reste dans sa boîte. */
export function MidasMark({ width, color = PINK, style }: { width: number | string; color?: string; style?: CSSProperties }) {
  return (
    <svg aria-hidden viewBox={`0 0 ${9 + M_SKEW} ${M_BITMAP.length}`} style={{ width, height: 'auto', display: 'block', ...style }}>
      <g transform={`translate(${M_SKEW} 0) skewX(-14)`} fill={color}>
        {M_RUNS.map((r) => <rect key={`${r.x}-${r.y}`} x={r.x} y={r.y} width={r.w} height={1.02} />)}
      </g>
    </svg>
  )
}
