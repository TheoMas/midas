import Reveal from '@/app/components/Reveal'
import { GREEN, PINK, PageHeader, Tag, box, dim, sectionStyle } from '@/app/components/ui'

const artists = [
  { name: 'Najim Ziani',        disc: 'Stand-up',     tag: "Tête d'affiche",     code: '08-768' },
  { name: 'Laurine Defrance',   disc: 'Stand-up',     tag: "Tête d'affiche",     code: '08-457' },
  { name: "Imp'Out",            disc: 'Improvisation', tag: 'Troupe',            code: '08-695' },
  { name: 'Atelier Obturation', disc: 'Photographie', tag: "Capteur d'instants", code: '08-301' },
  { name: 'Dysteel',            disc: 'Musique live', tag: "L'équipage sonore",  code: '08-119' },
]

export default function Artistes() {
  return (
    <section style={sectionStyle}>
      <PageHeader tag="L'équipage" title="Les artistes">
        Le plateau confirmé à ce jour. D&apos;autres noms rejoindront l&apos;équipage au fil des confirmations.
      </PageHeader>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))', gap: 14 }}>
        {artists.map((a) => (
          <Reveal key={a.name} style={{ ...box, padding: 14, display: 'flex', flexDirection: 'column' }}>
            <div style={{ aspectRatio: '3/4', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed rgba(224,168,242,0.5)', fontSize: 12.5, color: 'rgba(224,168,242,0.75)' }}>
              [ Portrait ]
              <div style={{ position: 'absolute', top: 10, right: 10, textAlign: 'right', lineHeight: 1.15 }}>
                <div style={{ fontSize: 12, color: PINK }}>target code</div>
                <div style={{ fontSize: 14, color: GREEN }}>{a.code}</div>
              </div>
            </div>
            <Tag size={13} style={{ padding: '2px 10px', alignSelf: 'flex-start', marginTop: 14 }}>{a.disc}</Tag>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 26, textTransform: 'uppercase', marginTop: 10, lineHeight: 1.05 }}>{a.name}</div>
            <div style={{ fontSize: 14, color: dim(0.6), marginTop: 4 }}>{a.tag}</div>
          </Reveal>
        ))}
        <Reveal style={{ border: `2px dashed ${PINK}`, minHeight: 320, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 22 }}>
          <div style={{ fontSize: 48, fontWeight: 500, color: PINK, animation: 'blink 2.4s ease-in-out infinite' }}>?</div>
          <div style={{ fontSize: 15, color: dim(0.65), marginTop: 8 }}>D&apos;autres à annoncer</div>
        </Reveal>
      </div>
    </section>
  )
}
