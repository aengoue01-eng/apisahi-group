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
import SenteursNavbar from '@/components/senteurs/SenteursNavbar'
import SenteursFooter from '@/components/senteurs/SenteursFooter'
import toast from 'react-hot-toast'

const GOLD = '#C9A84C'
const GOLD_LIGHT = '#E2C97E'

/* ── SLIDES HERO ── */
const SLIDES = [
  {
    id: 1,
    bg: 'linear-gradient(160deg, #0A0600 0%, #1A1000 50%, #000 100%)',
    tag: "L'art des senteurs africaines",
    title: "Senteurs d'Afrique",
    sub: "Des créations olfactives uniques inspirées de l'âme du continent",
  },
  {
    id: 2,
    bg: 'linear-gradient(160deg, #000 0%, #0D0A00 40%, #0A0600 100%)',
    tag: 'Collections exclusives',
    title: "L'élégance en chaque fragrance",
    sub: 'Transformez vos espaces en véritables havres de raffinement',
  },
  {
    id: 3,
    bg: 'linear-gradient(160deg, #050300 0%, #100800 50%, #000 100%)',
    tag: 'Expérience sensorielle',
    title: "Chaque fragrance raconte une histoire",
    sub: "Découvrez nos packs Découverte, Ambiance et Signature",
  },
]

const PRODUCTS = [
  {
    id: 1,
    name: 'Encens Artisanal',
    category: 'Encens',
    tag: 'Collection Afrique',
    img: '/images/senteurs/produit-encens.jpg',
    gradient: 'linear-gradient(160deg, #1A0E00 0%, #0D0800 100%)',
  },
  {
    id: 2,
    name: 'Bougie Parfumée Savane',
    category: 'Bougies',
    tag: 'Édition limitée',
    img: '/images/senteurs/produit-bougie-savane.jpg',
    gradient: 'linear-gradient(160deg, #120A00 0%, #1A1000 100%)',
  },
  {
    id: 3,
    name: 'Bougie Parfumée Nuit',
    category: 'Bougies',
    tag: 'Bestseller',
    img: '/images/senteurs/produit-bougie-nuit.jpg',
    gradient: 'linear-gradient(160deg, #0A0A00 0%, #100D00 100%)',
  },
  {
    id: 4,
    name: "Diffuseur d'Intérieur",
    category: 'Diffuseurs',
    tag: 'Collection Signature',
    img: '/images/senteurs/produit-diffuseur.jpg',
    gradient: 'linear-gradient(160deg, #0D0A00 0%, #1A1400 100%)',
  },
  {
    id: 5,
    name: 'Fragrance Baobab & Vanille',
    category: 'Fragrances',
    tag: 'Exclusivité',
    img: '/images/senteurs/produit-fragrance.jpg',
    gradient: 'linear-gradient(160deg, #100800 0%, #0A0500 100%)',
  },
  {
    id: 6,
    name: "Huile Essentielle Ylang-Ylang",
    category: 'Huiles essentielles',
    tag: 'Pure & Naturelle',
    img: '/images/senteurs/produit-huile.jpg',
    gradient: 'linear-gradient(160deg, #0A0E00 0%, #121A00 100%)',
  },
  {
    id: 7,
    name: 'Coffret Découverte',
    category: 'Coffrets',
    tag: "L'Essentiel",
    img: '/images/senteurs/produit-coffret-decouverte.jpg',
    gradient: 'linear-gradient(160deg, #1A1200 0%, #0D0900 100%)',
  },
  {
    id: 8,
    name: "Coffret L'Art de Recevoir",
    category: 'Coffrets',
    tag: 'Notre sélection',
    featured: true,
    img: '/images/senteurs/produit-coffret-ambiance.jpg',
    gradient: 'linear-gradient(160deg, #1A1000 0%, #0D0800 100%)',
  },
  {
    id: 9,
    name: 'Coffret Signature',
    category: 'Coffrets',
    tag: 'Expérience complète',
    img: '/images/senteurs/produit-coffret-signature.jpg',
    gradient: 'linear-gradient(160deg, #120E00 0%, #0A0700 100%)',
  },
]

const VALEURS = [
  { titre: 'Authenticité', texte: "Des créations inspirées de l'âme et des richesses naturelles du continent africain." },
  { titre: 'Raffinement', texte: 'Chaque fragrance est soigneusement sélectionnée pour sublimer vos espaces.' },
  { titre: 'Émotion', texte: 'Nos senteurs racontent une histoire et évoquent des souvenirs inoubliables.' },
]

const GALLERY_ITEMS = [
  { id: 1, alt: "Bougie artisanale", aspect: '1/1' },
  { id: 2, alt: "Collection encens", aspect: '4/5' },
  { id: 3, alt: "Diffuseur signature", aspect: '16/9' },
  { id: 4, alt: "Fragrance d'ambiance", aspect: '1/1' },
  { id: 5, alt: "Rituel olfactif", aspect: '4/5' },
  { id: 6, alt: "Pack découverte", aspect: '1/1' },
]

/* ── COMPOSANTS UTILITAIRES ── */
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

/* ── FORMULAIRE DE CONTACT ── */
function SenteursContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error('Veuillez remplir tous les champs.', {
        style: { background: '#0A0800', color: '#E2C97E', border: `1px solid ${GOLD}40` },
      })
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setForm({ name: '', email: '', message: '' })
      toast.success('Message envoyé ! Nous vous répondrons sous 48h.', {
        duration: 5000,
        style: { background: '#0A0800', color: '#E2C97E', border: `1px solid ${GOLD}` },
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
        <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: GOLD }}>Message</label>
        <textarea value={form.message} rows={5} placeholder="Votre demande, votre commande..."
          onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
          style={{ ...inputStyle, resize: 'none' }}
          onFocus={(e) => e.target.style.borderColor = GOLD}
          onBlur={(e) => e.target.style.borderColor = `${GOLD}25`}
        />
      </div>
      <button type="submit" disabled={loading}
        className="w-full py-4 text-sm font-bold tracking-widest uppercase transition-opacity duration-200 disabled:opacity-60"
        style={{ background: `linear-gradient(135deg, ${GOLD}, #A6852A)`, color: '#000', borderRadius: '2px' }}>
        {loading ? 'Envoi en cours...' : 'Envoyer le message'}
      </button>
    </form>
  )
}

