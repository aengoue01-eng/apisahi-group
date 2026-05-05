import { motion } from 'framer-motion'

export default function SectionTitle({ tag, title, subtitle, center = false, light = false }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {tag && (
        <p className={`text-xs font-medium tracking-widest uppercase mb-3 ${light ? 'text-gold-light' : 'text-gold'}`}>
          {tag}
        </p>
      )}
      <h2 className={`font-heading text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-beige' : 'text-noir'}`}>
        {title}
      </h2>
      <div className={`flex ${center ? 'justify-center' : ''} mb-4`}>
        <span className="block w-12 h-0.5 bg-gold" />
      </div>
      {subtitle && (
        <p className={`text-base leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-beige/70' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
