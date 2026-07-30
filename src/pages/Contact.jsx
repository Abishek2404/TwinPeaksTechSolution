import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck, Headset, CheckCircle2, ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'

const contactInfo = [
  { icon: Mail, title: 'Email Us', value: 'hello@twinpeakstech.com' },
  { icon: Phone, title: 'Call Us', value: '+91 97515 23496' },
  { icon: MapPin, title: 'Our Location', value: 'Vellore, Tamil Nadu, India' },
  { icon: Clock, title: 'Working Hours', value: 'Mon – Sat: 9:00 AM – 7:00 PM · Sunday: Closed' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        heading="Let's Build Something"
        highlight="Amazing Together"
        sub="Have a project in mind or need expert guidance? We'd love to hear from you. Reach out to us and let's turn your ideas into reality."
      />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-8">
          <div className="bg-slate-100/60 rounded-3xl p-8">
            <h2 className="font-display font-bold text-2xl text-navy-950">Get In Touch</h2>
            <p className="text-slate-600 text-sm leading-relaxed mt-3">
              We're here to answer your questions, discuss your project, and help you find the right solution for your business.
            </p>
            <div className="flex flex-col gap-5 mt-8">
              {contactInfo.map((c) => (
                <div key={c.title} className="flex items-start gap-4">
                  <span className="w-11 h-11 rounded-full bg-[#0B5CFF]/10 flex items-center justify-center text-[#0B5CFF] shrink-0">
                    <c.icon className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy-950 text-sm">{c.title}</h3>
                    <p className="text-slate-600 text-sm mt-0.5">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200/70">
            <h2 className="font-display font-bold text-2xl text-navy-950">Send Us a Message</h2>

            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16">
                <CheckCircle2 className="w-14 h-14 text-[#0B5CFF] mb-4" />
                <h3 className="font-display font-bold text-lg text-navy-950">Message Sent</h3>
                <p className="text-slate-600 text-sm mt-2 max-w-xs">
                  Thanks for reaching out — our team will get back to you within one business day.
                </p>
              </div>
            ) : (
              <form className="flex flex-col gap-4 mt-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="border border-slate-200 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-[#0B5CFF] transition-colors"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="border border-slate-200 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-[#0B5CFF] transition-colors"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="border border-slate-200 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-[#0B5CFF] transition-colors"
                />
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="border border-slate-200 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-[#0B5CFF] transition-colors text-slate-600"
                >
                  <option value="">Service You're Interested In</option>
                  <option>Website Development</option>
                  <option>Mobile App Development</option>
                  <option>Web Application Development</option>
                  <option>UI/UX Design</option>
                  <option>AI Solutions</option>
                  <option>Other</option>
                </select>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="border border-slate-200 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-[#0B5CFF] transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-[#0B5CFF] text-white text-sm font-semibold px-6 py-4 rounded-xl hover:bg-[#0A4FE0] transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
                <p className="flex items-center justify-center gap-1.5 text-slate-400 text-xs">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  We respect your privacy. Your information is safe with us.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-navy-950 to-navy-800 rounded-3xl px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
            <div className="flex items-center gap-4 text-center md:text-left">
              <span className="hidden sm:flex w-12 h-12 rounded-full bg-[#0B5CFF] items-center justify-center shrink-0">
                <Headset className="w-5 h-5 text-white" />
              </span>
              <div>
                <h3 className="text-white font-display font-bold text-lg">Prefer to Talk?</h3>
                <p className="text-white/50 text-sm mt-1">Let's connect directly! Our team is ready to discuss your ideas.</p>
              </div>
            </div>
            <a
              href="tel:+919751523496"
              className="inline-flex items-center gap-2 border border-white/25 text-white text-sm font-semibold px-6 py-3.5 rounded-full hover:bg-white/10 transition-colors shrink-0"
            >
              <Phone className="w-4 h-4" />
              Call Now: +91 97515 23496
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
