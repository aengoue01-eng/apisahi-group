import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import PageWrapper from '@/components/layout/PageWrapper'
import ZeyaNavbar from '@/components/zeya/ZeyaNavbar'
import ZeyaFooter from '@/components/zeya/ZeyaFooter'
import toast from 'react-hot-toast'

const GOLD = '#C9A84C'
const GOLD_LIGHT = '#E2C97E'

const SLIDES = [
  {
    id: 1,
    bg: 'linear-gradient(160deg, #000 0%, #0A0800 50%, #050500 100%)',
    tag: 'Conciergerie & Voyages Premium',
    title: 'ZEYA Conciergerie',
    sub: 'Votre partenaire de confiance pour des séjours d\'exception',
  },
  {
    id: 2,
    bg: 'linear-gradient(160deg, #060400 0%, #000 40%, #080600 100%)',
    tag: 'Séjours sur mesure',
    title: 'L\'excellence à chaque étape',
    sub: 'Des solutions personnalisées adaptées à votre style de vie',
  },
  {
    id: 3,
    bg: 'linear-gradient(160deg, #000 0%, #050400 50%, #0A0800 100%)',
    tag: 'Expérience Premium',
    title: 'Voyagez sans contraintes',
    sub: 'Confort, sérénité et raffinement pour tous vos déplacements',
  },
]

const VALEURS = [
  { titre: 'Excellence', texte: 'Chaque prestation est soigneusement pensée pour dépasser vos attentes et offrir une expérience d\'exception.' },
  { titre: 'Discrétion', texte: 'Votre confidentialité est notre priorité. Nous gérons vos besoins avec la plus grande discrétion professionnelle.' },
  { titre: 'Sur Mesure', texte: 'Chaque service est adapté à votre profil, vos préférences et votre style de vie, sans compromis.' },
]

const SERVICES = [
  {
    id: 1,
    name: 'Recherche d\'Appartement',
    category: 'Hébergement',
    tag: 'Pack Séjour Simple',
    img: '/images/zeya/service-appartement.jpg',
    gradient: 'linear-gradient(160deg, #0A0800 0%, #050500 100%)',
  },
  {
    id: 2,
    name: 'Appartement Premium',
    category: 'Hébergement',
    tag: 'Sélection haut de gamme',
    img: '/images/zeya/service-appartement-premium.jpg',
    gradient: 'linear-gradient(160deg, #080600 0%, #0D0A00 100%)',
  },
  {
    id: 3,
    name: 'Véhicule sans Chauffeur',
    category: 'Transport',
    tag: 'Pack Séjour & Mobilité',
    img: '/images/zeya/service-vehicule.jpg',
    gradient: 'linear-gradient(160deg, #050505 0%, #0A0A08 100%)',
  },
  {
    id: 4,
    name: 'Véhicule avec Chauffeur',
    category: 'Transport',
    tag: 'Service Premium',
    img: '/images/zeya/service-chauffeur.jpg',
    gradient: 'linear-gradient(160deg, #080808 0%, #050400 100%)',
  },
  {
    id: 5,
    name: 'Activités & Sorties',
    category: 'Loisirs',
    tag: 'Expériences sur mesure',
    img: '/images/zeya/service-activites.jpg',
    gradient: 'linear-gradient(160deg, #0A0900 0%, #060500 100%)',
  },
  {
    id: 6,
    name: 'Réservations Restaurants',
    category: 'Gastronomie',
    tag: 'Notre sélection',
    featured: true,
    img: '/images/zeya/service-restaurant.jpg',
    gradient: 'linear-gradient(160deg, #0D0A00 0%, #080600 100%)',
  },
  {
    id: 7,
    name: 'Guide & Accompagnement',
    category: 'Assistance',
    tag: 'Personnalisé',
    img: '/images/zeya/service-guide.jpg',
    gradient: 'linear-gradient(160deg, #050505 0%, #0A0800 100%)',
  },
  {
    id: 8,
    name: 'Organisation Complète',
    category: 'Conciergerie',
    tag: 'Pack Premium',
    img: '/images/zeya/service-organisation.jpg',
    gradient: 'linear-gradient(160deg, #0A0800 0%, #050505 100%)',
  },
  {
    id: 9,
    name: 'Séjour sur Mesure',
    category: 'Expérience',
    tag: 'Exclusivité ZEYA',
    img: '/images/zeya/service-sejour.jpg',
    gradient: 'linear-gradient(160deg, #080600 0%, #0A0A00 100%)',
  },
]

