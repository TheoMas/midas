'use client'

import { useEffect, useRef } from 'react'

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const c = canvasRef.current
    if (!c) return
    const ctx = c.getContext('2d')
    if (!ctx) return

    let w = 0, h = 0
    let stars: { x: number; y: number; z: number; r: number; tw: number; sp: number }[] = []
    let rafId: number

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = c.width = Math.floor(window.innerWidth * dpr)
      h = c.height = Math.floor(window.innerHeight * dpr)
      c.style.width = window.innerWidth + 'px'
      c.style.height = window.innerHeight + 'px'
      const count = Math.min(240, Math.floor(window.innerWidth * window.innerHeight / 6500))
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h, z: Math.random(),
        r: (Math.random() * 1.3 + 0.3) * dpr,
        tw: Math.random() * 6.28,
        sp: (0.04 + Math.random() * 0.22) * dpr,
      }))
    }

    const loop = () => {
      ctx.clearRect(0, 0, w, h)
      for (const s of stars) {
        s.tw += 0.02
        const a = 0.35 + 0.65 * Math.abs(Math.sin(s.tw))
        s.y += s.sp
        if (s.y > h) { s.y = 0; s.x = Math.random() * w }
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, 6.2832)
        ctx.fillStyle =
          s.z > 0.9 ? `rgba(201,168,76,${a})` :
          s.z > 0.6 ? `rgba(153,0,255,${a})` :
                      `rgba(255,255,255,${a})`
        ctx.fill()
      }
      rafId = requestAnimationFrame(loop)
    }

    resize()
    loop()
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(rafId); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', inset: 0, zIndex: -3, display: 'block' }}
    />
  )
}
