import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const GOLD = '#fcc581'
const BROWN = '#b87333'
const CHARCOAL = '#3d3d3d'
const CREAM = '#FAF6EE'

const LINKS = [
  { label: 'LALOU Box Studio', href: '#hero' },
  { label: 'Collections', href: '#collections' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Contact', href: '#contact' },
]

export default function LalouNavbar() {
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
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: opaque ? `rgba(250,246,238,0.97)` : 'transparent',
          backdropFilter: opaque ? 'blur(12px)' : 'none',
          borderBottom: opaque ? `1px solid ${GOLD}30` : 'none',
          boxShadow: opaque ? `0 2px 20px ${GOLD}10` : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

          {/* Logo */}
          <button onClick={() => scrollTo('#hero')} className="flex items-center gap-3 focus:outline-none">
            <div
              className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border flex items-center justify-center"
              style={{ borderColor: `${GOLD}50`, background: '#FFFFFF',
                boxShadow: `0 2px 8px ${GOLD}20` }}
            >
              <img
                src="/images/lalou/logo.png"
                alt="LALOU Box Studio"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentElement.innerHTML = `<span style="font-family:'Playfair Display',serif;font-weight:700;font-size:18px;color:${GOLD}">L</span>`
                }}
              />
            </div>
            <div className="hidden sm:block text-left">
              <p className="font-heading font-bold text-base leading-none"
                style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.1em',
                  color: opaque ? CHARCOAL : '#FFFFFF' }}>
                LALOU
              </p>
              <p className="text-xs tracking-widest uppercase" style={{ color: opaque ? CHARCOAL : GOLD }}>Box Studio</p>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-base font-medium tracking-wide relative group transition-colors duration-200"
                style={{ color: opaque ? CHARCOAL : 'rgba(255,255,255,0.85)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = GOLD}
                onMouseLeave={(e) => e.currentTarget.style.color = opaque ? CHARCOAL : 'rgba(255,255,255,0.85)'}
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
              className="px-5 py-2.5 text-xs font-bold tracking-widest uppercase transition-opacity duration-200 hover:opacity-85"
              style={{ background: `linear-gradient(135deg, ${GOLD}, ${BROWN})`, color: '#FFFFFF', borderRadius: '2px' }}
            >
              Commander
            </button>
            <Link
              to="/"
              className="px-4 py-2.5 text-xs font-medium tracking-wider uppercase border transition-all duration-200"
              style={{ borderColor: opaque ? `${GOLD}40` : `rgba(255,255,255,0.3)`,
                color: opaque ? CHARCOAL : 'rgba(255,255,255,0.5)', borderRadius: '2px' }}
            >
              ← APISAHI
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center gap-1.5 p-2 z-10"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            <span className="block w-6 h-px transition-all duration-300"
              style={{ background: opaque || menuOpen ? CHARCOAL : 'white',
                transform: menuOpen ? 'rotate(45deg) translate(0px, 6px)' : 'none' }} />
            <span className="block w-6 h-px transition-all duration-300"
              style={{ background: opaque || menuOpen ? CHARCOAL : 'white', opacity: menuOpen ? 0 : 1 }} />
            <span className="block w-6 h-px transition-all duration-300"
              style={{ background: opaque || menuOpen ? CHARCOAL : 'white',
                transform: menuOpen ? 'rotate(-45deg) translate(0px, -6px)' : 'none' }} />
          </button>
        </div>
      </header>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.32 }}
            className="fixed inset-0 z-[60] flex flex-col px-8 pt-8 pb-10"
            style={{ background: CREAM }}
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden border flex items-center justify-center flex-shrink-0"
                  style={{ borderColor: `${GOLD}50`, background: '#FFFFFF' }}>
                  <img src="/images/lalou/logo.png" alt="LALOU"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `<span style="font-family:'Playfair Display',serif;font-weight:700;font-size:14px;color:${GOLD}">L</span>`
                    }}
                  />
                </div>
                <p className="text-xs tracking-widest uppercase" style={{ color: BROWN }}>LALOU Box Studio</p>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full"
                style={{ border: `1px solid ${GOLD}40`, color: CHARCOAL }}
                aria-label="Fermer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mb-6" style={{ height: '1px', background: `linear-gradient(90deg, ${GOLD}50, transparent)` }} />

            <nav className="flex flex-col gap-0 flex-1">
              {LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.25 }}
                  onClick={() => scrollTo(link.href)}
                  className="font-heading text-2xl font-semibold text-left py-5 border-b"
                  style={{ color: CHARCOAL, borderColor: `${GOLD}20`, fontFamily: "'Playfair Display', serif" }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            <div className="mt-8 space-y-3">
              <button
                onClick={() => scrollTo('#contact')}
                className="w-full py-4 text-sm font-bold tracking-widest uppercase"
                style={{ background: `linear-gradient(135deg, ${GOLD}, ${BROWN})`, color: '#FFFFFF', borderRadius: '2px' }}
              >
                Commander
              </button>
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 text-xs tracking-widest uppercase"
                style={{ color: `${CHARCOAL}80`, border: `1px solid ${GOLD}30`, borderRadius: '2px' }}
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
