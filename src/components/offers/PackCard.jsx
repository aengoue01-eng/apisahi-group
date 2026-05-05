import { Link } from 'react-router-dom'

export default function PackCard({ pack, accentColor }) {
  const { name, tagline, features, highlight } = pack

  return (
    <div
      className={`relative bg-white rounded-lg overflow-hidden flex flex-col transition-all duration-300
        ${highlight
          ? 'shadow-2xl scale-105 border-2 border-gold'
          : 'shadow-md border border-beige-dark hover:-translate-y-1 hover:shadow-xl'
        }`}
    >
      {highlight && (
        <div className="absolute top-0 left-0 right-0 text-center py-1.5 text-white text-xs font-semibold tracking-widest uppercase"
          style={{ backgroundColor: accentColor || '#C9A84C' }}>
          Recommandé
        </div>
      )}

      {/* Top accent bar */}
      <div className="h-1 w-full" style={{ backgroundColor: accentColor || '#C9A84C' }} />

      <div className={`p-6 flex flex-col flex-1 ${highlight ? 'pt-10' : 'pt-6'}`}>
        <h3 className="font-heading font-bold text-noir text-lg mb-2">{name}</h3>
        <p className="text-sm text-gray-500 mb-4 leading-relaxed">{tagline}</p>

        <div className="border-t border-beige-dark mb-6" />

        <ul className="space-y-3 flex-1 mb-8">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
              <svg
                className="w-4 h-4 mt-0.5 flex-shrink-0"
                style={{ color: accentColor || '#C9A84C' }}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="text-center py-3 px-6 rounded-sm text-sm font-medium tracking-wide uppercase transition-all duration-200 border"
          style={highlight
            ? { backgroundColor: accentColor || '#C9A84C', color: '#fff', borderColor: accentColor || '#C9A84C' }
            : { backgroundColor: 'transparent', color: '#6B6B6B', borderColor: '#D1D5DB' }
          }
        >
          Demander un devis
        </Link>
      </div>
    </div>
  )
}
