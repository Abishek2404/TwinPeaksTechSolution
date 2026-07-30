import { useParams, Link, Navigate } from 'react-router-dom'
import { Calendar, ArrowLeft, ArrowRight } from 'lucide-react'
import CtaBanner from '../components/CtaBanner'
import { getPostBySlug, posts } from '../data/posts'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) return <Navigate to="/blog" replace />

  const more = posts.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <>
      <section className="relative pt-32 pb-16" style={{ backgroundColor: post.color }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-6">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-white/70 text-sm font-medium mb-6 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <span className="inline-block text-xs font-bold tracking-wide uppercase bg-white/15 backdrop-blur-sm text-white px-4 py-1.5 rounded-full mb-5">
            {post.category}
          </span>
          <h1 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight leading-tight">{post.title}</h1>
          <div className="flex items-center gap-3 text-white/70 text-sm mt-5">
            <Calendar className="w-4 h-4" />
            {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            <span>· {post.readTime}</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex flex-col gap-5">
            {post.body.split('\n\n').map((para, i) => (
              <p key={i} className="text-slate-700 leading-relaxed text-base">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-100/60">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display font-bold text-2xl text-navy-950 mb-8">More Articles</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {more.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-slate-200/70 hover:shadow-lg transition-shadow">
                <div className="h-32 flex items-center justify-center" style={{ backgroundColor: p.color }}>
                  <span className="text-white/25 font-display font-black text-4xl">{p.category[0]}</span>
                </div>
                <div className="p-4">
                  <span className="text-[#0B5CFF] text-xs font-semibold">{p.category}</span>
                  <p className="font-display font-bold text-sm text-navy-950 mt-1 leading-snug">{p.title}</p>
                  <span className="inline-flex items-center gap-1.5 text-[#0B5CFF] text-xs font-semibold mt-3">
                    Read More <ArrowRight className="w-3 h-3" />
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
