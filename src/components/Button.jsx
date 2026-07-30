import { ArrowRight } from 'lucide-react'

const variants = {
  primary:
    'bg-[#0B5CFF] text-white hover:bg-[#0A4FE0] shadow-[0_16px_40px_-12px_rgb(11,92,255,0.55)]',
  secondary:
    'bg-white/5 text-white border border-white/20 hover:bg-white/10 backdrop-blur-sm',
  outline:
    'bg-transparent text-[#0B5CFF] border border-[#0B5CFF]/30 hover:bg-[#0B5CFF]/5',
  ghost: 'bg-transparent text-navy-950 hover:bg-slate-100',
}

export default function Button({
  children,
  variant = 'primary',
  icon = true,
  as: Component = 'button',
  className = '',
  ...props
}) {
  return (
    <Component
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-200 active:scale-[0.98] whitespace-nowrap ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <ArrowRight className="w-4 h-4" strokeWidth={2.5} />}
    </Component>
  )
}
