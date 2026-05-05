import { Link } from 'react-router-dom'

export default function UniversCard({ subsidiary }) {
  const { name, tagline, description, color, path } = subsidiary

  return (
    <div className="flip-card cursor-pointer" style={{ height: '360px' }}>
      <div className="flip-card-inner w-full h-full rounded-xl shadow-lg">
        {/* Front */}
        <div
          className="flip-card-front w-full h-full rounded-xl flex flex-col items-center justify-center p-8 text-center"
          style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 100%)', border: `2px solid ${color}30` }}
        >
          <div className="w-12 h-0.5 mb-8" style={{ backgroundColor: color }} />
          <h3 className="font-heading text-2xl font-bold text-beige mb-3">{name}</h3>
          <p className="text-sm tracking-wide uppercase" style={{ color }}>{tagline}</p>
          <p className="mt-8 text-beige/30 text-xs tracking-widest uppercase">Survolez pour découvrir</p>
        </div>

        {/* Back */}
        <div
          className="flip-card-back w-full h-full rounded-xl flex flex-col items-center justify-center p-8 text-center"
          style={{ background: `linear-gradient(135deg, ${color} 0%, ${color}CC 100%)` }}
        >
          <div className="w-10 h-0.5 bg-white/50 mb-6" />
          <h3 className="font-heading text-xl font-bold text-white mb-4">{name}</h3>
          <p className="text-white/90 text-sm leading-relaxed mb-6 line-clamp-4">{description}</p>
          <Link
            to={path}
            className="bg-white text-noir font-medium px-6 py-2.5 rounded-sm text-sm tracking-wide uppercase hover:bg-beige transition-colors duration-200"
          >
            Découvrir nos offres
          </Link>
        </div>
      </div>
    </div>
  )
}
