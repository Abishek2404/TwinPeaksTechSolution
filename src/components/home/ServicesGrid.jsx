import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '../SectionHeader'
import { services } from '../../data/services'

export default function ServicesGrid() {
  const featured = services.slice(0, 8)
  return (
    <section className="py-24 bg-slate-100/60">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Our Services"
          heading="We Provide The Best"
          highlight="Digital Solutions"
          sub="We build high-performance websites, mobile apps, and AI-powered solutions that help businesses grow, scale, and succeed in the digital world."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {featured.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="group bg-white rounded-2xl p-6 border border-slate-200/70 hover:border-[#0B5CFF]/30 hover:shadow-[0_20px_50px_-20px_rgb(11,92,255,0.25)] transition-all duration-300"
            >
              <span className="w-14 h-14 rounded-2xl bg-[#0B5CFF]/8 flex items-center justify-center text-[#0B5CFF] group-hover:bg-[#0B5CFF] group-hover:text-white transition-colors">
                <s.icon className="w-6 h-6" strokeWidth={1.8} />
              </span>
              <h3 className="font-display font-bold text-lg text-navy-950 mt-5">{s.name}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mt-2">{s.summary}</p>
              <span className="inline-flex items-center gap-1.5 text-[#0B5CFF] text-sm font-semibold mt-4">
                Learn More <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-[#0B5CFF] text-white text-sm font-semibold px-6 py-3.5 rounded-full hover:bg-[#0A4FE0] transition-colors shadow-[0_16px_40px_-12px_rgb(11,92,255,0.5)]"
          >
            🚀 Explore All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
