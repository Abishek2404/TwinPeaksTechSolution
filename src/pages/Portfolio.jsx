import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import CtaBanner from '../components/CtaBanner'
import { projects, filters } from '../data/projects'

export default function Portfolio() {
  const [active, setActive] = useState('all')
  const visible = active === 'all' ? projects : projects.filter((p) => p.filter === active)

  return (
    <>
      <PageHero
        eyebrow="Our Portfolio"
        heading="Our Recent"
        highlight="Work"
        sub="We take pride in delivering high-quality digital solutions that help our clients grow their business and achieve their goals."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-colors ${
                  active === f.key
                    ? 'bg-[#0B5CFF] text-white border-[#0B5CFF]'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-[#0B5CFF]/40'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((p) => (
              <div key={p.slug} className="bg-white rounded-2xl overflow-hidden border border-slate-200/70 group hover:shadow-xl transition-shadow">
                <div className="h-52 relative overflow-hidden">
                  {p.image ? (
                    <>
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover object-center" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                      <span className="absolute top-3 left-3 text-white text-[10px] font-semibold bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        {p.category}
                      </span>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <span className="text-white font-display font-bold text-lg">{p.name}</span>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: p.color }}>
                      <span className="text-white/90 font-display font-bold text-xl text-center px-6">{p.name}</span>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      <span className="absolute top-3 left-3 text-white text-[10px] font-semibold bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        {p.category}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-lg text-navy-950">{p.name}</h3>
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
        </div>
      </section>

      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <CtaBanner title="Have a Project In Mind?" sub="Let's turn your idea into a case study like these." />
        </div>
      </section>
    </>
  )
}
