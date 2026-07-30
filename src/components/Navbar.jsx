import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'
import Logo from './Logo'
import { services } from '../data/services'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services', hasDropdown: true },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'About Us', to: '/about' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-950/90 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Logo variant="light" />

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.to}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                      isActive ? 'text-white' : 'text-white/70 hover:text-white'
                    }`
                  }
                >
                  {link.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </NavLink>
                {dropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72">
                    <div className="bg-navy-900 border border-white/10 rounded-2xl shadow-2xl p-2 grid gap-1">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                        >
                          <span className="w-8 h-8 rounded-lg bg-[#0B5CFF]/15 flex items-center justify-center text-[#2E75FF] group-hover:bg-[#0B5CFF]/25 transition-colors">
                            <s.icon className="w-4 h-4" />
                          </span>
                          <span className="text-sm text-white/85 font-medium">{s.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    isActive ? 'text-white' : 'text-white/70 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            )
          )}
        </div>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center gap-2 bg-[#0B5CFF] text-white text-sm font-semibold px-5 py-3 rounded-full hover:bg-[#0A4FE0] transition-colors shadow-[0_12px_30px_-10px_rgb(11,92,255,0.6)]"
        >
          Get Free Consultation
          <ArrowRight className="w-4 h-4" />
        </Link>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden mx-4 mt-3 bg-navy-900 border border-white/10 rounded-2xl p-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-4 py-3 text-sm font-medium rounded-xl ${
                  isActive ? 'bg-white/10 text-white' : 'text-white/70'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="mt-2 inline-flex items-center justify-center gap-2 bg-[#0B5CFF] text-white text-sm font-semibold px-5 py-3 rounded-full"
          >
            Get Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </header>
  )
}
