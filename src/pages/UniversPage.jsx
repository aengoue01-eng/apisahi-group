import { motion } from 'framer-motion'
import PageWrapper from '@/components/layout/PageWrapper'
import PageHero from '@/components/ui/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
import UniversCard from '@/components/univers/UniversCard'
import { SUBSIDIARIES } from '@/constants/subsidiaries'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function UniversPage() {
  const { ref, inView, staggerVariants, variants } = useScrollAnimation(0.05)

  return (
    <PageWrapper>
      <PageHero
        title="Nos Univers"
        subtitle="4 univers, une philosophie d'excellence et d'authenticité"
        breadcrumb="Nos Univers"
      />

      <section className="section-py bg-beige">
        <div className="container-custom">
          <SectionTitle
            tag="Découvrir"
            title="Des univers pensés pour vous"
            subtitle="Chaque univers possède son identité propre tout en partageant les valeurs d'excellence et d'authenticité du groupe."
            center
          />

          <motion.div
            ref={ref}
            variants={staggerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {SUBSIDIARIES.map((subsidiary) => (
              <motion.div key={subsidiary.id} variants={variants}>
                <UniversCard subsidiary={subsidiary} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
