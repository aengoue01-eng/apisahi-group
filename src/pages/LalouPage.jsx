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
import LalouNavbar from '@/components/lalou/LalouNavbar'
import LalouFooter from '@/components/lalou/LalouFooter'
import toast from 'react-hot-toast'

const GOLD    = '#fcc581'
const GOLD_L  = '#fdd9a8'
const BROWN   = '#b87333'
const CHARCOAL = '#3d3d3d'
const CREAM   = '#FAF6EE'
const CREAM2  = '#F2EAD8'
const CREAM3  = '#EDE1CC'

/* ── SLIDES HERO (fond sombre chaleureux pour contraste) ── */
const SLIDES = [
  {
    id: 1,
    bg: 'linear-gradient(160deg, #1A0E06 0%, #2A1A0A 50%, #120800 100%)',
    tag: 'Coffrets Cadeaux Personnalisés',
    title: 'LALOU Box Studio',
    sub: 'Des coffrets pensés pour offrir une attention, une émotion, un souvenir inoubliable',
  },
  {
    id: 2,
    bg: 'linear-gradient(160deg, #160C05 0%, #1E1208 40%, #2A1A0A 100%)',
    tag: 'Collections exclusives',
    title: 'Chaque coffret, une histoire',
    sub: 'Créations soigneusement élaborées pour célébrer les moments précieux de la vie',
  },
  {
    id: 3,
    bg: 'linear-gradient(160deg, #201208 0%, #140A04 50%, #1E1208 100%)',
    tag: 'Cadeaux sur mesure',
    title: "L'élégance de l'attention",
    sub: 'Des coffrets pour toutes les occasions, avec raffinement et personnalisation',
  },
]

const PRODUCTS = [
  {
    id: 1,
    name: 'Coffret Naissance',
    category: 'Naissance',
    tag: 'Doux pour bébé & maman',
    img: '/images/lalou/coffret-naissance.jpg',
    gradient: `linear-gradient(160deg, ${CREAM2} 0%, ${CREAM} 100%)`,
  },
  {
    id: 2,
    name: 'Coffret Senteurs',
    category: 'Bien-être',
    tag: 'Olfactif & raffiné',
    img: '/images/lalou/coffret-senteurs.jpg',
    gradient: `linear-gradient(160deg, ${CREAM3} 0%, ${CREAM2} 100%)`,
  },
  {
    id: 3,
    name: 'Coffret Anniversaire',
    category: 'Occasions',
    tag: 'Notre sélection',
    featured: true,
    img: '/images/lalou/coffret-anniversaire.jpg',
    gradient: `linear-gradient(160deg, #F5E5C0 0%, ${CREAM2} 100%)`,
  },
  {
    id: 4,
    name: 'Coffret Fête des Mères',
    category: 'Occasions',
    tag: 'Tendresse & élégance',
    img: '/images/lalou/coffret-fete-meres.jpg',
    gradient: `linear-gradient(160deg, ${CREAM2} 0%, #F8EED8 100%)`,
  },
  {
    id: 5,
    name: 'Coffret Noël',
    category: 'Fêtes',
    tag: 'Magie des fêtes',
    img: '/images/lalou/coffret-noel.jpg',
    gradient: `linear-gradient(160deg, #F0E4C8 0%, ${CREAM3} 100%)`,
  },
  {
    id: 6,
    name: 'Coffret Ramadan',
    category: 'Célébrations',
    tag: 'Partage & bénédictions',
    img: '/images/lalou/coffret-ramadan.jpg',
    gradient: `linear-gradient(160deg, ${CREAM3} 0%, #EBE0C8 100%)`,
  },
  {
    id: 7,
    name: 'Coffret Pâques',
    category: 'Fêtes',
    tag: 'Festif & gourmand',
    img: '/images/lalou/coffret-paques.jpg',
    gradient: `linear-gradient(160deg, #F5EDCC 0%, ${CREAM2} 100%)`,
  },
  {
    id: 8,
    name: 'Coffret Fête des Pères',
    category: 'Occasions',
    tag: 'Force & élégance',
    img: '/images/lalou/coffret-fete-peres.jpg',
    gradient: `linear-gradient(160deg, ${CREAM2} 0%, #EDE5D0 100%)`,
  },
  {
    id: 9,
    name: 'Coffret Sur Mesure',
    category: 'Personnalisé',
    tag: 'Exclusivité LALOU',
    img: '/images/lalou/coffret-sur-mesure.jpg',
    gradient: `linear-gradient(160deg, #F0E2B8 0%, ${CREAM3} 100%)`,
  },
]

