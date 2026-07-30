export default function Logo({ variant = 'light', className = '' }) {
  const isLight = variant === 'light' // for dark backgrounds
  const textPrimary = isLight ? '#FFFFFF' : '#020B1C'
  const textAccent = '#0B5CFF'
  const subText = isLight ? 'rgba(255,255,255,0.7)' : '#667085'

  return (
    <a href="/" className={`flex items-center gap-4 group ${className}`} aria-label="Twin Peaks Tech Solution, home">
      <img src="/logo.png" alt="Twin Peaks Tech Solution logo" className="h-16 w-16 sm:h-18 sm:w-18 object-contain" />
      <div className="leading-none flex flex-col items-center text-center">
        <div className="font-display font-extrabold text-2xl sm:text-3xl tracking-[-0.04em]" style={{ color: textPrimary }}>
          <span className="uppercase">TWIN</span>{' '}
          <span className="uppercase" style={{ color: textAccent }}>PEAKS</span>
        </div>
        <div className="flex items-center gap-2 mt-1 text-[10px] font-semibold uppercase tracking-[0.32em]" style={{ color: subText }}>
          <span className="block h-px w-6 bg-white/40" />
          <span>TECH SOLUTION</span>
          <span className="block h-px w-6 bg-white/40" />
        </div>
      </div>
    </a>
  )
}
