import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cabaret MIDAS · SF · pluridisciplinaire · Strasbourg 2027',
  description:
    'Le Cabaret MIDAS réunit Musique, Improvisation, Danse, Art et Stand-up dans un univers SF narratif. Strasbourg · Le Fossé des Treize · 16 janvier 2027.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&family=Barlow+Condensed:wght@600;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
