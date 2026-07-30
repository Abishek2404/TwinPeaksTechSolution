import Hero from '../components/home/Hero'
import ServicesGrid from '../components/home/ServicesGrid'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Process from '../components/home/Process'
import PortfolioPreview from '../components/home/PortfolioPreview'
import Testimonials from '../components/home/Testimonials'
import PricingPreview from '../components/home/PricingPreview'
import BlogPreview from '../components/home/BlogPreview'
import SectionHeader from '../components/SectionHeader'
import FaqAccordion from '../components/FaqAccordion'
import CtaBanner from '../components/CtaBanner'
import { faqs } from '../data/pricing'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <Process />
      <PortfolioPreview />
      <Testimonials />
      <PricingPreview />
      <BlogPreview />

      <section className="py-24 bg-slate-100/60">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="FAQ"
            heading="Frequently Asked"
            highlight="Questions"
            sub="Everything you need to know before starting a project with us."
          />
          <div className="mt-14">
            <FaqAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <CtaBanner />
        </div>
      </section>
    </>
  )
}