/* ══════════════════════════════════════════════════════════
   PAGE PRINCIPALE
══════════════════════════════════════════════════════════ */
export default function SenteursPage() {
  return (
    <PageWrapper>
      <SenteursNavbar />

      {/* ══ HERO — CAROUSEL ══ */}
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
                <div className="absolute inset-0 opacity-[0.04]"
                  style={{ backgroundImage: 'repeating-linear-gradient(0deg,#C9A84C 0,#C9A84C 1px,transparent 0,transparent 80px),repeating-linear-gradient(90deg,#C9A84C 0,#C9A84C 1px,transparent 0,transparent 80px)' }} />
                {/* Halo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)' }} />

                {/* Contenu slide */}
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
                    <a href="#collections"
                      className="px-8 py-3.5 text-sm font-semibold tracking-widest uppercase transition-opacity hover:opacity-80"
                      style={{ background: `linear-gradient(135deg, ${GOLD}, #A6852A)`, color: '#000', borderRadius: '2px' }}>
                      Découvrir les collections
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
      <section style={{ background: '#080500', padding: '96px 0' }}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: GOLD }}>Notre univers</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              L'âme de l'Afrique en chaque senteur
            </h2>
            <GoldDivider />
            <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Senteurs d'Afrique fait vibrer vos sens à travers des créations olfactives uniques, inspirées de l'âme,
              de la richesse et de l'élégance africaine.<br /><br />
              Nos collections transforment vos espaces en véritables havres de paix, d'émotion et de raffinement.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ══ VALEURS ══ */}
      <section style={{ background: '#050300', borderTop: `1px solid ${GOLD}15`, borderBottom: `1px solid ${GOLD}15`, padding: '80px 0' }}>
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

      {/* ══ COLLECTIONS — LISTING PRODUITS ══ */}
      <section id="collections" style={{ background: '#080500', padding: '96px 0', scrollMarginTop: '80px' }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: GOLD }}>Nos collections</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Nos produits
              </h2>
              <GoldDivider />
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {PRODUCTS.map((product, i) => (
              <FadeIn key={product.id} delay={i * 0.07}>
                <div
                  className="group relative flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: product.featured ? `1px solid ${GOLD}50` : `1px solid rgba(255,255,255,0.07)`,
                    borderRadius: '4px',
                    overflow: 'hidden',
                  }}
                >
                  {/* Badge */}
                  {product.featured && (
                    <div className="absolute top-3 left-3 z-10 px-2 py-1 text-xs font-bold tracking-widest uppercase"
                      style={{ background: `linear-gradient(90deg, ${GOLD}, #A6852A)`, color: '#000', borderRadius: '2px' }}>
                      Sélection
                    </div>
                  )}

                  {/* Image produit */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: '1/1' }}>
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                    {/* Placeholder si pas d'image */}
                    <div
                      className="hidden w-full h-full items-center justify-center"
                      style={{ background: product.gradient, position: 'absolute', inset: 0 }}
                    >
                      <div className="text-center">
                        <div className="mx-auto mb-2" style={{ width: '20px', height: '1px', background: `${GOLD}60` }} />
                        <p className="text-xs tracking-widest" style={{ color: `${GOLD}60` }}>
                          {product.category}
                        </p>
                      </div>
                    </div>
                    {/* Overlay hover */}
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

                  {/* Infos produit */}
                  <div className="p-4">
                    <p className="text-xs tracking-widest uppercase mb-1" style={{ color: `${GOLD}70` }}>
                      {product.category}
                    </p>
                    <h3
                      className="font-heading font-semibold text-white text-sm md:text-base mb-2 transition-colors duration-200 group-hover:opacity-80"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs mb-4" style={{ color: 'rgba(255,255,255,0.35)' }}>
                      {product.tag}
                    </p>
                    <a
                      href="#contact"
                      className="block text-center py-2.5 text-xs font-semibold tracking-widest uppercase transition-all duration-200"
                      style={{
                        border: `1px solid ${GOLD}35`,
                        color: GOLD_LIGHT,
                        borderRadius: '2px',
                      }}
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

      {/* ══ GALERIE ══ */}
      <section id="galerie" style={{ background: '#030200', padding: '96px 0', scrollMarginTop: '80px' }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: GOLD }}>Notre galerie</p>
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
                    style={{ aspectRatio: item.aspect, background: 'linear-gradient(135deg, #0D0900, #1A1200)' }}>
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
            <p className="text-center text-xs tracking-widest mt-10" style={{ color: `${GOLD}35`, fontStyle: 'italic' }}>
              Vos photos de créations viendront enrichir cette galerie
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section id="contact" style={{ background: '#080500', padding: '96px 0', scrollMarginTop: '80px' }}>
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: GOLD }}>Nous écrire</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Commandez ou posez vos questions
              </h2>
              <GoldDivider />
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <FadeIn className="lg:col-span-3">
              <div className="p-8" style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${GOLD}20`, borderRadius: '4px' }}>
                <SenteursContactForm />
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
                    "Une invitation sensorielle à travers des créations olfactives raffinées, inspirées de l'Afrique."
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

      <SenteursFooter />
    </PageWrapper>
  )
}
