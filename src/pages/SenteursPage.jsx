import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import PageWrapper from '@/components/layout/PageWrapper'

const GOLD = '#C9A84C'
const GOLD_LIGHT = '#E2C97E'

const PACKS = [
  {
    name: "Pack Découverte",
    sub: "L'Essentiel",
    desc: "Une introduction parfaite à l'univers olfactif de Senteurs d'Afrique.",
    items: [
      "1 encens artisanal au choix",
      "1 bougie parfumée",
      "Conseils d'utilisation et d'ambiance",
    ],
  },
  {
    name: "Pack Ambiance",
    sub: "L'Art de Recevoir",
    desc: "Idéal pour parfumer et sublimer vos espaces de vie au quotidien.",
    items: [
      "1 bougie parfumée",
      "1 diffuseur d'intérieur",
      "1 fragrance signature au choix",
    ],
    featured: true,
  },
  {
    name: "Pack Signature",
    sub: "L'Expérience Sensorielle Complète",
    desc: "Une immersion totale dans un univers de bien-être, d'élégance et d'émotions.",
    items: [
      "1 bougie haut de gamme",
      "1 diffuseur d'intérieur",
      "1 huile essentielle",
      "1 encens artisanal",
      "Guide personnalisé pour votre rituel olfactif",
    ],
  },
]

const VALEURS = [
  { titre: "Authenticité", texte: "Des créations inspirées de l'âme et des richesses naturelles du continent africain." },
  { titre: "Raffinement", texte: "Chaque fragrance est soigneusement sélectionnée pour sublimer vos espaces." },
  { titre: "Émotion", texte: "Nos senteurs racontent une histoire et évoquent des souvenirs inoubliables." },
]

