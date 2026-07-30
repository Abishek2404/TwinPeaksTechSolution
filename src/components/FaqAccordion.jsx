import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

export default function FaqAccordion({ faqs }) {
  const [open, setOpen] = useState(0)

  return (
    <div className="flex flex-col gap-3 max-w-3xl mx-auto">
      {faqs.map((f, i) => {
        const isOpen = open === i
        return (
          <div key={f.q} className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-navy-950 text-sm md:text-base">{f.q}</span>
              <span
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                  isOpen ? 'bg-[#0B5CFF] text-white' : 'bg-slate-100 text-slate-500'
                }`}
              >
                {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-slate-600 text-sm leading-relaxed">{f.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
