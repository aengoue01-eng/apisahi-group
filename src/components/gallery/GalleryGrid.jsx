import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Lightbox from './Lightbox'

export default function GalleryGrid({ items }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35 }}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg shadow-md"
              onClick={() => setLightboxIndex(items.indexOf(item))}
            >
              {/* Placeholder image (grey box with emoji) */}
              <div
                className="w-full flex items-center justify-center bg-gradient-to-br from-beige-dark to-beige text-6xl"
                style={{ aspectRatio: item.id % 3 === 0 ? '4/5' : item.id % 2 === 0 ? '16/9' : '1/1' }}
              >
                {getEmoji(item.category)}
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/50 transition-all duration-300 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                </svg>
              </div>

              {/* Alt tag */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-noir/80 to-transparent
                              translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-medium truncate">{item.alt}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {items.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          <div className="text-5xl mb-4">🔍</div>
          <p>Aucun élément dans cette catégorie.</p>
        </div>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          items={items}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((i) => (i - 1 + items.length) % items.length)}
          onNext={() => setLightboxIndex((i) => (i + 1) % items.length)}
        />
      )}
    </>
  )
}

function getEmoji(category) {
  const map = { zeya: '✈️', lalou: '🎁', senteurs: '🌿', rituel: '✨', events: '🎉' }
  return map[category] || '📷'
}
