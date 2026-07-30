import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'
import SectionHeader from '../SectionHeader'
import { projects } from '../../data/projects'

export default function PortfolioPreview() {
  const featured = projects.slice(0, 3)
  return (
    <section className="py-24 bg-slate-100/60">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Our Portfolio"
          heading="Our Recent"
          highlight="Work"
          sub="We take pride in delivering high-quality digital solutions that help our clients grow their business and achieve their goals."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {featured.map((p) => (
            <div key={p.slug} className="bg-white rounded-2xl overflow-hidden border border-slate-200/70 group hover:shadow-xl transition-shadow">
              <div className="h-48 flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: p.color }}>
                <span className="text-white/90 font-display font-bold text-xl text-center px-6">{p.name}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-5">
                <span className="text-[#0B5CFF] text-xs font-semibold">{p.category}</span>
                <h3 className="font-display font-bold text-lg text-navy-950 mt-1">{p.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mt-2">{p.tagline}</p>
                <Link
                  to={`/portfolio/${p.slug}`}
                  className="inline-flex items-center gap-1.5 text-[#0B5CFF] text-sm font-semibold mt-4"
                >
                  View Details <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 bg-[#0B5CFF] text-white text-sm font-semibold px-6 py-3.5 rounded-full hover:bg-[#0A4FE0] transition-colors shadow-[0_16px_40px_-12px_rgb(11,92,255,0.5)]"
          >
            🚀 View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
