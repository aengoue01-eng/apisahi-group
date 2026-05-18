import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const GOLD = '#fcc581'
const BROWN = '#b87333'
const CREAM = '#FAF6EE'

export default function LalouLoadingScreen() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2700)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="lalou-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
          style={{ background: CREAM }}
        >
          {/* Motif subtle crème */}
          <div className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg,${GOLD} 0,${GOLD} 1px,transparent 0,transparent 60px),repeating-linear-gradient(90deg,${GOLD} 0,${GOLD} 1px,transparent 0,transparent 60px)`,
            }}
          />
          {/* Halo doré */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: `radial-gradient(circle, ${GOLD}15 0%, transparent 70%)` }}
          />

          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.34, 1.4, 0.64, 1] }}
              className="relative mb-8"
            >
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0, 0.2] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-full"
                style={{ background: `${GOLD}30` }}
              />
              <div className="relative rounded-full overflow-hidden flex items-center justify-center border"
                style={{ borderColor: `${GOLD}60`, background: '#FFFFFF', width: '120px', height: '120px',
                  boxShadow: `0 8px 32px ${GOLD}25` }}>
                <img
                  src="/images/lalou/logo.png"
                  alt="LALOU Box Studio"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="hidden absolute inset-0 items-center justify-center"
                  style={{ fontFamily: "'Playfair Display', serif", color: GOLD, fontWeight: 700, fontSize: '32px' }}>
                  L
                </div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="font-heading font-bold text-3xl tracking-[0.2em] mb-1"
              style={{ color: '#2D2623', fontFamily: "'Playfair Display', serif" }}
            >
              LALOU
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-xs tracking-[0.55em] uppercase mb-10"
              style={{ color: BROWN }}
            >
              Box Studio
            </motion.p>

            <motion.div
              className="relative overflow-hidden"
              style={{ width: '160px', height: '1px', background: `${GOLD}30` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <motion.div
                className="absolute top-0 left-0 h-full"
                style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, ${BROWN})` }}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.85, duration: 1.6, ease: 'easeInOut' }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="text-xs mt-6 tracking-widest"
              style={{ color: `${BROWN}80`, fontStyle: 'italic', fontFamily: "'Playfair Display', serif" }}
            >
              L'art d'offrir avec élégance
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
