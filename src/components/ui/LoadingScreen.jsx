import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
          style={{ background: '#1A1A1A' }}
        >
          {/* Grille dorée discrète */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg,#C9A84C 0,#C9A84C 1px,transparent 0,transparent 60px),repeating-linear-gradient(90deg,#C9A84C 0,#C9A84C 1px,transparent 0,transparent 60px)',
            }}
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* Cercle logo */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative mb-8"
            >
              {/* Halo pulsant */}
              <motion.div
                animate={{ scale: [1, 1.35, 1], opacity: [0.25, 0, 0.25] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: '#C9A84C' }}
              />
              {/* Logo */}
              <div
                className="relative w-20 h-20 rounded-full flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #A6852A 100%)' }}
              >
                <span
                  className="font-heading font-bold text-white text-2xl"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  AG
                </span>
              </div>
            </motion.div>

            {/* Nom */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
              className="font-heading font-bold text-3xl tracking-widest mb-2"
              style={{ color: '#F5F0E8', fontFamily: "'Playfair Display', serif", letterSpacing: '0.2em' }}
            >
              APISAHI
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-xs tracking-[0.4em] uppercase mb-10"
              style={{ color: '#C9A84C' }}
            >
              Group
            </motion.p>

            {/* Barre de progression */}
            <motion.div
              className="relative w-48 h-px overflow-hidden"
              style={{ backgroundColor: 'rgba(245,240,232,0.1)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <motion.div
                className="absolute top-0 left-0 h-full"
                style={{ background: 'linear-gradient(90deg, #C9A84C, #7A9E7E)' }}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.8, duration: 1.6, ease: 'easeInOut' }}
              />
            </motion.div>

            {/* Slogan */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="text-xs mt-6 tracking-widest"
              style={{ color: 'rgba(245,240,232,0.35)', fontStyle: 'italic' }}
            >
              L'art de sublimer vos instants de vie
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
