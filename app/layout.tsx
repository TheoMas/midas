import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cabaret MIDAS · SF · pluridisciplinaire · Strasbourg 2027',
  description:
    'Le Cabaret MIDAS réunit Musique, Improvisation, Danse, Art et Stand-up dans un univers SF narratif sur deux soirées. Strasbourg · 19 et 20 février 2027.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
