import { Rocket, Smile, Briefcase, Headset, ShieldCheck, Lightbulb, Target, Users, Flag } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'
import CtaBanner from '../components/CtaBanner'

const stats = [
  { icon: Rocket, value: '50+', label: 'Projects Completed' },
  { icon: Smile, value: '30+', label: 'Happy Clients' },
  { icon: Briefcase, value: '2+', label: 'Years of Experience' },
  { icon: Headset, value: '24/7', label: 'Support Available' },
]

const values = [
  { icon: ShieldCheck, title: 'Integrity', desc: 'We believe in transparency, honesty and building trust with every client.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'We embrace new technologies and creative ideas to deliver smarter solutions.' },
  { icon: Target, title: 'Quality', desc: 'We are committed to delivering high-quality products that exceed expectations.' },
  { icon: Users, title: 'Client Success', desc: 'Your success is our success. We work as your partner throughout the journey.' },
]

const timeline = [
  { year: '2024', title: 'Twin Peaks Founded', desc: 'Started as a two-person studio taking on freelance web projects in Vellore.' },
  { year: '2025', title: 'First Enterprise Client', desc: 'Delivered our first large-scale web application for a healthcare client.' },
  { year: '2026', title: 'AI Solutions Launched', desc: 'Expanded into AI-powered products, chatbots, and automation for clients.' },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        heading="We're More Than Just"
        highlight="Developers"
        sub="We are a team of passionate innovators, problem solvers and tech enthusiasts dedicated to turning ideas into digital reality. Our goal is to build solutions that create real impact."
      />

      <section className="pt-16 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-navy-950 rounded-2xl p-7">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <span className="w-12 h-12 rounded-full bg-[#0B5CFF] flex items-center justify-center shrink-0">
                  <s.icon className="w-5 h-5 text-white" />
                </span>
                <div>
                  <p className="text-white font-display font-bold text-2xl leading-none">{s.value}</p>
                  <p className="text-white/50 text-xs mt-1.5">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
          <div>
            <span className="text-[#0B5CFF] text-xs font-bold tracking-[0.15em] uppercase">Our Values</span>
            <h2 className="font-display font-bold text-3xl text-navy-950 mt-3">
              The Principles That Drive <span className="text-gradient-blue">Everything We Do</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              {values.map((v) => (
                <div key={v.title} className="flex gap-3">
                  <span className="w-10 h-10 rounded-xl bg-[#0B5CFF]/8 flex items-center justify-center text-[#0B5CFF] shrink-0">
                    <v.icon className="w-5 h-5" strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy-950 text-sm">{v.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mt-1">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="text-[#0B5CFF] text-xs font-bold tracking-[0.15em] uppercase">Our Mission</span>
            <h2 className="font-display font-bold text-3xl text-navy-950 mt-3">
              Empowering Businesses With <span className="text-gradient-blue">Technology</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mt-4">
              Our mission is to empower startups, businesses and enterprises with cutting-edge digital solutions that drive growth, improve efficiency and create meaningful experiences.
            </p>
            <div className="bg-slate-100/60 rounded-2xl p-6 mt-6 flex gap-4">
              <span className="w-12 h-12 rounded-full bg-[#0B5CFF] flex items-center justify-center shrink-0">
                <Flag className="w-5 h-5 text-white" />
              </span>
              <div>
                <h3 className="font-display font-bold text-navy-950 text-base">Our Vision</h3>
                <p className="text-slate-600 text-sm leading-relaxed mt-1.5">
                  To become a globally trusted technology partner known for delivering innovative, scalable and impactful digital solutions that shape a better tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-100/60">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader eyebrow="Our Journey" heading="How We" highlight="Got Here" />
          <div className="mt-14 flex flex-col gap-8">
            {timeline.map((t, i) => (
              <div key={t.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <span className="w-14 h-14 rounded-full bg-navy-950 text-white font-display font-bold text-sm flex items-center justify-center shrink-0">
                    {t.year}
                  </span>
                  {i < timeline.length - 1 && <span className="w-px flex-1 bg-slate-300 mt-2" />}
                </div>
                <div className="pb-4">
                  <h3 className="font-display font-bold text-lg text-navy-950">{t.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mt-1.5">{t.desc}</p>
                </div>
              </div>
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
