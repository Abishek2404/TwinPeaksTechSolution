import { Send, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CtaBanner({
  title = "Let's Build Something Amazing Together",
  sub = "Have a project in mind? We'd love to hear about it.",
  ctaLabel = "Let's Talk",
  to = '/contact',
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-navy-950 to-navy-800 px-8 py-8 md:px-10 md:py-9 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
      <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#0B5CFF]/25 rounded-full blur-3xl" />
      <div className="flex items-center gap-4 relative z-10 text-center md:text-left">
        <span className="hidden sm:flex w-12 h-12 rounded-full bg-[#0B5CFF] items-center justify-center shrink-0">
          <Send className="w-5 h-5 text-white" />
        </span>
        <div>
          <h3 className="text-white font-display font-bold text-xl md:text-2xl">{title}</h3>
          <p className="text-white/60 text-sm mt-1">{sub}</p>
        </div>
      </div>
      <Link
        to={to}
        className="relative z-10 inline-flex items-center gap-2 bg-[#0B5CFF] text-white text-sm font-semibold px-6 py-3.5 rounded-full hover:bg-[#0A4FE0] transition-colors shrink-0"
      >
        {ctaLabel}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  )
}
