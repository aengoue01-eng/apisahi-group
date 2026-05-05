import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function CtaBanner() {
  const { ref, inView, variants } = useScrollAnimation()

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #5A7E5E 0%, #7A9E7E 50%, #4a6e4e 100%)' }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="relative z-10 container-custom text-center"
      >
        <p className="text-white/80 text-sm tracking-widest uppercase mb-4">Prêt à vivre l'expérience ?</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto">
          Vivez l'expérience APISAHI Group
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
          Notre équipe est à votre écoute pour créer des expériences qui vous ressemblent, avec professionnalisme et attention.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact" className="bg-white text-gold font-medium px-8 py-3 rounded-sm hover:bg-beige transition-colors duration-300 text-sm tracking-wide uppercase">
            Nous contacter
          </Link>
          <Link to="/offres" className="border border-white text-white font-medium px-8 py-3 rounded-sm hover:bg-white/10 transition-colors duration-300 text-sm tracking-wide uppercase">
            Voir nos offres
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
