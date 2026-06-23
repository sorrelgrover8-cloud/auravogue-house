import { motion } from 'framer-motion'

// Atmospheric, slow-moving canvas built from layered soft ellipses
// blended into a warm parchment base — no blobs, no particles.
// "Shadow" pools use multiply to dissolve toward deeper champagne;
// "highlight" pools use soft-light to read like candlelit silk.

export default function AnimatedBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{
        background:
          'linear-gradient(150deg, #ECE1D1 0%, #E3D5C1 35%, #DCCBB3 60%, #E3D5C1 82%, #ECE1D1 100%)',
      }}
    >
      {/* shadow pools */}
      <motion.div
        className="absolute blur-3xl"
        style={{
          top: '-15%',
          left: '-15%',
          width: '85vw',
          height: '70vh',
          background: 'radial-gradient(ellipse 60% 50% at 35% 40%, #B79A6E, transparent 70%)',
          mixBlendMode: 'multiply',
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
          scale: [1, 1.18, 1],
          rotate: [0, 4, 0],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{ duration: 50, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute blur-3xl"
        style={{
          bottom: '-20%',
          right: '-10%',
          width: '75vw',
          height: '65vh',
          background: 'radial-gradient(ellipse 55% 50% at 65% 60%, #B79A6E, transparent 72%)',
          mixBlendMode: 'multiply',
        }}
        animate={{
          x: [0, 45, 0],
          y: [0, -35, 0],
          scale: [1, 0.9, 1],
          rotate: [0, -3, 0],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{ duration: 60, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* highlight pools */}
      <motion.div
        className="absolute blur-3xl"
        style={{
          top: '5%',
          right: '-12%',
          width: '70vw',
          height: '65vh',
          background: 'radial-gradient(ellipse 55% 50% at 60% 45%, #F2E8D8, transparent 68%)',
          mixBlendMode: 'soft-light',
        }}
        animate={{
          x: [0, 55, 0],
          y: [0, -30, 0],
          scale: [1, 1.15, 1],
          rotate: [0, -5, 0],
          opacity: [0.3, 0.65, 0.3],
        }}
        transition={{ duration: 42, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute blur-3xl"
        style={{
          bottom: '0%',
          left: '-10%',
          width: '65vw',
          height: '60vh',
          background: 'radial-gradient(ellipse 50% 45% at 35% 60%, #F2E8D8, transparent 70%)',
          mixBlendMode: 'soft-light',
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 35, 0],
          scale: [1, 0.92, 1],
          rotate: [0, 4, 0],
          opacity: [0.25, 0.55, 0.25],
        }}
        transition={{ duration: 55, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* silk sheen sweep */}
      <motion.div
        className="absolute blur-2xl"
        style={{
          top: '-35%',
          left: '-35%',
          width: '170vw',
          height: '170vh',
          background:
            'linear-gradient(100deg, transparent 35%, #F2E8D8 50%, transparent 65%)',
          mixBlendMode: 'soft-light',
        }}
        animate={{
          x: ['-18%', '0%', '18%'],
          rotate: -7,
          opacity: [0, 0.7, 0],
        }}
        transition={{ duration: 48, repeat: Infinity, ease: 'easeInOut', repeatType: 'mirror' }}
      />

      {/* quiet vignette — aged, paper-like edges */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 55%, rgba(120,95,55,0.16) 100%)',
        }}
      />
    </div>
  )
}