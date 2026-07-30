import { Link } from 'react-router-dom'
import { ArrowRight, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-20" />
      <div className="relative text-center px-6">
        <span className="font-display font-black text-8xl text-white/10 tracking-tight">404</span>
        <h1 className="font-display font-bold text-3xl text-white mt-2">Page Not Found</h1>
        <p className="text-white/50 mt-3 max-w-sm mx-auto">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#0B5CFF] text-white text-sm font-semibold px-6 py-3.5 rounded-full hover:bg-[#0A4FE0] transition-colors mt-8"
        >
          <Home className="w-4 h-4" />
          Back to Home
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
