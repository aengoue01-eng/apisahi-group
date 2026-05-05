import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules'
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

const SLIDES = [
  {
    id: 1,
    image: '/images/hero/hero-1.jpg',
    title: "L'élégance au service de vos émotions",
    subtitle: 'Lifestyle · Bien-être · Raffinement · Excellence',
    cta1: { label: 'Découvrir nos univers', to: '/univers' },
    cta2: { label: 'Nous contacter', to: '/contact' },
  },
  {
    id: 2,
    image: '/images/hero/hero-2.jpg',
    title: 'Vivez des expériences uniques avec APISAHI Group',
    subtitle: 'ZEYA Conciergerie — Voyages & séjours premium sur mesure',
    cta1: { label: 'Voir nos offres', to: '/offres' },
    cta2: { label: 'Nous contacter', to: '/contact' },
  },
  {
    id: 3,
    image: '/images/hero/hero-3.jpg',
    title: 'Lifestyle · Bien-être · Raffinement · Excellence',
    subtitle: "Rituel de Beauté & Senteurs d'Afrique — Des soins naturels inspirés du continent",
    cta1: { label: 'Nos univers beauté', to: '/univers' },
    cta2: { label: 'Nos offres', to: '/offres' },
  },
  {
    id: 4,
    image: '/images/hero/hero-4.jpg',
    title: 'Des univers pensés pour sublimer votre quotidien',
    subtitle: "Quatre marques complémentaires, une même philosophie d'excellence",
    cta1: { label: 'Découvrir nos univers', to: '/univers' },
    cta2: { label: 'Nous contacter', to: '/contact' },
  },
  {
    id: 5,
    image: '/images/hero/hero-5.jpg',
    title: "L'art de vivre autrement",
    subtitle: "LALOU Box Studio — Des coffrets d'exception pour chaque moment précieux",
    cta1: { label: 'Voir nos coffrets', to: '/offres#lalou' },
    cta2: { label: 'Nous contacter', to: '/contact' },
  },
]

export default function HeroSlider() {
  return (
    <div className="w-full" style={{ height: '100vh' }}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="h-full"
      >
        {SLIDES.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full flex items-center justify-center text-center overflow-hidden">

              {/* Background image */}
              <div
                className="absolute inset-0 bg-center bg-cover bg-no-repeat scale-105"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  transition: 'transform 6s ease-out',
                }}
              />

              {/* Dark gradient overlay pour lisibilité du texte */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />

              {/* Filigrane doré discret */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(0deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 60px), repeating-linear-gradient(90deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 60px)',
                }}
              />

              {/* Contenu */}
              <div className="relative z-10 container-custom px-4">
                <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-6 drop-shadow">
                  APISAHI Group
                </p>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 max-w-4xl mx-auto drop-shadow-lg">
                  {slide.title}
                </h1>
                <div className="flex justify-center mb-10">
                  <span className="block w-20 h-0.5 bg-gold" />
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to={slide.cta1.to} className="btn-primary shadow-lg">
                    {slide.cta1.label}
                  </Link>
                  <Link to={slide.cta2.to} className="btn-outline-white shadow-lg">
                    {slide.cta2.label}
                  </Link>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
