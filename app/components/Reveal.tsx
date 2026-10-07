'use client'

import { motion } from 'motion/react'
import type { ReactNode, CSSProperties } from 'react'

interface RevealProps {
  children: ReactNode
  style?: CSSProperties
  className?: string
  delay?: number
}

export default function Reveal({ children, style, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.06 }}
      transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1], delay }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  )
}
