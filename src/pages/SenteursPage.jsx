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

const PACKS = [
  {
    name: 'Pack Découverte',
    sub: "L'Essentiel",
    desc: "Une introduction parfaite à l'univers olfactif de Senteurs d'Afrique.",
    items: ["1 encens artisanal au choix", "1 bougie parfumée", "Conseils d'utilisation et d'ambiance"],
  },
  {
    name: 'Pack Ambiance',
    sub: "L'Art de Recevoir",
    desc: 'Idéal pour parfumer et sublimer vos espaces de vie au quotidien.',
    items: ["1 bougie parfumée", "1 diffuseur d'intérieur", "1 fragrance signature au choix"],
    featured: true,
  },
  {
    name: 'Pack Signature',
    sub: "L'Expérience Sensorielle Complète",
    desc: "Une immersion totale dans un univers de bien-être, d'élégance et d'émotions.",
    items: ["1 bougie haut de gamme", "1 diffuseur d'intérieur", "1 huile essentielle", "1 encens artisanal", "Guide personnalisé pour votre rituel olfactif"],
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

      {/* ══ COLLECTIONS ══ */}
      <section id="collections" style={{ background: '#080500', padding: '96px 0', scrollMarginTop: '80px' }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: GOLD }}>Nos collections</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Choisissez votre expérience
              </h2>
              <GoldDivider />
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PACKS.map((pack, i) => (
              <FadeIn key={pack.name} delay={i * 0.12}>
                <div className="flex flex-col h-full p-8 relative transition-all duration-500"
                  style={{
                    background: pack.featured ? 'linear-gradient(160deg,#1A1200,#0D0900)' : 'rgba(255,255,255,0.02)',
                    border: pack.featured ? `1px solid ${GOLD}60` : `1px solid rgba(255,255,255,0.07)`,
                    borderRadius: '4px',
                  }}>
                  {pack.featured && (
                    <div className="absolute top-0 left-0 right-0 text-center py-2 text-xs font-bold tracking-[0.3em] uppercase"
                      style={{ background: `linear-gradient(90deg, ${GOLD}, #A6852A)`, color: '#000', borderRadius: '4px 4px 0 0' }}>
                      Notre sélection
                    </div>
                  )}
                  <div className={pack.featured ? 'pt-8' : ''}>
                    <div className="mb-6" style={{ width: '32px', height: '1px', background: GOLD }} />
                    <h3 className="font-heading text-xl font-bold text-white mb-1"
                      style={{ fontFamily: "'Playfair Display', serif" }}>{pack.name}</h3>
                    <p className="text-xs tracking-widest uppercase mb-4" style={{ color: GOLD }}>{pack.sub}</p>
                    <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>{pack.desc}</p>
                    <div className="mb-6" style={{ height: '1px', background: 'rgba(255,255,255,0.07)' }} />
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
                    <a href="#contact"
                      className="block text-center py-3 text-xs font-bold tracking-[0.3em] uppercase transition-opacity hover:opacity-80"
                      style={pack.featured
                        ? { background: `linear-gradient(135deg, ${GOLD}, #A6852A)`, color: '#000', borderRadius: '2px' }
                        : { border: `1px solid ${GOLD}40`, color: GOLD_LIGHT, borderRadius: '2px' }}>
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