function FadeIn({ children, delay = 0, className = '' }) {
  const { ref, inView, variants } = useScrollAnimation()
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function SenteursPage() {
  return (
    <PageWrapper>
      {/* ═══════════════════════════════════════ HERO ═══════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #000000 0%, #0D0A00 60%, #000000 100%)' }}
      >
        {/* Grille dorée subtile */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg,#C9A84C 0,#C9A84C 1px,transparent 0,transparent 80px),repeating-linear-gradient(90deg,#C9A84C 0,#C9A84C 1px,transparent 0,transparent 80px)',
          }}
        />
        {/* Halo central */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)' }}
        />

        <div className="relative z-10 px-4 flex flex-col items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.34, 1.2, 0.64, 1] }}
            className="mb-10"
          >
            <img
              src="/images/senteurs/logo.jpg"
              alt="Senteurs d'Afrique"
              className="w-48 h-48 md:w-64 md:h-64 object-contain rounded-2xl"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            {/* Fallback CSS si pas d'image */}
            <div className="hidden w-48 h-48 md:w-64 md:h-64 items-center justify-center rounded-2xl border"
              style={{ borderColor: `${GOLD}40`, background: '#0A0800' }}>
              <p className="font-heading text-5xl font-bold" style={{ color: GOLD }}>SA</p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xs tracking-[0.5em] uppercase mb-4"
            style={{ color: GOLD }}
          >
            Une collection d'exception
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Senteurs d'Afrique
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
            className="mb-6 origin-center"
            style={{ width: '80px', height: '1px', background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-lg md:text-xl max-w-xl leading-relaxed mb-12"
            style={{ color: 'rgba(255,255,255,0.65)', fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}
          >
            "Chaque fragrance raconte une histoire, évoque une émotion et sublime votre intérieur avec authenticité."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="#collections"
              className="px-8 py-3.5 text-sm font-semibold tracking-widest uppercase transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${GOLD} 0%, #A6852A 100%)`,
                color: '#000',
                borderRadius: '2px',
              }}
            >
              Découvrir nos collections
            </a>
            <Link
              to="/contact"
              className="px-8 py-3.5 text-sm font-semibold tracking-widest uppercase border transition-all duration-300 hover:bg-white/5"
              style={{ borderColor: `${GOLD}60`, color: GOLD_LIGHT, borderRadius: '2px' }}
            >
              Commander
            </Link>
          </motion.div>
        </div>

        {/* Flèche scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg width="20" height="20" fill="none" stroke={GOLD} strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════ INTRODUCTION ═══════════════════════════════════════ */}
      <section className="py-24 md:py-32" style={{ background: '#080500' }}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-xs tracking-[0.4em] uppercase mb-6" style={{ color: GOLD }}>Notre univers</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-8 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              L'âme de l'Afrique en chaque senteur
            </h2>
            <div className="mx-auto mb-10" style={{ width: '60px', height: '1px', background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />
            <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Senteurs d'Afrique fait vibrer vos sens à travers des créations olfactives uniques,
              inspirées de l'âme, de la richesse et de l'élégance africaine.
              <br /><br />
              Nos collections transforment vos espaces en véritables havres de paix, d'émotion et de raffinement.
              Chaque fragrance raconte une histoire, évoque une émotion et sublime votre intérieur avec authenticité.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════ VALEURS ═══════════════════════════════════════ */}
      <section className="py-20" style={{ background: '#050300', borderTop: `1px solid ${GOLD}18`, borderBottom: `1px solid ${GOLD}18` }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {VALEURS.map((v, i) => (
              <FadeIn key={v.titre} delay={i * 0.15}>
                <div className="text-center">
                  <div className="mx-auto mb-6" style={{ width: '1px', height: '48px', background: `linear-gradient(180deg, transparent, ${GOLD})` }} />
                  <h3 className="font-heading text-xl font-semibold mb-4" style={{ color: GOLD_LIGHT, fontFamily: "'Playfair Display', serif" }}>
                    {v.titre}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{v.texte}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ COLLECTIONS ═══════════════════════════════════════ */}
      <section id="collections" className="py-24 md:py-32" style={{ background: '#080500' }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: GOLD }}>Nos collections</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Choisissez votre expérience
              </h2>
              <div className="mx-auto mt-6" style={{ width: '60px', height: '1px', background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PACKS.map((pack, i) => (
              <FadeIn key={pack.name} delay={i * 0.12}>
                <div
                  className="flex flex-col h-full p-8 transition-all duration-500"
                  style={{
                    background: pack.featured
                      ? `linear-gradient(160deg, #1A1200 0%, #0D0900 100%)`
                      : 'rgba(255,255,255,0.02)',
                    border: pack.featured ? `1px solid ${GOLD}60` : `1px solid rgba(255,255,255,0.07)`,
                    borderRadius: '4px',
                    position: 'relative',
                  }}
                >
                  {pack.featured && (
                    <div
                      className="absolute top-0 left-0 right-0 text-center py-2 text-xs font-bold tracking-[0.3em] uppercase"
                      style={{ background: `linear-gradient(90deg, ${GOLD}, #A6852A)`, color: '#000', borderRadius: '4px 4px 0 0' }}
                    >
                      Notre sélection
                    </div>
                  )}

                  <div className={pack.featured ? 'pt-8' : ''}>
                    {/* Ligne déco */}
                    <div className="mb-6" style={{ width: '32px', height: '1px', background: GOLD }} />

                    <h3 className="font-heading text-xl font-bold text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {pack.name}
                    </h3>
                    <p className="text-xs tracking-widest uppercase mb-4" style={{ color: GOLD }}>
                      {pack.sub}
                    </p>
                    <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      {pack.desc}
                    </p>

                    {/* Séparateur */}
                    <div className="mb-6" style={{ height: '1px', background: 'rgba(255,255,255,0.07)' }} />

                    {/* Items */}
                    <ul className="space-y-3 flex-1 mb-10">
                      {pack.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                          <svg className="mt-0.5 flex-shrink-0" width="14" height="14" fill="none" stroke={GOLD} strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className="block text-center py-3 text-xs font-bold tracking-[0.3em] uppercase transition-all duration-300"
                      style={pack.featured
                        ? { background: `linear-gradient(135deg, ${GOLD}, #A6852A)`, color: '#000', borderRadius: '2px' }
                        : { border: `1px solid ${GOLD}40`, color: GOLD_LIGHT, borderRadius: '2px' }
                      }
                    >
                      Commander
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ CTA FINAL ═══════════════════════════════════════ */}
      <section className="py-24 text-center relative overflow-hidden" style={{ background: '#000' }}>
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg,#C9A84C 0,#C9A84C 1px,transparent 0,transparent 40px)', backgroundSize: '40px 40px' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] opacity-10 rounded-full"
          style={{ background: `radial-gradient(ellipse, ${GOLD} 0%, transparent 70%)` }}
        />
        <FadeIn className="relative z-10 max-w-2xl mx-auto px-6">
          <p className="text-xs tracking-[0.4em] uppercase mb-6" style={{ color: GOLD }}>APISAHI Group</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Vivez l'expérience Senteurs d'Afrique
          </h2>
          <div className="mx-auto mb-8" style={{ width: '60px', height: '1px', background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />
          <p className="text-sm leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Notre équipe est à votre disposition pour vous accompagner dans le choix de votre création olfactive.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-10 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:opacity-90"
              style={{ background: `linear-gradient(135deg, ${GOLD}, #A6852A)`, color: '#000', borderRadius: '2px' }}
            >
              Nous contacter
            </Link>
            <Link
              to="/"
              className="px-10 py-4 text-sm font-semibold tracking-widest uppercase border transition-all duration-300 hover:bg-white/5"
              style={{ borderColor: `${GOLD}40`, color: GOLD_LIGHT, borderRadius: '2px' }}
            >
              Retour à l'accueil
            </Link>
          </div>
        </FadeIn>
      </section>
    </PageWrapper>
  )
}
