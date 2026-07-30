export default function Eyebrow({ children, dark = false }) {
  return (
    <span
      className={`inline-block text-xs font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full ${
        dark
          ? 'bg-white/8 text-cyan-300 border border-white/15'
          : 'bg-[#0B5CFF]/8 text-[#0B5CFF] border border-[#0B5CFF]/15'
      }`}
    >
      {children}
    </span>
  )
}
