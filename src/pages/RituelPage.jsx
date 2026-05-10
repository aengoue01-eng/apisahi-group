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
import RituelNavbar from '@/components/rituel/RituelNavbar'
import RituelFooter from '@/components/rituel/RituelFooter'
import toast from 'react-hot-toast'

const PINK = '#D4548A'
const PINK_LIGHT = '#F0A0C0'
const BG_DARK = '#120610'
const BG_MED = '#1E0A18'

const SLIDES = [
  {
    id: 1,
    bg: 'linear-gradient(160deg, #1E0A18 0%, #2D0F20 50%, #120610 100%)',
    tag: 'Beauté naturelle & bien-être',
    title: 'Rituel de Beauté',
    sub: "Une approche holistique du soin pour révéler votre éclat naturel",
  },
  {
    id: 2,
    bg: 'linear-gradient(160deg, #120610 0%, #2D1025 40%, #1E0818 100%)',
    tag: 'Soins inspirés de la nature',
    title: "Des rituels transmis de génération en génération",
    sub: "Des ingrédients naturels soigneusement sélectionnés pour votre peau",
  },
  {
    id: 3,
    bg: 'linear-gradient(160deg, #1E0A18 0%, #250D1E 50%, #120610 100%)',
    tag: 'Personnalisation & suivi',
    title: "Votre peau, notre passion",
    sub: "Des routines sur mesure adaptées à chaque type de peau",
  },
]

const PRODUCTS = [
  { id: 1, name: "Huile de Baobab Pure", category: "Huiles", tag: "100% Naturelle", gradient: 'linear-gradient(160deg,#2D1025,#1A0815)', img: '/images/rituel/produit-huile-baobab.jpg' },
  { id: 2, name: "Masque Argile & Karité", category: "Masques", tag: "Soin visage", gradient: 'linear-gradient(160deg,#251020,#180A12)', img: '/images/rituel/produit-masque.jpg' },
  { id: 3, name: "Crème Hydratante Naturelle", category: "Soins visage", tag: "Bestseller", featured: true, gradient: 'linear-gradient(160deg,#2D1025,#1A0818)', img: '/images/rituel/produit-creme.jpg' },
  { id: 4, name: "Gommage Corps Sucre de Canne", category: "Soins corps", tag: "Exfoliant doux", gradient: 'linear-gradient(160deg,#200D1C,#120810)', img: '/images/rituel/produit-gommage.jpg' },
  { id: 5, name: "Sérum Éclat Aloe Vera", category: "Sérums", tag: "Anti-taches", gradient: 'linear-gradient(160deg,#2D1025,#1E0A18)', img: '/images/rituel/produit-serum.jpg' },
  { id: 6, name: "Beurre de Karité Pur", category: "Soins corps", tag: "Nourrissant", gradient: 'linear-gradient(160deg,#251020,#150810)', img: '/images/rituel/produit-karite.jpg' },
  { id: 7, name: "Kit Cuisine ta Skincare", category: "Kits DIY", tag: "Découverte", gradient: 'linear-gradient(160deg,#2D1025,#180A15)', img: '/images/rituel/produit-kit-skincare.jpg' },
  { id: 8, name: "Coffret Rituel Essentiel", category: "Coffrets", tag: "Notre sélection", featured: true, gradient: 'linear-gradient(160deg,#2D1025,#1A0818)', img: '/images/rituel/produit-coffret-essentiel.jpg' },
  { id: 9, name: "Coffret Beauté Complète", category: "Coffrets", tag: "Expérience premium", gradient: 'linear-gradient(160deg,#201020,#120810)', img: '/images/rituel/produit-coffret-complet.jpg' },
]

const VALEURS = [
  { titre: 'Naturel', texte: "Des formules inspirées des trésors de la nature africaine, sans ingrédients chimiques agressifs." },
  { titre: 'Bien-être', texte: "Chaque soin est pensé pour apporter confort, douceur et sérénité à votre routine beauté." },
  { titre: 'Personnalisation', texte: "Des rituels adaptés à votre type de peau et à vos besoins spécifiques pour des résultats durables." },
]