const GALLERY_ITEMS = [
  { id: 1, alt: 'Appartement premium', aspect: '1/1' },
  { id: 2, alt: 'Véhicule avec chauffeur', aspect: '4/5' },
  { id: 3, alt: 'Hôtel de luxe', aspect: '16/9' },
  { id: 4, alt: 'Restaurant gastronomique', aspect: '1/1' },
  { id: 5, alt: 'Séjour sur mesure', aspect: '4/5' },
  { id: 6, alt: 'Expérience premium', aspect: '1/1' },
]

function FadeIn({ children, delay = 0, className = '' }) {
  const { ref, inView, variants } = useScrollAnimation()
  return (
    <motion.div ref={ref} variants={variants} initial="hidden"
      animate={inView ? 'visible' : 'hidden'} transition={{ delay }} className={className}>
      {children}
    </motion.div>
  )
}

function GoldDivider() {
  return (
    <div className="flex justify-center my-8">
      <div style={{ width: '60px', height: '1px', background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />
    </div>
  )
}

function ZeyaContactForm() {
  const [form, setForm] = useState({ name: '', email: '', pack: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error('Veuillez remplir tous les champs.', {
        style: { background: '#050505', color: '#E2C97E', border: `1px solid ${GOLD}40` },
      })
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setForm({ name: '', email: '', pack: '', message: '' })
      toast.success('Demande envoyée ! Nous vous recontactons sous 24h.', {
        duration: 5000,
        style: { background: '#050505', color: '#E2C97E', border: `1px solid ${GOLD}` },
      })
    }, 1200)
  }

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.03)',
    border: `1px solid ${GOLD}25`,
    color: 'white',
    padding: '12px 16px',
    fontSize: '14px',
    outline: 'none',
    borderRadius: '2px',
    transition: 'border-color 0.2s',
    fontFamily: "'Inter', sans-serif",
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: GOLD }}>Nom complet</label>
          <input type="text" value={form.name} placeholder="Votre nom"
            onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = GOLD}
            onBlur={(e) => e.target.style.borderColor = `${GOLD}25`}
          />
        </div>
        <div>
          <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: GOLD }}>E-mail</label>
          <input type="email" value={form.email} placeholder="votre@email.com"
            onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = GOLD}
            onBlur={(e) => e.target.style.borderColor = `${GOLD}25`}
          />
        </div>
      </div>
      <div>
        <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: GOLD }}>Pack souhaité</label>
        <select
          value={form.pack}
          onChange={(e) => setForm(f => ({ ...f, pack: e.target.value }))}
          style={{ ...inputStyle, appearance: 'none' }}
          onFocus={(e) => e.target.style.borderColor = GOLD}
          onBlur={(e) => e.target.style.borderColor = `${GOLD}25`}
        >
          <option value="" style={{ background: '#050505' }}>Sélectionnez un pack</option>
          <option value="pack1" style={{ background: '#050505' }}>Pack 1 — Séjour Simple</option>
          <option value="pack2" style={{ background: '#050505' }}>Pack 2 — Séjour & Mobilité</option>
          <option value="pack3" style={{ background: '#050505' }}>Pack 3 — Expérience Complète Premium</option>
        </select>
      </div>
      <div>
        <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: GOLD }}>Votre demande</label>
        <textarea value={form.message} rows={5} placeholder="Décrivez votre projet, vos dates, vos besoins..."
          onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
          style={{ ...inputStyle, resize: 'none' }}
          onFocus={(e) => e.target.style.borderColor = GOLD}
          onBlur={(e) => e.target.style.borderColor = `${GOLD}25`}
        />
      </div>
      <button type="submit" disabled={loading}
        className="w-full py-4 text-sm font-bold tracking-widest uppercase transition-opacity duration-200 disabled:opacity-60"
        style={{ background: `linear-gradient(135deg, ${GOLD}, #A6852A)`, color: '#000', borderRadius: '2px' }}>
        {loading ? 'Envoi en cours...' : 'Commander'}
      </button>
    </form>
  )
}

