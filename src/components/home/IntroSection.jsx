import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import SectionTitle from '@/components/ui/SectionTitle'

const VALUES = [
  { label: 'Excellence', desc: 'Chaque détail compte dans la création de vos expériences.', color: '#C9A84C' },
  { label: 'Authenticité', desc: 'Des créations sincères, inspirées de nos racines africaines.', color: '#7A9E7E' },
  { label: 'Raffinement', desc: "L'élégance comme fil conducteur de tous nos univers.", color: '#7A9E7E' },
  { label: 'Émotion', desc: 'Créer des souvenirs qui marquent durablement votre vie.', color: '#C9A84C' },
]

export default function IntroSection() {
  const { ref, inView, variants, staggerVariants } = useScrollAnimation()

  return (
    <section className="section-py bg-beige">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            ref={ref}
            variants={staggerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.div variants={variants}>
              <SectionTitle
                tag="Qui sommes-nous"
                title="Un groupe pensé pour sublimer votre quotidien"
              />
            </motion.div>
            <motion.p variants={variants} className="text-gray-600 leading-relaxed mb-4">
              Bienvenue chez APISAHI Group, une maison de marques imaginée pour transformer chaque instant du quotidien en une expérience élégante, authentique et mémorable.
            </motion.p>
            <motion.p variants={variants} className="text-gray-600 leading-relaxed mb-8">
              À travers nos différentes marques, nous vous proposons des univers dédiés à la conciergerie premium, au bien-être, à la beauté naturelle, aux senteurs raffinées et aux coffrets cadeaux personnalisés.
            </motion.p>
            <motion.div variants={variants}>
              <Link to="/groupe" className="btn-primary">
                En savoir plus
              </Link>
            </motion.div>
          </motion.div>

          {/* Values grid */}
          <div className="grid grid-cols-2 gap-4">
            {VALUES.map((val, i) => (
              <motion.div
                key={val.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm border border-beige-dark hover:border-gold/30 transition-colors duration-300"
              >
                <div className="w-8 h-0.5 mb-4" style={{ backgroundColor: val.color }} />
                <h3 className="font-heading font-semibold text-noir mb-2" style={{ color: val.color }}>{val.label}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