const VALEURS = [
  { titre: 'Émotion', texte: "Chaque coffret est conçu pour provoquer une émotion sincère et créer un souvenir inoubliable." },
  { titre: 'Élégance', texte: "Une présentation soignée et des produits sélectionnés avec soin pour refléter votre attention." },
  { titre: 'Personnalisation', texte: "Chaque détail est pensé pour vous, afin que votre cadeau soit unique et profondément personnel." },
]

const GALLERY_ITEMS = [
  { id: 1, alt: 'Coffret premium', aspect: '1/1' },
  { id: 2, alt: 'Emballage élégant', aspect: '4/5' },
  { id: 3, alt: 'Collection Noël', aspect: '16/9' },
  { id: 4, alt: 'Coffret naissance', aspect: '1/1' },
  { id: 5, alt: 'Coffret senteurs', aspect: '4/5' },
  { id: 6, alt: 'Coffret sur mesure', aspect: '1/1' },
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

function LalouContactForm() {
  const [form, setForm] = useState({ name: '', email: '', occasion: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error('Veuillez remplir tous les champs.', {
        style: { background: CREAM, color: CHARCOAL, border: `1px solid ${GOLD}60` },
      })
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setForm({ name: '', email: '', occasion: '', message: '' })
      toast.success('Message envoyé ! Nous vous répondrons sous 48h.', {
        duration: 5000,
        style: { background: CREAM, color: CHARCOAL, border: `1px solid ${GOLD}` },
      })
    }, 1200)
  }

  const inputStyle = {
    width: '100%',
    background: '#FFFFFF',
    border: `1px solid ${GOLD}40`,
    color: CHARCOAL,
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
          <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: BROWN }}>Nom complet</label>
          <input type="text" value={form.name} placeholder="Votre nom"
            onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = GOLD}
            onBlur={(e) => e.target.style.borderColor = `${GOLD}40`}
          />
        </div>
        <div>
          <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: BROWN }}>E-mail</label>
          <input type="email" value={form.email} placeholder="votre@email.com"
            onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = GOLD}
            onBlur={(e) => e.target.style.borderColor = `${GOLD}40`}
          />
        </div>
      </div>
      <div>
        <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: BROWN }}>Occasion</label>
        <select value={form.occasion}
          onChange={(e) => setForm(f => ({ ...f, occasion: e.target.value }))}
          style={{ ...inputStyle, appearance: 'none', background: '#FFFFFF' }}
          onFocus={(e) => e.target.style.borderColor = GOLD}
          onBlur={(e) => e.target.style.borderColor = `${GOLD}40`}
        >
          <option value="">Sélectionnez une occasion</option>
          <option value="naissance">Naissance</option>
          <option value="anniversaire">Anniversaire</option>
          <option value="fete-meres">Fête des Mères</option>
          <option value="fete-peres">Fête des Pères</option>
          <option value="noel">Noël</option>
          <option value="ramadan">Ramadan</option>
          <option value="paques">Pâques</option>
          <option value="sur-mesure">Sur mesure</option>
        </select>
      </div>
      <div>
        <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: BROWN }}>Votre message</label>
        <textarea value={form.message} rows={5}
          placeholder="Décrivez votre idée de coffret, vos souhaits de personnalisation..."
          onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
          style={{ ...inputStyle, resize: 'none' }}
          onFocus={(e) => e.target.style.borderColor = GOLD}
          onBlur={(e) => e.target.style.borderColor = `${GOLD}40`}
        />
      </div>
      <button type="submit" disabled={loading}
        className="w-full py-4 text-sm font-bold tracking-widest uppercase transition-opacity duration-200 disabled:opacity-60"
        style={{ background: `linear-gradient(135deg, ${GOLD}, ${BROWN})`, color: '#FFFFFF', borderRadius: '2px' }}>
        {loading ? 'Envoi en cours...' : 'Commander'}
      </button>
    </form>
  )
}

