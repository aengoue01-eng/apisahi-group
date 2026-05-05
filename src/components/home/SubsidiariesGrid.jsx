import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import SectionTitle from '@/components/ui/SectionTitle'
import { SUBSIDIARIES } from '@/constants/subsidiaries'

export default function SubsidiariesGrid() {
  const { ref, inView, variants, staggerVariants } = useScrollAnimation()

  return (
    <section className="section-py bg-noir">
      <div className="container-custom">
        <SectionTitle
          tag="Nos Univers"
          title="4 filiales, une philosophie d'excellence"
          subtitle="Chaque univers a été imaginé avec une même ambition : offrir excellence, raffinement et émotion à chaque instant."
          center
          light
        />

        <motion.div
          ref={ref}
          variants={staggerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SUBSIDIARIES.map((s) => (
            <motion.div
              key={s.id}
              variants={variants}
              className="group relative bg-white/5 border border-white/10 rounded-lg overflow-hidden
                         hover:border-gold/50 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              {/* Top color accent */}
              <div className="h-1 w-full" style={{ backgroundColor: s.color }} />

              <div className="p-6">
                <h3 className="font-heading font-semibold text-beige text-lg mb-2 group-hover:text-gold transition-colors duration-200">
                  {s.name}
                </h3>
                <p className="text-xs text-gold tracking-wide uppercase mb-4">{s.tagline}</p>
                <p className="text-sm text-beige/60 leading-relaxed mb-6">{s.shortDesc}</p>
                <Link
                  to={s.path}
                  className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                  style={{ color: s.color }}
                >
                  Découvrir
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
