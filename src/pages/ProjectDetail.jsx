import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import CtaBanner from '../components/CtaBanner'
import { getProjectBySlug, projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) return <Navigate to="/portfolio" replace />

  const more = projects.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <>
      <section className="relative pt-32 pb-20 min-h-[320px] overflow-hidden" style={{ backgroundColor: project.color }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6">
          <span className="inline-block text-xs font-bold tracking-wide uppercase bg-white/15 backdrop-blur-sm text-white px-4 py-1.5 rounded-full mb-5">
            {project.category}
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight">{project.name}</h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl">{project.tagline}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 mb-14">
            <div>
              <h2 className="font-display font-bold text-xl text-navy-950 mb-3">The Problem</h2>
              <p className="text-slate-600 leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <h2 className="font-display font-bold text-xl text-navy-950 mb-3">Our Solution</h2>
              <p className="text-slate-600 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          <div className="bg-navy-950 rounded-3xl p-8 md:p-10 mb-14">
            <h2 className="font-display font-bold text-xl text-white mb-6">Results</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {project.results.map((r) => (
                <div key={r} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-300 shrink-0 mt-0.5" />
                  <p className="text-white/85 text-sm leading-relaxed">{r}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-navy-950 mb-4">Technology Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <span key={t} className="text-sm font-medium text-navy-950 bg-slate-100 border border-slate-200 px-4 py-2 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-100/60">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display font-bold text-2xl text-navy-950 mb-8">More Projects</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {more.map((p) => (
              <Link key={p.slug} to={`/portfolio/${p.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-slate-200/70 hover:shadow-lg transition-shadow">
                <div className="h-32 relative overflow-hidden">
                  {p.image ? (
                    <>
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover object-center" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <span className="absolute bottom-3 left-3 text-white font-display font-semibold text-sm">{p.name}</span>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: p.color }}>
                      <span className="text-white/90 font-display font-semibold text-sm text-center px-4">{p.name}</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <span className="text-[#0B5CFF] text-xs font-semibold">{p.category}</span>
                  <p className="font-display font-bold text-sm text-navy-950 mt-1">{p.name}</p>
                  <span className="inline-flex items-center gap-1.5 text-[#0B5CFF] text-xs font-semibold mt-2">
                    View Details <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
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
