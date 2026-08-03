import { Link } from 'react-router-dom'
import { ArrowRight, Play, Rocket, Smile, Headset, Zap } from 'lucide-react'

const stats = [
  { icon: Rocket, value: '10+', label: 'Projects Delivered' },
  { icon: Smile, value: '99%', label: 'Client Satisfaction' },
  { icon: Headset, value: '24/7', label: 'Support Available' },
  { icon: Zap, value: 'Fast', label: 'On-Time Delivery' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40">
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-center md:bg-cover"
        style={{
          backgroundImage: "url('/background-img.jpeg')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-center block md:hidden"
        style={{
          backgroundImage: "url('/moblie-bg.png')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
          <div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-white tracking-tight">
              Building Powerful Digital Solutions That{' '}
              <span className="text-gradient-blue">Grow Your Business</span>
            </h1>
            <p className="text-white/60 text-base md:text-lg leading-relaxed mt-6 max-w-xl">
              We help startups, businesses and enterprises build modern websites, mobile apps, AI solutions and scalable web services that drive growth and success.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-9">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0B5CFF] text-white text-sm font-semibold px-6 py-3.5 rounded-full hover:bg-[#0A4FE0] transition-colors shadow-[0_16px_40px_-12px_rgb(11,92,255,0.6)]"
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 bg-white/5 border border-white/20 text-white text-sm font-semibold px-6 py-3.5 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                <Play className="w-4 h-4" />
                View Our Work
              </Link>
            </div>
          </div>

        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-full bg-[#0B5CFF] flex items-center justify-center shrink-0">
                <s.icon className="w-5 h-5 text-white" />
              </span>
              <div>
                <p className="text-white font-bold text-lg leading-none">{s.value}</p>
                <p className="text-white/50 text-xs mt-1">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
