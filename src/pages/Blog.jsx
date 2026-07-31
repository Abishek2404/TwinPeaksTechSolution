import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, ArrowRight, FileText, Lightbulb, TrendingUp, Users, Rocket } from 'lucide-react'
import PageHero from '../components/PageHero'
import { posts, categories } from '../data/posts'

const perks = [
  { icon: FileText, title: 'Expert Insights', desc: 'Well-researched articles from industry experts.' },
  { icon: Lightbulb, title: 'Actionable Ideas', desc: 'Practical tips you can implement right away.' },
  { icon: TrendingUp, title: 'Stay Ahead', desc: 'Latest trends and updates to keep you ahead.' },
  { icon: Users, title: 'Community Driven', desc: 'Sharing knowledge to empower our community.' },
]

export default function Blog() {
  const [active, setActive] = useState('All Posts')
  const visible = active === 'All Posts' ? posts : posts.filter((p) => p.category === active)

  return (
    <>
      <PageHero
        eyebrow="Our Blog"
        heading="Insights. Ideas."
        highlight="Innovation."
        sub="Explore our latest articles on technology, development, design and business to stay updated and inspired."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-colors ${
                  active === c
                    ? 'bg-[#0B5CFF] text-white border-[#0B5CFF]'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-[#0B5CFF]/40'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-slate-200/70 hover:shadow-xl transition-shadow">
                <div className="h-44 relative overflow-hidden">
                  {post.image ? (
                    <>
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover object-center" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                      <span className="absolute bottom-3 left-3 text-white text-[10px] font-semibold bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: post.color }}>
                      <span className="text-white/20 font-display font-black text-6xl">{post.category[0]}</span>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <span className="absolute bottom-3 left-3 text-white text-[10px] font-semibold bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}
                    <span>· {post.readTime}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-navy-950 mt-2.5 group-hover:text-[#0B5CFF] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mt-2 line-clamp-2">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 text-[#0B5CFF] text-sm font-semibold mt-4">
                    Read More <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 border border-slate-200/70 rounded-2xl p-6">
            {perks.map((p) => (
              <div key={p.title} className="flex items-start gap-3">
                <span className="w-10 h-10 rounded-xl bg-[#0B5CFF]/8 flex items-center justify-center text-[#0B5CFF] shrink-0">
                  <p.icon className="w-5 h-5" strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="font-semibold text-navy-950 text-sm">{p.title}</h3>
                  <p className="text-slate-500 text-xs mt-1">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-navy-950 rounded-2xl px-7 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center md:text-left">
              <span className="hidden sm:flex w-12 h-12 rounded-full bg-[#0B5CFF] items-center justify-center shrink-0">
                <Rocket className="w-5 h-5 text-white" />
              </span>
              <div>
                <h3 className="text-white font-display font-bold text-xl">Don't Miss Future Updates</h3>
                <p className="text-white/50 text-sm mt-1">Subscribe to our newsletter and get the latest insights delivered to your inbox.</p>
              </div>
            </div>
            <form
              className="flex w-full md:w-auto gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="bg-white/10 border border-white/15 text-white placeholder:text-white/40 text-sm rounded-full px-5 py-3 flex-1 md:w-64 outline-none focus:border-[#0B5CFF]"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#0B5CFF] text-white text-sm font-semibold px-5 py-3 rounded-full hover:bg-[#0A4FE0] transition-colors shrink-0"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
