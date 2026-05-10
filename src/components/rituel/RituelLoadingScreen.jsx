import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PINK = '#D4548A'
const PINK_LIGHT = '#F0A0C0'
const BG = '#1E0A18'

export default function RituelLoadingScreen() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="rituel-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
          style={{ background: BG }}
        >
          {/* Motif subtil */}
          <div className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg,${PINK} 0,${PINK} 1px,transparent 0,transparent 80px),repeating-linear-gradient(90deg,${PINK} 0,${PINK} 1px,transparent 0,transparent 80px)`,
            }}
          />
          {/* Halo rose */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{ background: `radial-gradient(circle, ${PINK}12 0%, transparent 70%)` }}
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.34, 1.4, 0.64, 1] }}
              className="relative mb-8"
            >
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0, 0.2] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-full"
                style={{ background: `${PINK}30` }}
              />
              <div className="relative w-20 h-20 rounded-full overflow-hidden flex items-center justify-center border"
                style={{ borderColor: `${PINK}60`, background: '#2D0F20' }}>
                <img
                  src="/images/rituel/logo.jpg"
                  alt="Rituel de Beauté"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="hidden absolute inset-0 items-center justify-center"
                  style={{ fontFamily: "'Playfair Display', serif", color: PINK, fontWeight: 700, fontSize: '20px' }}>
                  RB
                </div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="font-heading font-bold text-3xl tracking-[0.12em] mb-1"
              style={{ color: '#FFFFFF', fontFamily: "'Playfair Display', serif" }}
            >
              Rituel
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-sm tracking-[0.45em] uppercase mb-10"
              style={{ color: PINK_LIGHT }}
            >
              De Beauté
            </motion.p>

            <motion.div
              className="relative overflow-hidden"
              style={{ width: '160px', height: '1px', background: `${PINK}18` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <motion.div
                className="absolute top-0 left-0 h-full"
                style={{ background: `linear-gradient(90deg, transparent, ${PINK}, ${PINK_LIGHT})` }}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.85, duration: 1.5, ease: 'easeInOut' }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="text-xs mt-6 tracking-widest"
              style={{ color: `${PINK}50`, fontStyle: 'italic', fontFamily: "'Playfair Display', serif" }}
            >
              Révélez votre éclat naturel
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
