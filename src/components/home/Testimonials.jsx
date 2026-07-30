import { Star } from 'lucide-react'
import SectionHeader from '../SectionHeader'

const testimonials = [
  {
    quote: 'Twin Peaks rebuilt our booking system in six weeks and online bookings tripled almost immediately. They explained every tradeoff instead of just building what we asked for.',
    name: 'Ananya Rao',
    role: 'Founder, MedixCare Hospital',
    initial: 'A',
  },
  {
    quote: 'We came in with a messy spreadsheet-based process and left with a real product. The team was upfront about timelines and never missed a milestone.',
    name: 'Karthik Iyer',
    role: 'CEO, FinMate',
    initial: 'K',
  },
  {
    quote: 'Our checkout conversion jumped over 30% after the rebuild. What stood out was how much they pushed back on ideas that wouldn\'t have worked — that saved us real money.',
    name: 'Priya Menon',
    role: 'Head of Growth, ShopHub',
    initial: 'P',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Testimonials"
          heading="What Our Clients"
          highlight="Say About Us"
          sub="We measure success by the outcomes our clients see — here's some of what they've told us."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-slate-100/60 rounded-2xl p-7 flex flex-col">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#0B5CFF] text-[#0B5CFF]" />
                ))}
              </div>
              <p className="text-navy-950/80 text-sm leading-relaxed flex-1">"{t.quote}"</p>
              <div className="flex items-center gap-3 mt-6">
                <span className="w-11 h-11 rounded-full bg-[#0B5CFF] text-white font-display font-bold flex items-center justify-center text-sm">
                  {t.initial}
                </span>
                <div>
                  <p className="font-semibold text-navy-950 text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
