import { useParams, Link, Navigate } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import CtaBanner from '../components/CtaBanner'
import { getServiceBySlug, services } from '../data/services'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) return <Navigate to="/services" replace />

  const related = services.filter((s) => s.slug !== slug).slice(0, 3)

  return (
    <>
      <PageHero eyebrow="Service" heading={service.name.split(' ').slice(0, -1).join(' ') || service.name} highlight={service.name.split(' ').slice(-1).join(' ')} sub={service.summary} compact />

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-[1.3fr_1fr] gap-12">
            <div>
              <h2 className="font-display font-bold text-2xl text-navy-950">Overview</h2>
              <p className="text-slate-600 leading-relaxed mt-4">{service.description}</p>

              <h2 className="font-display font-bold text-2xl text-navy-950 mt-10">What's Included</h2>
              <ul className="grid sm:grid-cols-2 gap-3 mt-5">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 text-slate-700 text-sm bg-slate-100/60 rounded-xl p-3.5">
                    <Check className="w-4 h-4 text-[#0B5CFF] shrink-0 mt-0.5" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-navy-950 rounded-3xl p-7 h-fit sticky top-28">
              <span className="w-12 h-12 rounded-xl bg-[#0B5CFF]/20 flex items-center justify-center text-cyan-300 mb-4">
                <service.icon className="w-6 h-6" />
              </span>
              <p className="text-white/50 text-xs font-semibold tracking-wide uppercase mb-3">Typical Stack</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {service.stack.map((t) => (
                  <span key={t} className="text-xs font-medium text-white/85 bg-white/10 border border-white/10 px-3 py-1.5 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0B5CFF] text-white text-sm font-semibold px-5 py-3.5 rounded-full hover:bg-[#0A4FE0] transition-colors"
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-100/60">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display font-bold text-2xl text-navy-950 mb-8">Related Services</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {related.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group bg-white rounded-2xl p-6 border border-slate-200/70 hover:border-[#0B5CFF]/30 hover:shadow-lg transition-all"
              >
                <span className="w-12 h-12 rounded-xl bg-[#0B5CFF]/8 flex items-center justify-center text-[#0B5CFF] group-hover:bg-[#0B5CFF] group-hover:text-white transition-colors">
                  <s.icon className="w-5 h-5" strokeWidth={1.8} />
                </span>
                <h3 className="font-display font-bold text-base text-navy-950 mt-4">{s.name}</h3>
                <span className="inline-flex items-center gap-1.5 text-[#0B5CFF] text-xs font-semibold mt-3">
                  Learn More <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <CtaBanner />
        </div>
      </section>
    </>
  )
}
