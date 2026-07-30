import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import CtaBanner from '../components/CtaBanner'
import PageHero from '../components/PageHero'
import { services } from '../data/services'

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        heading="Everything You Need to"
        highlight="Build & Scale"
        sub="From your first landing page to a full product platform — explore the services we use to get you there."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-6">
            {services.map((s, i) => (
              <div
                key={s.slug}
                className={`grid md:grid-cols-2 gap-8 items-center rounded-3xl border border-slate-200/70 p-8 md:p-10 ${
                  i % 2 === 1 ? 'bg-slate-100/60' : 'bg-white'
                }`}
              >
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <span className="w-14 h-14 rounded-2xl bg-[#0B5CFF]/8 flex items-center justify-center text-[#0B5CFF] mb-5">
                    <s.icon className="w-6 h-6" strokeWidth={1.8} />
                  </span>
                  <h2 className="font-display font-bold text-2xl md:text-3xl text-navy-950">{s.name}</h2>
                  <p className="text-slate-600 leading-relaxed mt-3">{s.description}</p>
                  <Link
                    to={`/services/${s.slug}`}
                    className="inline-flex items-center gap-2 text-[#0B5CFF] font-semibold text-sm mt-5"
                  >
                    Explore {s.name}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={`bg-navy-950 rounded-2xl p-7 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <p className="text-white/50 text-xs font-semibold tracking-wide uppercase mb-4">What's Included</p>
                  <ul className="flex flex-col gap-3">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-white/85 text-sm">
                        <Check className="w-4 h-4 text-cyan-300 shrink-0 mt-0.5" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <CtaBanner
            title="Not Sure Which Service You Need?"
            sub="Tell us about your project and we'll recommend the right approach."
          />
        </div>
      </section>
    </>
  )
}
