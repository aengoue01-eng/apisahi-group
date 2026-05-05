import { Link } from 'react-router-dom'

export default function PageHero({ title, subtitle, breadcrumb }) {
  return (
    <section
      className="relative flex items-center justify-center text-center"
      style={{ minHeight: '40vh', background: 'linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 50%, #1A1A1A 100%)' }}
    >
      {/* Gold overlay pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />
      <div className="relative z-10 container-custom py-20">
        {/* Breadcrumb */}
        {breadcrumb && (
          <div className="flex items-center justify-center gap-2 text-sm text-beige/50 mb-6">
            <Link to="/" className="hover:text-gold transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-beige/80">{breadcrumb}</span>
          </div>
        )}
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-beige mb-4">
          {title}
        </h1>
        <div className="flex justify-center mb-6">
          <span className="block w-16 h-0.5 bg-gold" />
        </div>
        {subtitle && (
          <p className="text-beige/70 text-lg max-w-xl mx-auto">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
