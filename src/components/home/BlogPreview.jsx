import { Link } from 'react-router-dom'
import { ArrowRight, Calendar } from 'lucide-react'
import SectionHeader from '../SectionHeader'
import { posts } from '../../data/posts'

export default function BlogPreview() {
  const featured = posts.slice(0, 3)
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Our Blog"
          heading="Insights. Ideas."
          highlight="Innovation."
          sub="Explore our latest articles on technology, development, design and business."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {featured.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="group">
              <div
                className="h-40 rounded-2xl flex items-center justify-center relative overflow-hidden"
                style={{ backgroundColor: post.color }}
              >
                <span className="text-white/25 font-display font-black text-5xl">{post.category[0]}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-3 left-3 text-white text-xs font-semibold bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-500 text-xs mt-4">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}
                <span>· {post.readTime}</span>
              </div>
              <h3 className="font-display font-bold text-lg text-navy-950 mt-2 group-hover:text-[#0B5CFF] transition-colors">
                {post.title}
              </h3>
              <span className="inline-flex items-center gap-1.5 text-[#0B5CFF] text-sm font-semibold mt-3">
                Read More <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
