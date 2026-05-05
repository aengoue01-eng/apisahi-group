import { useInView } from 'react-intersection-observer'

export function useScrollAnimation(threshold = 0.15) {
  const { ref, inView } = useInView({ threshold, triggerOnce: true })

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const staggerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  }

  return { ref, inView, variants, staggerVariants }
}
