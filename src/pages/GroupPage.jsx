import { motion } from 'framer-motion'
import PageWrapper from '@/components/layout/PageWrapper'
import PageHero from '@/components/ui/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { SUBSIDIARIES } from '@/constants/subsidiaries'
import { Link } from 'react-router-dom'

const VALEURS = [
  { title: 'Notre Mission', color: '#C9A84C', text: "Créer des univers inspirants qui allient confort, esthétique, émotion et bien-être afin d'accompagner chacun de vos instants de vie." },
  { title: 'Notre Vision', color: '#7A9E7E', text: "Faire de votre quotidien une expérience élégante, authentique et émotionnelle. Chaque détail compte et l'excellence réside dans l'attention portée à vos besoins." },
  { title: 'Nos Valeurs', color: '#C9A84C', text: "Excellence, authenticité, raffinement et émotion. Nous croyons que les plus beaux souvenirs naissent souvent des détails." },
]

function PresentationSection() {
  const { ref, inView, variants, staggerVariants } = useScrollAnimation()
  return (
    <section className="section-py bg-beige">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div ref={ref} variants={staggerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <motion.div variants={variants}>
              <SectionTitle tag="Présentation" title="APISAHI Group, un art de vivre" />
            </motion.div>
            <motion.p variants={variants} className="text-gray-600 leading-relaxed mb-4">
              APISAHI Group est un groupe lifestyle réunissant plusieurs marques complémentaires, pensées pour enrichir votre quotidien à travers des expériences uniques, élégantes et authentiques.
            </motion.p>
            <motion.p variants={variants} className="text-gray-600 leading-relaxed mb-4">
              À travers nos différentes filiales, nous accompagnons nos clients dans les domaines de la conciergerie, du bien-être, de la beauté, de l'art de vivre et de l'expérience cadeau.
            </motion.p>
            <motion.p variants={variants} className="text-gray-600 leading-relaxed mb-8">
              Nous croyons que les plus beaux souvenirs naissent souvent des détails. C'est pourquoi nous mettons un point d'honneur à proposer des services et des créations où qualité, esthétique et attention se rencontrent harmonieusement.
            </motion.p>
            <motion.blockquote variants={variants} className="border-l-4 border-gold pl-6 italic text-noir font-heading text-lg">
              "L'art de sublimer vos instants de vie."
            </motion.blockquote>
          </motion.div>
          <div className="relative">
            <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-noir to-gray-800 flex items-center justify-center">
              <div className="text-center text-beige px-8">
                <div className="w-16 h-0.5 bg-gold mx-auto mb-8" />
                <p className="font-heading text-3xl font-bold">APISAHI Group</p>
                <p className="text-gold text-xs tracking-widest uppercase mt-4">Lifestyle · Excellence</p>
                <div className="w-16 h-0.5 bg-gold/30 mx-auto mt-8" />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

function VisionSection() {
  const { ref, inView, variants, staggerVariants } = useScrollAnimation()
  return (
    <section className="section-py bg-noir">
      <div className="container-custom">
        <SectionTitle tag="Nos engagements" title="Mission · Vision · Valeurs" center light />
        <motion.div
          ref={ref}
          variants={staggerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {VALEURS.map((v) => (
            <motion.div
              key={v.title}
              variants={variants}
              className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-gold/30 transition-colors duration-300"
            >
              <div className="w-8 h-0.5 mb-6" style={{ backgroundColor: v.color }} />
              <h3 className="font-heading font-semibold text-xl mb-4" style={{ color: v.color }}>{v.title}</h3>
              <p className="text-beige/70 text-sm leading-relaxed">{v.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function SubsidiariesTimeline() {
  const { ref, inView, staggerVariants, variants } = useScrollAnimation()
  return (
    <section className="section-py bg-beige">
      <div className="container-custom">
        <SectionTitle tag="Nos filiales" title="Les 4 univers du groupe" center />
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
              className="relative bg-white rounded-xl p-6 shadow-sm border border-beige-dark hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-0 left-6 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-md font-heading font-bold text-sm"
                style={{ backgroundColor: s.color, color: '#fff' }}>
                {s.name.slice(0, 2).toUpperCase()}
              </div>
              <div className="pt-6">
                <h3 className="font-heading font-semibold text-noir text-base mb-2">{s.name}</h3>
                <p className="text-xs text-gold uppercase tracking-wide mb-3">{s.tagline}</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.shortDesc}</p>
                <Link to={s.path} className="text-sm font-medium text-gold hover:text-gold-dark transition-colors inline-flex items-center gap-1">
                  Voir les offres →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default function GroupPage() {
  return (
    <PageWrapper>
      <PageHero
        title="APISAHI Group"
        subtitle="Notre histoire, notre vision, notre philosophie"
        breadcrumb="APISAHI Group"
      />
      <PresentationSection />
      <VisionSection />
      <SubsidiariesTimeline />
    </PageWrapper>
  )
}
