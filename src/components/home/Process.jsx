import SectionHeader from '../SectionHeader'

const steps = [
  { num: '01', title: 'Discover', desc: 'We learn your business, your users, and the outcome that would make this project a win.' },
  { num: '02', title: 'Design', desc: 'Wireframes and visual design that map every screen to a clear user goal.' },
  { num: '03', title: 'Build', desc: 'Phase-by-phase development with regular check-ins, not a single black-box delivery.' },
  { num: '04', title: 'Launch & Support', desc: 'We ship, monitor, and stay on for ongoing maintenance and iteration.' },
]

export default function Process() {
  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Our Process"
          heading="How We Turn Ideas Into"
          highlight="Working Software"
          sub="A clear, phased process so you always know what's next and why."
          dark
        />

        <div className="grid md:grid-cols-4 gap-6 mt-16 relative">
          <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          {steps.map((s) => (
            <div key={s.num} className="relative">
              <div className="w-14 h-14 rounded-full bg-navy-900 border border-white/15 flex items-center justify-center text-cyan-300 font-display font-bold text-sm relative z-10">
                {s.num}
              </div>
              <h3 className="font-display font-bold text-lg text-white mt-5">{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