const GALLERY_ITEMS = [
  { id: 1, alt: "Soin visage naturel", aspect: '1/1' },
  { id: 2, alt: "Routine skincare", aspect: '4/5' },
  { id: 3, alt: "Ingrédients naturels", aspect: '16/9' },
  { id: 4, alt: "Masque beauté", aspect: '1/1' },
  { id: 5, alt: "Coffret Rituel", aspect: '4/5' },
  { id: 6, alt: "Soin corps holistique", aspect: '1/1' },
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

function PinkDivider() {
  return (
    <div className="flex justify-center my-8">
      <div style={{ width: '60px', height: '1px', background: `linear-gradient(90deg, transparent, ${PINK}, transparent)` }} />
    </div>
  )
}

function RituelContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error('Veuillez remplir tous les champs.', {
        style: { background: '#1E0A18', color: PINK_LIGHT, border: `1px solid ${PINK}40` },
      })
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setForm({ name: '', email: '', message: '' })
      toast.success('Message envoyé ! Nous vous répondrons sous 48h.', {
        duration: 5000,
        style: { background: '#1E0A18', color: PINK_LIGHT, border: `1px solid ${PINK}` },
      })
    }, 1200)
  }

  const inputStyle = {
    width: '100%', background: 'rgba(255,255,255,0.03)',
    border: `1px solid ${PINK}25`, color: 'white',
    padding: '12px 16px', fontSize: '14px', outline: 'none',
    borderRadius: '4px', transition: 'border-color 0.2s',
    fontFamily: "'Inter', sans-serif",
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: PINK }}>Nom complet</label>
          <input type="text" value={form.name} placeholder="Votre nom"
            onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = PINK}
            onBlur={(e) => e.target.style.borderColor = `${PINK}25`}
          />
        </div>
        <div>
          <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: PINK }}>E-mail</label>
          <input type="email" value={form.email} placeholder="votre@email.com"
            onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = PINK}
            onBlur={(e) => e.target.style.borderColor = `${PINK}25`}
          />
        </div>
      </div>
      <div>
        <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: PINK }}>Message</label>
        <textarea value={form.message} rows={5} placeholder="Votre type de peau, vos besoins..."
          onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
          style={{ ...inputStyle, resize: 'none' }}
          onFocus={(e) => e.target.style.borderColor = PINK}
          onBlur={(e) => e.target.style.borderColor = `${PINK}25`}
        />
      </div>
      <button type="submit" disabled={loading}
        className="w-full py-4 text-sm font-bold tracking-widest uppercase transition-opacity disabled:opacity-60"
        style={{ background: `linear-gradient(135deg, ${PINK}, #A0306A)`, color: '#fff', borderRadius: '20px' }}>
        {loading ? 'Envoi en cours...' : 'Envoyer le message'}
      </button>
    </form>
  )
}

