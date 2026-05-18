import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const GOLD = '#C9A84C'

export default function ZeyaLoadingScreen() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="zeya-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
          style={{ background: '#000' }}
        >
          {/* Grille dorée subtile */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg,#C9A84C 0,#C9A84C 1px,transparent 0,transparent 80px),repeating-linear-gradient(90deg,#C9A84C 0,#C9A84C 1px,transparent 0,transparent 80px)',
            }}
          />

          {/* Halo central */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)' }}
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* Monogramme ZC */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.34, 1.4, 0.64, 1] }}
              className="relative mb-8"
            >
              {/* Halo pulsant */}
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.15, 0, 0.15] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-full"
                style={{ background: `${GOLD}25` }}
              />

              {/* Cercle logo */}
              <div
                className="relative w-24 h-24 rounded-full overflow-hidden flex items-center justify-center border"
                style={{ borderColor: `${GOLD}50`, background: '#050505' }}
              >
                <img
                  src="/images/zeya/logo.png"
                  alt="ZEYA Conciergerie"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div
                  className="hidden absolute inset-0 items-center justify-center"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    background: `linear-gradient(135deg, ${GOLD}, #A6852A)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 700,
                    fontSize: '28px',
                    letterSpacing: '2px',
                  }}
                >
                  ZC
                </div>
              </div>
            </motion.div>

            {/* Nom principal */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="font-heading font-bold text-3xl tracking-[0.2em] mb-1"
              style={{ color: '#F5F0E8', fontFamily: "'Playfair Display', serif" }}
            >
              ZEYA
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-sm tracking-[0.5em] uppercase mb-10"
              style={{ color: GOLD }}
            >
              Conciergerie
            </motion.p>

            {/* Barre de progression */}
            <motion.div
              className="relative overflow-hidden"
              style={{ width: '160px', height: '1px', background: 'rgba(201,168,76,0.12)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <motion.div
                className="absolute top-0 left-0 h-full"
                style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, #E2C97E)` }}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.85, duration: 1.6, ease: 'easeInOut' }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="text-xs mt-6 tracking-widest"
              style={{ color: 'rgba(201,168,76,0.35)', fontStyle: 'italic', fontFamily: "'Playfair Display', serif" }}
            >
              L'excellence à votre service
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
