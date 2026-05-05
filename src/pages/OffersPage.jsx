import { useState, useEffect } from 'react'
import PageWrapper from '@/components/layout/PageWrapper'
import PageHero from '@/components/ui/PageHero'
import SubsidiarySection from '@/components/offers/SubsidiarySection'
import { SUBSIDIARIES } from '@/constants/subsidiaries'

export default function OffersPage() {
  const [activeSection, setActiveSection] = useState(SUBSIDIARIES[0].id)

  useEffect(() => {
    // Scroll to anchor on load if hash present
    const hash = window.location.hash.replace('#', '')
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    }
  }, [])

  useEffect(() => {
    const observers = SUBSIDIARIES.map((s) => {
      const el = document.getElementById(s.id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(s.id) },
        { threshold: 0.3 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <PageWrapper>
      <PageHero
        title="Nos Offres & Services"
        subtitle="Des solutions sur mesure pour chacun de vos besoins"
        breadcrumb="Nos Offres & Services"
      />

      {/* Sticky nav */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-beige-dark shadow-sm">
        <div className="container-custom">
          <div className="flex items-center overflow-x-auto gap-1 py-1 no-scrollbar">
            {SUBSIDIARIES.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-all duration-200"
                style={activeSection === s.id
                  ? { borderColor: s.color, color: s.color }
                  : { borderColor: 'transparent', color: '#6B7280' }
                }
              >
                <span>{s.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {SUBSIDIARIES.map((s, i) => (
        <SubsidiarySection key={s.id} subsidiary={s} alternate={i % 2 !== 0} />
      ))}
    </PageWrapper>
  )
}
