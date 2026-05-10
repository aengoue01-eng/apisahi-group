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
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: opaque ? 'rgba(5,3,0,0.97)' : 'transparent',
        backdropFilter: opaque ? 'blur(12px)' : 'none',
        borderBottom: opaque ? `1px solid ${GOLD}18` : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

        {/* Logo Senteurs */}
        <button onClick={() => scrollTo('#hero')} className="flex items-center gap-3 focus:outline-none">
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border"
            style={{ borderColor: `${GOLD}40` }}>
            <img
              src="/images/senteurs/logo.jpg"
              alt="Senteurs d'Afrique"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentElement.innerHTML = `<span style="font-family:'Playfair Display',serif;color:${GOLD};font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:center;width:100%;height:100%">SA</span>`
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
              className="text-sm font-medium tracking-wide transition-colors duration-200 relative group"
              style={{ color: 'rgba(255,255,255,0.75)' }}
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

        {/* CTA + retour */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => scrollTo('#contact')}
            className="px-5 py-2.5 text-xs font-bold tracking-widest uppercase transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, ${GOLD}, #A6852A)`,
              color: '#000',
              borderRadius: '2px',
            }}
          >
            Commander
          </button>
          <Link
            to="/"
            className="px-4 py-2.5 text-xs font-medium tracking-wider uppercase border transition-all duration-200 hover:bg-white/5"
            style={{ borderColor: `${GOLD}30`, color: 'rgba(255,255,255,0.4)', borderRadius: '2px' }}
          >
            ← APISAHI
          </Link>
        </div>

        {/* Hamburger mobile */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
        >
          <span className="block w-6 h-px transition-all duration-300"
            style={{ background: opaque ? GOLD : 'white', transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
          <span className="block w-6 h-px transition-all duration-300"
            style={{ background: opaque ? GOLD : 'white', opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-6 h-px transition-all duration-300"
            style={{ background: opaque ? GOLD : 'white', transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
        </button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col pt-24 px-8"
            style={{ background: '#050300' }}
          >
            <nav className="flex flex-col gap-6">
              {LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="font-heading text-2xl font-semibold text-left border-b pb-4 transition-colors duration-200"
                  style={{ color: 'rgba(255,255,255,0.8)', borderColor: `${GOLD}20`, fontFamily: "'Playfair Display', serif" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = GOLD}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                >
                  {link.label}
                </button>
              ))}
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="text-sm mt-2"
                style={{ color: 'rgba(255,255,255,0.3)' }}
              >
                ← Retour APISAHI Group
              </Link>
            </nav>
            <button
              onClick={() => scrollTo('#contact')}
              className="mt-8 py-4 text-sm font-bold tracking-widest uppercase"
              style={{ background: `linear-gradient(135deg, ${GOLD}, #A6852A)`, color: '#000', borderRadius: '2px' }}
            >
              Commander
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
