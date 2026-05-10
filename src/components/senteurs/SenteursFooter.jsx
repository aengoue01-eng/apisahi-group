import { Link } from 'react-router-dom'

const GOLD = '#C9A84C'
const GOLD_LIGHT = '#E2C97E'

const scrollTo = (href) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const LINKS = [
  { label: "Senteurs d'Afrique", href: '#hero' },
  { label: 'Collections', href: '#collections' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Contact', href: '#contact' },
]

const SOCIALS = [
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://tiktok.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
      </svg>
    ),
  },
]

export default function SenteursFooter() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#000', borderTop: `1px solid ${GOLD}18` }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Col 1 — Logo + description */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden border flex-shrink-0"
                style={{ borderColor: `${GOLD}40` }}>
                <img
                  src="/images/senteurs/logo.jpg"
                  alt="Senteurs d'Afrique"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.parentElement.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;color:${GOLD};font-weight:700;font-size:16px">SA</div>`
                  }}
                />
              </div>
              <div>
                <p className="font-heading font-bold text-white text-base leading-none"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  Senteurs d'Afrique
                </p>
                <p className="text-xs tracking-widest uppercase mt-0.5" style={{ color: GOLD }}>
                  by APISAHI Group
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Des créations olfactives uniques inspirées de l'âme et de l'élégance africaine, pour transformer vos espaces en havres de raffinement.
            </p>
            {/* Réseaux sociaux */}
            <div className="flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{ border: `1px solid ${GOLD}25`, color: 'rgba(255,255,255,0.4)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${GOLD}25`; e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <h3 className="font-heading font-semibold text-white text-base mb-6 relative inline-block"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Navigation
              <span className="absolute -bottom-1 left-0 w-6 h-px" style={{ background: GOLD }} />
            </h3>
            <ul className="flex flex-col gap-3">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm transition-colors duration-200 text-left"
                    style={{ color: 'rgba(255,255,255,0.4)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = GOLD_LIGHT}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact + retour */}
          <div>
            <h3 className="font-heading font-semibold text-white text-base mb-6 relative inline-block"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Contact
              <span className="absolute -bottom-1 left-0 w-6 h-px" style={{ background: GOLD }} />
            </h3>
            <div className="space-y-3 text-sm mb-8" style={{ color: 'rgba(255,255,255,0.4)' }}>
              <p>contact@apisahigroup.com</p>
              <p>+225 XX XX XX XX XX</p>
              <p>Abidjan, Côte d'Ivoire</p>
            </div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-colors duration-200"
              style={{ color: `${GOLD}60` }}
              onMouseEnter={(e) => e.currentTarget.style.color = GOLD}
              onMouseLeave={(e) => e.currentTarget.style.color = `${GOLD}60`}
            >
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Retour APISAHI Group
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: `1px solid ${GOLD}10` }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
            © {year} Senteurs d'Afrique — APISAHI Group. Tous droits réservés.
          </p>
          <p className="text-xs" style={{ color: `${GOLD}40` }}>
            L'art de sublimer vos espaces
          </p>
        </div>
      </div>
    </footer>
  )
}