export default function RituelPage() {
  return (
    <PageWrapper>
      <RituelNavbar />

      {/* ══ HERO ══ */}
      <section id="hero" style={{ height: '100vh' }}>
        <Swiper modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade" autoplay={{ delay: 5500, disableOnInteraction: false }}
          pagination={{ clickable: true }} navigation loop style={{ height: '100%' }}>
          {SLIDES.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-full flex items-center justify-center text-center overflow-hidden"
                style={{ background: slide.bg }}>
                <div className="absolute inset-0 opacity-[0.04]"
                  style={{ backgroundImage: `repeating-linear-gradient(0deg,${PINK} 0,${PINK} 1px,transparent 0,transparent 80px),repeating-linear-gradient(90deg,${PINK} 0,${PINK} 1px,transparent 0,transparent 80px)` }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${PINK}10 0%, transparent 70%)` }} />

                <div className="relative z-10 px-6 max-w-4xl mx-auto">
                  <p className="text-xs tracking-[0.5em] uppercase mb-6" style={{ color: PINK_LIGHT }}>
                    {slide.tag}
                  </p>
                  <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                    {slide.title}
                  </h1>
                  <div className="flex justify-center mb-6">
                    <div style={{ width: '80px', height: '1px', background: `linear-gradient(90deg, transparent, ${PINK}, transparent)` }} />
                  </div>
                  <p className="text-base md:text-lg mb-10 max-w-xl mx-auto"
                    style={{ color: 'rgba(255,255,255,0.65)', fontStyle: 'italic', fontFamily: "'Playfair Display', serif" }}>
                    {slide.sub}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="#collections"
                      className="px-8 py-3.5 text-sm font-semibold tracking-widest uppercase transition-opacity hover:opacity-80"
                      style={{ background: `linear-gradient(135deg, ${PINK}, #A0306A)`, color: '#fff', borderRadius: '20px' }}>
                      Découvrir les soins
                    </a>
                    <a href="#contact"
                      className="px-8 py-3.5 text-sm font-semibold tracking-widest uppercase border transition-all hover:bg-white/5"
                      style={{ borderColor: `${PINK}60`, color: PINK_LIGHT, borderRadius: '20px' }}>
                      Prendre soin de moi
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ══ INTRODUCTION ══ */}
      <section style={{ background: BG_MED, padding: '96px 0' }}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: PINK }}>Notre univers</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              La beauté naturelle révélée
            </h2>
            <PinkDivider />
            <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Découvrez un univers où la skincare naturelle s'invite dans votre quotidien.
              Inspirés des trésors de la nature et des secrets de beauté transmis de génération en génération,
              nos rituels vous accompagnent dans votre quête d'une peau éclatante et d'un bien-être durable.<br /><br />
              Nous privilégions une approche douce, naturelle et personnalisée afin de révéler la beauté authentique de chaque personne.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ══ VALEURS ══ */}
      <section style={{ background: BG_DARK, borderTop: `1px solid ${PINK}15`, borderBottom: `1px solid ${PINK}15`, padding: '80px 0' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {VALEURS.map((v, i) => (
              <FadeIn key={v.titre} delay={i * 0.15}>
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div style={{ width: '1px', height: '48px', background: `linear-gradient(180deg, transparent, ${PINK})` }} />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-4"
                    style={{ color: PINK_LIGHT, fontFamily: "'Playfair Display', serif" }}>{v.titre}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{v.texte}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SOINS & PRODUITS ══ */}
      <section id="collections" style={{ background: BG_MED, padding: '96px 0', scrollMarginTop: '80px' }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: PINK }}>Notre gamme</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Soins & Produits
              </h2>
              <PinkDivider />
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {PRODUCTS.map((product, i) => (
              <FadeIn key={product.id} delay={i * 0.07}>
                <div className="group relative flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: product.featured ? `1px solid ${PINK}50` : `1px solid rgba(255,255,255,0.07)`,
                    borderRadius: '12px', overflow: 'hidden',
                  }}>
                  {product.featured && (
                    <div className="absolute top-3 left-3 z-10 px-2 py-1 text-xs font-bold tracking-widest uppercase"
                      style={{ background: `linear-gradient(90deg, ${PINK}, #A0306A)`, color: '#fff', borderRadius: '20px' }}>
                      Favori
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: '1/1' }}>
                    <img src={product.img} alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
                    />
                    <div className="hidden w-full h-full items-center justify-center"
                      style={{ background: product.gradient, position: 'absolute', inset: 0 }}>
                      <div className="text-center">
                        <div className="mx-auto mb-2" style={{ width: '20px', height: '1px', background: `${PINK}60` }} />
                        <p className="text-xs tracking-widest" style={{ color: `${PINK}60` }}>{product.category}</p>
                      </div>
                    </div>
                    {/* Overlay hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                      style={{ background: 'rgba(0,0,0,0.45)' }}>
                      <a href="#contact"
                        className="px-5 py-2.5 text-xs font-bold tracking-widest uppercase"
                        style={{ background: `linear-gradient(135deg, ${PINK}, #A0306A)`, color: '#fff', borderRadius: '20px' }}>
                        Commander
                      </a>
                    </div>
                  </div>

                  {/* Infos */}
                  <div className="p-4">
                    <p className="text-xs tracking-widest uppercase mb-1" style={{ color: `${PINK}80` }}>{product.category}</p>
                    <h3 className="font-heading font-semibold text-white text-sm md:text-base mb-2"
                      style={{ fontFamily: "'Playfair Display', serif" }}>{product.name}</h3>
                    <p className="text-xs mb-4" style={{ color: 'rgba(255,255,255,0.35)' }}>{product.tag}</p>
                    <a href="#contact"
                      className="block text-center py-2.5 text-xs font-semibold tracking-widest uppercase transition-all duration-200"
                      style={{ border: `1px solid ${PINK}35`, color: PINK_LIGHT, borderRadius: '20px' }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = `${PINK}15`; e.currentTarget.style.borderColor = `${PINK}70` }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = `${PINK}35` }}>
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
      <section id="galerie" style={{ background: BG_DARK, padding: '96px 0', scrollMarginTop: '80px' }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: PINK }}>Notre galerie</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}>La beauté en images</h2>
              <PinkDivider />
            </div>
          </FadeIn>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {GALLERY_ITEMS.map((item, i) => (
              <FadeIn key={item.id} delay={i * 0.08}>
                <div className="break-inside-avoid group relative overflow-hidden cursor-pointer"
                  style={{ borderRadius: '12px', border: `1px solid ${PINK}15` }}>
                  <div className="w-full flex items-center justify-center"
                    style={{ aspectRatio: item.aspect, background: `linear-gradient(135deg, #2D0F20, #1E0A18)` }}>
                    <div className="text-center">
                      <div className="mx-auto mb-2" style={{ width: '20px', height: '1px', background: `${PINK}60` }} />
                      <p className="text-xs tracking-widest" style={{ color: `${PINK}50` }}>{item.alt}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{ background: 'rgba(0,0,0,0.5)' }}>
                    <div style={{ width: '32px', height: '1px', background: PINK }} />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section id="contact" style={{ background: BG_MED, padding: '96px 0', scrollMarginTop: '80px' }}>
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: PINK }}>Nous écrire</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Votre rituel personnalisé
              </h2>
              <PinkDivider />
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <FadeIn className="lg:col-span-3">
              <div className="p-8" style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${PINK}20`, borderRadius: '12px' }}>
                <RituelContactForm />
              </div>
            </FadeIn>
            <FadeIn className="lg:col-span-2" delay={0.1}>
              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-xl font-semibold text-white mb-6"
                    style={{ fontFamily: "'Playfair Display', serif" }}>Nos coordonnées</h3>
                  <div className="space-y-5">
                    {[
                      { label: 'E-mail', val: 'contact@apisahigroup.com' },
                      { label: 'WhatsApp', val: '+225 XX XX XX XX XX' },
                      { label: 'Adresse', val: "Abidjan, Côte d'Ivoire" },
                    ].map((info) => (
                      <div key={info.label}>
                        <p className="text-xs tracking-widest uppercase mb-1" style={{ color: PINK }}>{info.label}</p>
                        <p className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>{info.val}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ borderTop: `1px solid ${PINK}15`, paddingTop: '32px' }}>
                  <p className="text-xs leading-relaxed mb-6"
                    style={{ color: 'rgba(255,255,255,0.3)', fontStyle: 'italic', fontFamily: "'Playfair Display', serif" }}>
                    "Nos rituels vous accompagnent dans votre quête d'une peau éclatante et d'un bien-être durable."
                  </p>
                  <Link to="/"
                    className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-colors duration-200"
                    style={{ color: `${PINK}45` }}
                    onMouseEnter={(e) => e.currentTarget.style.color = PINK}
                    onMouseLeave={(e) => e.currentTarget.style.color = `${PINK}45`}>
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

      <RituelFooter />
    </PageWrapper>
  )
}
