import Eyebrow from './Eyebrow'
import subBackground from '../assets/images/sub-background.png'

export default function PageHero({ eyebrow, heading, highlight, sub, compact = false }) {
  return (
    <section className={`relative bg-navy-950 overflow-hidden ${compact ? 'pt-32 pb-16' : 'pt-36 pb-20'}`}>
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${subBackground})` }}
        />
        <div className="absolute inset-0 bg-dot-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60" />
      </div>
      <div className="relative max-w-4xl mx-auto px-6 flex flex-col items-center text-center gap-5">
        {eyebrow && <Eyebrow dark>{eyebrow}</Eyebrow>}
        <h1 className="font-display font-bold text-4xl sm:text-5xl leading-[1.1] text-white tracking-tight">
          {heading} {highlight && <span className="text-gradient-blue">{highlight}</span>}
        </h1>
        {sub && <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl">{sub}</p>}
      </div>
    </section>
  )
}
