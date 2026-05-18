import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import SectionTitle from '@/components/ui/SectionTitle'
import PackCard from './PackCard'

export default function SubsidiarySection({ subsidiary, alternate }) {
  const { id, name, tagline, description, color, packs, note } = subsidiary
  const { ref, inView, staggerVariants, variants } = useScrollAnimation()

  return (
    <section
      id={id}
      className={`section-py ${alternate ? 'bg-white' : 'bg-beige'}`}
      style={{ scrollMarginTop: '80px' }}
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          ref={ref}
          variants={staggerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <motion.div variants={variants}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-1 rounded-full" style={{ backgroundColor: color }} />
              <div className="h-px w-8 opacity-30" style={{ backgroundColor: color }} />
            </div>
            <SectionTitle tag={tagline} title={name} />
          </motion.div>
          <motion.p variants={variants} className="text-gray-600 leading-relaxed max-w-lg text-sm">
            {description}
          </motion.p>
        </motion.div>

        {/* Packs grid */}
        <div className={`grid gap-6 ${packs.length <= 3 ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
          {packs.map((pack) => (
            <PackCard key={pack.name} pack={pack} accentColor={color} />
          ))}
        </div>

        {/* Note filiale */}
        {note && (
          <div className="mt-8 flex items-start gap-3 px-5 py-4 rounded-lg border" style={{ borderColor: `${color}30`, background: `${color}08` }}>
            <div className="w-1 h-full min-h-[20px] rounded-full flex-shrink-0 mt-0.5" style={{ backgroundColor: color }} />
            <p className="text-sm text-gray-600 italic leading-relaxed">{note}</p>
          </div>
        )}
      </div>
    </section>
  )
}
