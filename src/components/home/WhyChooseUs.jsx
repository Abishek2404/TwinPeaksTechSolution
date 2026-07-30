import { ShieldCheck, Target, Users, Lightbulb } from 'lucide-react'
import SectionHeader from '../SectionHeader'

const values = [
  { icon: ShieldCheck, title: 'Integrity', desc: 'We believe in transparency, honesty and building trust with every client.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'We embrace new technologies and creative ideas to deliver smarter solutions.' },
  { icon: Target, title: 'Quality', desc: 'We are committed to delivering high-quality products that exceed expectations.' },
  { icon: Users, title: 'Client Success', desc: 'Your success is our success. We work as your partner throughout the journey.' },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Why Choose Us"
          heading="The Principles That"
          highlight="Drive Everything We Do"
          sub="We're a team of passionate innovators and problem solvers dedicated to turning ideas into digital reality."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {values.map((v) => (
            <div key={v.title} className="text-center flex flex-col items-center">
              <span className="w-16 h-16 rounded-2xl bg-[#0B5CFF]/8 flex items-center justify-center text-[#0B5CFF] mb-5">
                <v.icon className="w-7 h-7" strokeWidth={1.8} />
              </span>
              <h3 className="font-display font-bold text-lg text-navy-950">{v.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mt-2 max-w-[220px]">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