export default function LalouPage() {
  return (
    <PageWrapper>
      <LalouNavbar />

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
              <div className="relative w-full h-full flex items-center justify-center text-center overflow-hidden"
                style={{ background: slide.bg }}>
                {/* Grille ambrée subtile */}
                <div className="absolute inset-0 opacity-[0.04]"
                  style={{ backgroundImage: `repeating-linear-gradient(0deg,${GOLD} 0,${GOLD} 1px,transparent 0,transparent 80px),repeating-linear-gradient(90deg,${GOLD} 0,${GOLD} 1px,transparent 0,transparent 80px)` }} />
                {/* Halo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${GOLD}10 0%, transparent 70%)` }} />
                {/* Monogramme décoratif */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
                  <span style={{ fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(200px, 40vw, 450px)', fontWeight: 700, color: GOLD, lineHeight: 1 }}>L</span>
                </div>

                <div className="relative z-10 px-6 max-w-4xl mx-auto">
                  <p className="text-xs tracking-[0.5em] uppercase mb-6" style={{ color: GOLD_L }}>{slide.tag}</p>
                  <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
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
                      className="px-8 py-3.5 text-sm font-semibold tracking-widest uppercase transition-opacity hover:opacity-85"
                      style={{ background: `linear-gradient(135deg, ${GOLD}, ${BROWN})`, color: '#FFFFFF', borderRadius: '2px' }}>
                      Découvrir les collections
                    </a>
                    <a href="#contact"
                      className="px-8 py-3.5 text-sm font-semibold tracking-widest uppercase border transition-all hover:bg-white/5"
                      style={{ borderColor: `${GOLD}70`, color: GOLD_L, borderRadius: '2px' }}>
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
      <section style={{ background: CREAM, padding: '96px 0' }}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: BROWN }}>Notre univers</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold"
              style={{ color: CHARCOAL, fontFamily: "'Playfair Display', serif" }}>
              L'art d'offrir avec intention
            </h2>
            <GoldDivider />
            <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: `${CHARCOAL}B0` }}>
              LALOU Box Studio crée des coffrets pensés pour offrir bien plus qu'un cadeau :
              une attention, une émotion et un souvenir inoubliable.<br /><br />
              Chaque création est soigneusement élaborée pour célébrer les moments précieux de la vie
              avec élégance et personnalisation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ══ VALEURS ══ */}
      <section style={{ background: CREAM2, borderTop: `1px solid ${GOLD}30`, borderBottom: `1px solid ${GOLD}30`, padding: '80px 0' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {VALEURS.map((v, i) => (
              <FadeIn key={v.titre} delay={i * 0.15}>
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div style={{ width: '1px', height: '48px', background: `linear-gradient(180deg, transparent, ${GOLD})` }} />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-4"
                    style={{ color: BROWN, fontFamily: "'Playfair Display', serif" }}>{v.titre}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: `${CHARCOAL}90` }}>{v.texte}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ COLLECTIONS — LISTING E-COMMERCE ══ */}
      <section id="collections" style={{ background: CREAM, padding: '96px 0', scrollMarginTop: '80px' }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: BROWN }}>Nos créations</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold"
                style={{ color: CHARCOAL, fontFamily: "'Playfair Display', serif" }}>
                Nos coffrets
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
                    background: '#FFFFFF',
                    border: product.featured ? `1px solid ${GOLD}70` : `1px solid ${GOLD}25`,
                    borderRadius: '4px',
                    overflow: 'hidden',
                    boxShadow: product.featured ? `0 4px 20px ${GOLD}20` : `0 2px 8px rgba(0,0,0,0.06)`,
                  }}
                >
                  {product.featured && (
                    <div className="absolute top-3 left-3 z-10 px-2 py-1 text-xs font-bold tracking-widest uppercase"
                      style={{ background: `linear-gradient(90deg, ${GOLD}, ${BROWN})`, color: '#FFFFFF', borderRadius: '2px' }}>
                      Sélection
                    </div>
                  )}

                  {/* Image / placeholder */}
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
                    <div className="hidden w-full h-full items-center justify-center"
                      style={{ background: product.gradient, position: 'absolute', inset: 0 }}>
                      <div className="text-center">
                        <div className="mx-auto mb-2" style={{ width: '20px', height: '1px', background: `${GOLD}80` }} />
                        <p className="text-xs tracking-widest" style={{ color: BROWN }}>{product.category}</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                      style={{ background: 'rgba(45,38,35,0.4)' }}>
                      <a href="#contact"
                        className="px-5 py-2.5 text-xs font-bold tracking-widest uppercase"
                        style={{ background: `linear-gradient(135deg, ${GOLD}, ${BROWN})`, color: '#FFFFFF', borderRadius: '2px' }}>
                        Commander
                      </a>
                    </div>
                  </div>

                  {/* Infos */}
                  <div className="p-4">
                    <p className="text-xs tracking-widest uppercase mb-1" style={{ color: BROWN }}>
                      {product.category}
                    </p>
                    <h3 className="font-heading font-semibold text-sm md:text-base mb-2"
                      style={{ color: CHARCOAL, fontFamily: "'Playfair Display', serif" }}>
                      {product.name}
                    </h3>
                    <p className="text-xs mb-4" style={{ color: `${CHARCOAL}60` }}>{product.tag}</p>
                    <a href="#contact"
                      className="block text-center py-2.5 text-xs font-semibold tracking-widest uppercase transition-all duration-200"
                      style={{ border: `1px solid ${GOLD}50`, color: BROWN, borderRadius: '2px' }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = `${GOLD}15`; e.currentTarget.style.borderColor = GOLD }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = `${GOLD}50` }}
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
      <section id="galerie" style={{ background: CREAM2, padding: '96px 0', scrollMarginTop: '80px' }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: BROWN }}>Notre galerie</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold"
                style={{ color: CHARCOAL, fontFamily: "'Playfair Display', serif" }}>
                L'élégance en images
              </h2>
              <GoldDivider />
            </div>
          </FadeIn>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {GALLERY_ITEMS.map((item, i) => (
              <FadeIn key={item.id} delay={i * 0.08}>
                <div className="break-inside-avoid group relative overflow-hidden cursor-pointer"
                  style={{ borderRadius: '4px', border: `1px solid ${GOLD}30`,
                    boxShadow: `0 2px 12px rgba(0,0,0,0.06)` }}>
                  <div className="w-full flex items-center justify-center"
                    style={{ aspectRatio: item.aspect, background: `linear-gradient(135deg, ${CREAM3}, ${CREAM2})` }}>
                    <div className="text-center">
                      <div className="mx-auto mb-3" style={{ width: '24px', height: '1px', background: `${GOLD}80` }} />
                      <p className="text-xs tracking-widest" style={{ color: BROWN }}>{item.alt}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{ background: 'rgba(45,38,35,0.3)' }}>
                    <div style={{ width: '32px', height: '1px', background: GOLD }} />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <p className="text-center text-xs tracking-widest mt-10"
              style={{ color: `${BROWN}70`, fontStyle: 'italic', fontFamily: "'Playfair Display', serif" }}>
              Vos photos de coffrets viendront enrichir cette galerie
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section id="contact" style={{ background: CREAM, padding: '96px 0', scrollMarginTop: '80px' }}>
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: BROWN }}>Nous écrire</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold"
                style={{ color: CHARCOAL, fontFamily: "'Playfair Display', serif" }}>
                Commandez ou posez vos questions
              </h2>
              <GoldDivider />
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <FadeIn className="lg:col-span-3">
              <div className="p-8 rounded-sm" style={{ background: '#FFFFFF', border: `1px solid ${GOLD}30`,
                boxShadow: `0 4px 24px ${GOLD}10` }}>
                <LalouContactForm />
              </div>
            </FadeIn>

            <FadeIn className="lg:col-span-2" delay={0.1}>
              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-6"
                    style={{ color: CHARCOAL, fontFamily: "'Playfair Display', serif" }}>
                    Nos coordonnées
                  </h3>
                  <div className="space-y-5">
                    {[
                      { label: 'E-mail', val: 'contact@apisahigroup.com' },
                      { label: 'WhatsApp', val: '+225 XX XX XX XX XX' },
                      { label: 'Adresse', val: "Abidjan, Côte d'Ivoire" },
                    ].map((info) => (
                      <div key={info.label}>
                        <p className="text-xs tracking-widest uppercase mb-1" style={{ color: BROWN }}>{info.label}</p>
                        <p className="text-sm" style={{ color: `${CHARCOAL}90` }}>{info.val}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ borderTop: `1px solid ${GOLD}30`, paddingTop: '32px' }}>
                  <p className="text-xs leading-relaxed mb-6"
                    style={{ color: `${CHARCOAL}60`, fontStyle: 'italic', fontFamily: "'Playfair Display', serif" }}>
                    "Des coffrets pensés pour offrir bien plus qu'un cadeau : une attention, une émotion et un souvenir inoubliable."
                  </p>
                  <Link to="/"
                    className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-colors duration-200"
                    style={{ color: `${BROWN}80` }}
                    onMouseEnter={(e) => e.currentTarget.style.color = BROWN}
                    onMouseLeave={(e) => e.currentTarget.style.color = `${BROWN}80`}>
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

      <LalouFooter />
    </PageWrapper>
  )
}