export default function ZeyaPage() {
  return (
    <PageWrapper>
      <ZeyaNavbar />

      {/* ══ HERO ══ */}
      <section id="hero" style={{ height: '100vh' }}>
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop
          style={{ height: '100%' }}
        >
          {SLIDES.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="relative w-full h-full flex items-center justify-center text-center overflow-hidden"
                style={{ background: slide.bg }}
              >
                {/* Grille dorée subtile */}
                <div className="absolute inset-0 opacity-[0.035]"
                  style={{ backgroundImage: 'repeating-linear-gradient(0deg,#C9A84C 0,#C9A84C 1px,transparent 0,transparent 80px),repeating-linear-gradient(90deg,#C9A84C 0,#C9A84C 1px,transparent 0,transparent 80px)' }} />
                {/* Halo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)' }} />

                {/* Monogramme décoratif */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
                  <span style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(200px, 35vw, 400px)',
                    fontWeight: 700,
                    color: GOLD,
                    lineHeight: 1,
                  }}>ZC</span>
                </div>

                <div className="relative z-10 px-6 max-w-4xl mx-auto">
                  <p className="text-xs tracking-[0.5em] uppercase mb-6" style={{ color: GOLD }}>
                    {slide.tag}
                  </p>
                  <h1
                    className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {slide.title}
                  </h1>
                  <div className="flex justify-center mb-6">
                    <div style={{ width: '80px', height: '1px', background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />
                  </div>
                  <p className="text-base md:text-lg mb-10 max-w-xl mx-auto"
                    style={{ color: 'rgba(255,255,255,0.65)', fontStyle: 'italic', fontFamily: "'Playfair Display', serif" }}>
                    {slide.sub}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="#services"
                      className="px-8 py-3.5 text-sm font-semibold tracking-widest uppercase transition-opacity hover:opacity-80"
                      style={{ background: `linear-gradient(135deg, ${GOLD}, #A6852A)`, color: '#000', borderRadius: '2px' }}>
                      Découvrir nos services
                    </a>
                    <a href="#contact"
                      className="px-8 py-3.5 text-sm font-semibold tracking-widest uppercase border transition-all hover:bg-white/5"
                      style={{ borderColor: `${GOLD}60`, color: GOLD_LIGHT, borderRadius: '2px' }}>
                      Commander
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ══ INTRODUCTION ══ */}
      <section style={{ background: '#050505', padding: '96px 0' }}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: GOLD }}>Notre univers</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              L'art de sublimer chaque séjour
            </h2>
            <GoldDivider />
            <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
              ZEYA Conciergerie vous accompagne dans tous vos déplacements professionnels et personnels,
              en vous proposant des solutions sur mesure adaptées à votre style de vie.<br /><br />
              Notre mission : vous offrir confort, sérénité et excellence à chaque étape de votre séjour.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ══ VALEURS ══ */}
      <section style={{ background: '#000', borderTop: `1px solid ${GOLD}15`, borderBottom: `1px solid ${GOLD}15`, padding: '80px 0' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {VALEURS.map((v, i) => (
              <FadeIn key={v.titre} delay={i * 0.15}>
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div style={{ width: '1px', height: '48px', background: `linear-gradient(180deg, transparent, ${GOLD})` }} />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-4"
                    style={{ color: GOLD_LIGHT, fontFamily: "'Playfair Display', serif" }}>{v.titre}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{v.texte}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ NOS SERVICES — LISTING E-COMMERCE ══ */}
      <section id="services" style={{ background: '#050505', padding: '96px 0', scrollMarginTop: '80px' }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: GOLD }}>Nos formules</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Nos services
              </h2>
              <GoldDivider />
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {SERVICES.map((service, i) => (
              <FadeIn key={service.id} delay={i * 0.07}>
                <div
                  className="group relative flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: service.featured ? `1px solid ${GOLD}50` : `1px solid rgba(255,255,255,0.07)`,
                    borderRadius: '4px',
                    overflow: 'hidden',
                  }}
                >
                  {service.featured && (
                    <div className="absolute top-3 left-3 z-10 px-2 py-1 text-xs font-bold tracking-widest uppercase"
                      style={{ background: `linear-gradient(90deg, ${GOLD}, #A6852A)`, color: '#000', borderRadius: '2px' }}>
                      Sélection
                    </div>
                  )}

                  {/* Image / placeholder */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: '1/1' }}>
                    <img
                      src={service.img}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                    <div
                      className="hidden w-full h-full items-center justify-center"
                      style={{ background: service.gradient, position: 'absolute', inset: 0 }}
                    >
                      <div className="text-center">
                        <div className="mx-auto mb-2" style={{ width: '20px', height: '1px', background: `${GOLD}60` }} />
                        <p className="text-xs tracking-widest" style={{ color: `${GOLD}60` }}>{service.category}</p>
                      </div>
                    </div>
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                      style={{ background: 'rgba(0,0,0,0.45)' }}
                    >
                      <a
                        href="#contact"
                        className="px-5 py-2.5 text-xs font-bold tracking-widest uppercase"
                        style={{ background: `linear-gradient(135deg, ${GOLD}, #A6852A)`, color: '#000', borderRadius: '2px' }}
                      >
                        Commander
                      </a>
                    </div>
                  </div>

                  {/* Infos */}
                  <div className="p-4">
                    <p className="text-xs tracking-widest uppercase mb-1" style={{ color: `${GOLD}70` }}>
                      {service.category}
                    </p>
                    <h3
                      className="font-heading font-semibold text-white text-sm md:text-base mb-2 group-hover:text-gold transition-colors duration-200"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {service.name}
                    </h3>
                    <p className="text-xs mb-4" style={{ color: 'rgba(255,255,255,0.35)' }}>
                      {service.tag}
                    </p>
                    <a
                      href="#contact"
                      className="block text-center py-2.5 text-xs font-semibold tracking-widest uppercase transition-all duration-200"
                      style={{ border: `1px solid ${GOLD}35`, color: GOLD_LIGHT, borderRadius: '2px' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = `${GOLD}15`
                        e.currentTarget.style.borderColor = `${GOLD}70`
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent'
                        e.currentTarget.style.borderColor = `${GOLD}35`
                      }}
                    >
                      Commander
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ GALERIE / AMBIANCE ══ */}
      <section id="galerie" style={{ background: '#000', padding: '96px 0', scrollMarginTop: '80px' }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: GOLD }}>Notre univers</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                L'élégance en images
              </h2>
              <GoldDivider />
            </div>
          </FadeIn>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {GALLERY_ITEMS.map((item, i) => (
              <FadeIn key={item.id} delay={i * 0.08}>
                <div className="break-inside-avoid group relative overflow-hidden cursor-pointer"
                  style={{ borderRadius: '4px', border: `1px solid ${GOLD}15` }}>
                  <div className="w-full flex items-center justify-center"
                    style={{ aspectRatio: item.aspect, background: 'linear-gradient(135deg, #0A0800, #000)' }}>
                    <div className="text-center">
                      <div className="mx-auto mb-3" style={{ width: '24px', height: '1px', background: `${GOLD}60` }} />
                      <p className="text-xs tracking-widest" style={{ color: `${GOLD}50` }}>{item.alt}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{ background: 'rgba(0,0,0,0.5)' }}>
                    <div style={{ width: '32px', height: '1px', background: GOLD }} />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <p className="text-center text-xs tracking-widest mt-10"
              style={{ color: `${GOLD}35`, fontStyle: 'italic', fontFamily: "'Playfair Display', serif" }}>
              Vos expériences viendront enrichir cette galerie
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section id="contact" style={{ background: '#050505', padding: '96px 0', scrollMarginTop: '80px' }}>
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: GOLD }}>Nous écrire</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Parlons de votre projet
              </h2>
              <GoldDivider />
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <FadeIn className="lg:col-span-3">
              <div className="p-8" style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${GOLD}20`, borderRadius: '4px' }}>
                <ZeyaContactForm />
              </div>
            </FadeIn>

            <FadeIn className="lg:col-span-2" delay={0.1}>
              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-xl font-semibold text-white mb-6"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                    Nos coordonnées
                  </h3>
                  <div className="space-y-5">
                    {[
                      { label: 'E-mail', val: 'contact@apisahigroup.com' },
                      { label: 'WhatsApp', val: '+225 XX XX XX XX XX' },
                      { label: 'Adresse', val: "Abidjan, Côte d'Ivoire" },
                    ].map((info) => (
                      <div key={info.label}>
                        <p className="text-xs tracking-widest uppercase mb-1" style={{ color: GOLD }}>{info.label}</p>
                        <p className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>{info.val}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ borderTop: `1px solid ${GOLD}15`, paddingTop: '32px' }}>
                  <p className="text-xs leading-relaxed mb-6"
                    style={{ color: 'rgba(255,255,255,0.3)', fontStyle: 'italic', fontFamily: "'Playfair Display', serif" }}>
                    "Votre conciergerie de confiance pour des séjours d'exception, alliant confort, sérénité et excellence."
                  </p>
                  <Link to="/"
                    className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-colors duration-200"
                    style={{ color: `${GOLD}45` }}
                    onMouseEnter={(e) => e.currentTarget.style.color = GOLD}
                    onMouseLeave={(e) => e.currentTarget.style.color = `${GOLD}45`}>
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Retour APISAHI Group
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <ZeyaFooter />
    </PageWrapper>
  )
}
