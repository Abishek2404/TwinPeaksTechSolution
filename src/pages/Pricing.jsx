import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, Rocket, Code2, Gem, Building2, Headset, ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import FaqAccordion from '../components/FaqAccordion'
import SectionHeader from '../components/SectionHeader'
import { plans, faqs } from '../data/pricing'

const icons = { rocket: Rocket, code: Code2, diamond: Gem, building: Building2 }

export default function Pricing() {
  const [yearly, setYearly] = useState(true)

  const priceFor = (plan) => {
    if (!plan.price) return null
    const monthly = parseInt(plan.price.replace(/[₹,]/g, ''), 10)
    const value = yearly ? Math.round(monthly * 0.8) : monthly
    return `₹${value.toLocaleString('en-IN')}`
  }

  return (
    <>
      <PageHero
        eyebrow="Pricing Plans"
        heading="Simple, Transparent Pricing"
        highlight="Plans for Every Need"
        sub="Choose the perfect plan for your project. No hidden fees, no surprises — just powerful solutions that deliver results."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-14">
            <div className="inline-flex items-center bg-slate-100 rounded-full p-1">
              <button
                onClick={() => setYearly(false)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                  !yearly ? 'bg-white text-navy-950 shadow' : 'text-slate-500'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setYearly(true)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                  yearly ? 'bg-[#0B5CFF] text-white shadow' : 'text-slate-500'
                }`}
              >
                Yearly
              </button>
            </div>
            <span className="text-[#0B5CFF] text-xs font-semibold">↖ Save 20% with yearly</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {plans.map((p) => {
              const Icon = icons[p.icon]
              return (
                <div
                  key={p.name}
                  className={`relative rounded-2xl p-7 border flex flex-col ${
                    p.popular
                      ? 'bg-navy-950 border-[#0B5CFF] shadow-[0_25px_60px_-20px_rgb(11,92,255,0.5)] lg:scale-105'
                      : 'bg-white border-slate-200/70'
                  }`}
                >
                  {p.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0B5CFF] text-white text-[10px] font-bold tracking-wide px-3 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  )}
                  <span className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${p.popular ? 'bg-[#0B5CFF]/20 text-cyan-300' : 'bg-[#0B5CFF]/8 text-[#0B5CFF]'}`}>
                    <Icon className="w-6 h-6" strokeWidth={1.8} />
                  </span>
                  <h3 className={`font-display font-bold text-lg ${p.popular ? 'text-white' : 'text-navy-950'}`}>{p.name}</h3>
                  <p className={`text-xs mt-1.5 ${p.popular ? 'text-white/50' : 'text-slate-500'}`}>{p.tagline}</p>
                  <div className="mt-5">
                    {p.price ? (
                      <>
                        <span className={`font-display font-extrabold text-3xl ${p.popular ? 'text-white' : 'text-navy-950'}`}>
                          {priceFor(p)}
                        </span>
                        <span className={`text-sm ${p.popular ? 'text-white/50' : 'text-slate-500'}`}> /month</span>
                        <p className={`text-[11px] mt-1 ${p.popular ? 'text-white/40' : 'text-slate-400'}`}>Billed {yearly ? 'yearly' : 'monthly'}</p>
                      </>
                    ) : (
                      <>
                        <span className={`font-display font-extrabold text-3xl ${p.popular ? 'text-white' : 'text-navy-950'}`}>Custom</span>
                        <p className={`text-[11px] mt-1 ${p.popular ? 'text-white/40' : 'text-slate-400'}`}>Tailored to your needs</p>
                      </>
                    )}
                  </div>
                  <div className={`h-px my-5 ${p.popular ? 'bg-white/10' : 'bg-slate-200'}`} />
                  <ul className="flex flex-col gap-2.5 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className={`flex items-start gap-2 text-xs ${p.popular ? 'text-white/70' : 'text-slate-600'}`}>
                        <Check className="w-3.5 h-3.5 text-[#0B5CFF] shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`mt-6 inline-flex items-center justify-center rounded-full py-3 text-sm font-semibold transition-colors ${
                      p.popular
                        ? 'bg-[#0B5CFF] text-white hover:bg-[#0A4FE0]'
                        : 'border border-[#0B5CFF]/30 text-[#0B5CFF] hover:bg-[#0B5CFF]/5'
                    }`}
                  >
                    {p.cta}
                  </Link>
                </div>
              )
            })}
          </div>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-100/60 rounded-2xl px-7 py-6">
            <div className="flex items-center gap-4 text-center md:text-left">
              <span className="hidden sm:flex w-11 h-11 rounded-full bg-[#0B5CFF] items-center justify-center shrink-0">
                <Headset className="w-5 h-5 text-white" />
              </span>
              <div>
                <h3 className="font-display font-bold text-navy-950">Need something custom?</h3>
                <p className="text-slate-500 text-sm mt-0.5">We'll create a tailored solution that fits your exact requirements.</p>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#0B5CFF] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#0A4FE0] transition-colors shrink-0"
            >
              Let's Discuss Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-100/60">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader eyebrow="FAQ" heading="Pricing" highlight="Questions" />
          <div className="mt-14">
            <FaqAccordion faqs={faqs} />
          </div>
        </div>
      </section>
    </>
  )
}
