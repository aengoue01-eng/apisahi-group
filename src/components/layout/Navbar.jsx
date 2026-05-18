import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '@/constants/navigation'

export default function Navbar() {
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

  const opaque = scrolled || menuOpen
  const navClass = opaque
    ? 'bg-beige shadow-sm'
    : 'bg-transparent'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}>
      <div className="container-custom flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
            <span className="text-white font-heading font-bold text-sm">AG</span>
          </div>
          <div className="hidden sm:block">
            <p className={`font-heading font-bold text-lg leading-none transition-colors duration-300 ${opaque ? 'text-noir' : 'text-white'}`}>APISAHI</p>
            <p className="text-gold text-xs tracking-widest uppercase">Group</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `text-base font-medium tracking-wide transition-colors duration-200 relative group
                ${isActive
                  ? 'text-gold'
                  : opaque
                    ? 'text-noir hover:text-gold'
                    : 'text-white/90 hover:text-gold'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300
                    ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* CTA Button desktop */}
        <Link
          to="/contact"
          className={`hidden lg:inline-flex ${opaque ? 'btn-primary' : 'btn-outline-white'}`}
        >
          Demander un devis
        </Link>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 z-50"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 transition-all duration-300 ${opaque ? 'bg-noir' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${opaque ? 'bg-noir' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${opaque ? 'bg-noir' : 'bg-white'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35 }}
            className="fixed inset-0 bg-beige z-40 flex flex-col pt-24 px-8"
          >
            <nav className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `font-heading text-2xl font-semibold border-b border-beige-dark pb-4
                    ${isActive ? 'text-gold' : 'text-noir'}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-primary mt-8 justify-center"
            >
              Demander un devis
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
