import Eyebrow from './Eyebrow'

export default function SectionHeader({
  eyebrow,
  heading,
  highlight,
  sub,
  dark = false,
  align = 'center',
}) {
  const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'
  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignClass}`}>
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2
        className={`font-display font-bold text-4xl md:text-5xl leading-[1.1] tracking-tight ${
          dark ? 'text-white' : 'text-navy-950'
        }`}
      >
        {heading}{' '}
        {highlight && <span className="text-gradient-blue">{highlight}</span>}
      </h2>
      <div className="w-12 h-1 rounded-full bg-[#0B5CFF]" />
      {sub && (
        <p className={`text-base md:text-lg leading-relaxed ${dark ? 'text-white/60' : 'text-slate-600'}`}>
          {sub}
        </p>
      )}
    </div>
  )
}
