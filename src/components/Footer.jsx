import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import Logo from './Logo'
import { services } from '../data/services'

// Lucide dropped brand/logo marks, so these ship as small inline SVGs.
const GithubMark = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18.92-.26 1.9-.38 2.88-.39.98.01 1.96.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.83 1.19 3.09 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
  </svg>
)
const LinkedinMark = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
)
const XMark = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.6 10.6 20.2 3h-1.9l-5.7 6.6L8 3H2.8l6.9 10.1L2.8 21h1.9l6.1-7 4.9 7h5.2l-7.2-10.4Zm-2.2 2.5-.7-1L5.1 4.4h2.4l4.5 6.5.7 1 5.9 8.4h-2.4l-4.8-6.8Z" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="md:col-span-1">
            <Logo variant="light" />
            <p className="text-white/50 text-sm leading-relaxed mt-5 max-w-xs">
              We help startups, businesses and enterprises build modern websites, mobile apps, and AI solutions that drive growth.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[
                { Icon: GithubMark, label: 'GitHub' },
                { Icon: LinkedinMark, label: 'LinkedIn' },
                { Icon: XMark, label: 'X (Twitter)' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide mb-4">Services</h4>
            <ul className="flex flex-col gap-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-white/50 hover:text-white text-sm transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide mb-4">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: 'About Us', to: '/about' },
                { label: 'Portfolio', to: '/portfolio' },
                { label: 'Pricing', to: '/pricing' },
                { label: 'Blog', to: '/blog' },
                { label: 'Contact', to: '/contact' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/50 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide mb-4">Get In Touch</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2.5 text-white/50 text-sm">
                <Mail className="w-4 h-4 shrink-0" /> twinpeakstech@gmail.com
              </li>
              <li className="flex items-center gap-2.5 text-white/50 text-sm">
                <Phone className="w-4 h-4 shrink-0" /> +91 97515 23496
              </li>
              <li className="flex items-center gap-2.5 text-white/50 text-sm">
                <MapPin className="w-4 h-4 shrink-0" /> Vellore, Tamil Nadu, India
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} Twin Peaks Tech Solution. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
