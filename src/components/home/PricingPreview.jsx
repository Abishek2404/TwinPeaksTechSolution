import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import SectionHeader from '../SectionHeader'
import { plans } from '../../data/pricing'

export default function PricingPreview() {
  return (
    <section className="py-24 bg-slate-100/60">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Pricing Plans"
          heading="Simple, Transparent"
          highlight="Pricing for Every Need"
          sub="Choose the perfect plan for your project. No hidden fees, no surprises — just powerful solutions that deliver results."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl p-6 border flex flex-col ${
                p.popular
                  ? 'bg-navy-950 border-[#0B5CFF] shadow-[0_25px_60px_-20px_rgb(11,92,255,0.5)]'
                  : 'bg-white border-slate-200/70'
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0B5CFF] text-white text-[10px] font-bold tracking-wide px-3 py-1 rounded-full">
                  MOST POPULAR
                </span>
              )}
              <h3 className={`font-display font-bold text-lg ${p.popular ? 'text-white' : 'text-navy-950'}`}>{p.name}</h3>
              <p className={`text-xs mt-1 ${p.popular ? 'text-white/50' : 'text-slate-500'}`}>{p.tagline}</p>
              <div className="mt-4">
                {p.price ? (
                  <>
                    <span className={`font-display font-extrabold text-3xl ${p.popular ? 'text-white' : 'text-navy-950'}`}>
                      {p.price}
                    </span>
                    <span className={`text-sm ${p.popular ? 'text-white/50' : 'text-slate-500'}`}> /month</span>
                  </>
                ) : (
                  <span className={`font-display font-extrabold text-3xl ${p.popular ? 'text-white' : 'text-navy-950'}`}>Custom</span>
                )}
              </div>
              <ul className="flex flex-col gap-2.5 mt-5 flex-1">
                {p.features.slice(0, 4).map((f) => (
                  <li key={f} className={`flex items-start gap-2 text-xs ${p.popular ? 'text-white/70' : 'text-slate-600'}`}>
                    <Check className="w-3.5 h-3.5 text-[#0B5CFF] shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/pricing"
                className={`mt-6 inline-flex items-center justify-center rounded-full py-3 text-sm font-semibold transition-colors ${
                  p.popular
                    ? 'bg-[#0B5CFF] text-white hover:bg-[#0A4FE0]'
                    : 'border border-[#0B5CFF]/30 text-[#0B5CFF] hover:bg-[#0B5CFF]/5'
                }`}
              >
                {p.price ? 'Get Started' : 'Contact Us'}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
