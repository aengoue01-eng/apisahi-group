import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const GOLD = '#C9A84C'
const LINKS = [
  { label: "Senteurs d'Afrique", href: '#hero' },
  { label: 'Collections', href: '#collections' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Contact', href: '#contact' },
]

export default function SenteursNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const opaque = scrolled || menuOpen

  return (
    <>
      {/* ── HEADER ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: opaque ? 'rgba(5,3,0,0.97)' : 'transparent',
          backdropFilter: opaque ? 'blur(12px)' : 'none',
          borderBottom: opaque ? `1px solid ${GOLD}20` : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

          {/* Logo */}
          <button onClick={() => scrollTo('#hero')} className="flex items-center gap-3 focus:outline-none">
            <div
              className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border"
              style={{ borderColor: `${GOLD}40` }}
            >
              <img
                src="/images/senteurs/logo.jpg"
                alt="Senteurs d'Afrique"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentElement.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;color:${GOLD};font-weight:700;font-size:13px">SA</div>`
                }}
              />
            </div>
            <div className="hidden sm:block text-left">
              <p className="font-heading font-bold text-white text-base leading-none"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Senteurs
              </p>
              <p className="text-xs tracking-widest uppercase" style={{ color: GOLD }}>d'Afrique</p>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-medium tracking-wide relative group"
                style={{ color: 'rgba(255,255,255,0.75)', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = GOLD}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 h-px transition-all duration-300 w-0 group-hover:w-full"
                  style={{ background: GOLD }}
                />
              </button>
            ))}
          </nav>

          {/* CTA desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => scrollTo('#contact')}
              className="px-5 py-2.5 text-xs font-bold tracking-widest uppercase transition-opacity duration-200 hover:opacity-80"
              style={{ background: `linear-gradient(135deg, ${GOLD}, #A6852A)`, color: '#000', borderRadius: '2px' }}
            >
              Commander
            </button>
            <Link
              to="/"
              className="px-4 py-2.5 text-xs font-medium tracking-wider uppercase border transition-all duration-200 hover:bg-white/5"
              style={{ borderColor: `${GOLD}25`, color: 'rgba(255,255,255,0.35)', borderRadius: '2px' }}
            >
              ← APISAHI
            </Link>
          </div>

          {/* Hamburger mobile */}
          <button
            className="lg:hidden flex flex-col justify-center gap-1.5 p-2 z-10"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            <span
              className="block w-6 h-px transition-all duration-300"
              style={{
                background: menuOpen ? GOLD : 'white',
                transform: menuOpen ? 'rotate(45deg) translate(0px, 6px)' : 'none',
              }}
            />
            <span
              className="block w-6 h-px transition-all duration-300"
              style={{ background: menuOpen ? GOLD : 'white', opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-6 h-px transition-all duration-300"
              style={{
                background: menuOpen ? GOLD : 'white',
                transform: menuOpen ? 'rotate(-45deg) translate(0px, -6px)' : 'none',
              }}
            />
          </button>
        </div>
      </header>

      {/* ── MENU MOBILE — rendu en dehors du header pour éviter les conflits de z-index ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.32 }}
            className="fixed inset-0 z-[60] flex flex-col px-8 pt-8 pb-10"
            style={{ background: '#050300' }}
          >
            {/* Bouton fermer */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden border flex-shrink-0"
                  style={{ borderColor: `${GOLD}40` }}>
                  <img src="/images/senteurs/logo.jpg" alt="SA"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;color:${GOLD};font-weight:700;font-size:11px">SA</div>`
                    }}
                  />
                </div>
                <p className="text-xs tracking-widest uppercase" style={{ color: GOLD }}>
                  Senteurs d'Afrique
                </p>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200"
                style={{ border: `1px solid ${GOLD}30`, color: GOLD }}
                aria-label="Fermer le menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Trait déco */}
            <div className="mb-6" style={{ height: '1px', background: `linear-gradient(90deg, ${GOLD}40, transparent)` }} />

            <nav className="flex flex-col gap-0 flex-1">
              {LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.25 }}
                  onClick={() => scrollTo(link.href)}
                  className="font-heading text-2xl font-semibold text-left py-5 border-b"
                  style={{
                    color: 'rgba(255,255,255,0.85)',
                    borderColor: `${GOLD}15`,
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            <div className="mt-8 space-y-3">
              <button
                onClick={() => scrollTo('#contact')}
                className="w-full py-4 text-sm font-bold tracking-widest uppercase"
                style={{ background: `linear-gradient(135deg, ${GOLD}, #A6852A)`, color: '#000', borderRadius: '2px' }}
              >
                Commander
              </button>
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 text-xs tracking-widest uppercase"
                style={{ color: 'rgba(255,255,255,0.25)', border: `1px solid rgba(255,255,255,0.08)`, borderRadius: '2px' }}
              >
                ← Retour APISAHI Group
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
