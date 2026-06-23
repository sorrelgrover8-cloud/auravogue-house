import { motion } from 'framer-motion'

const steps = [
  {
    numeral: 'I',
    title: 'Admission',
    desc: 'Submit your request for private consideration.',
  },
  {
    numeral: 'II',
    title: 'Articulation',
    desc: 'Define your world, your aesthetic, your narrative.',
  },
  {
    numeral: 'III',
    title: 'Realization',
    desc: 'Your campaign composed and delivered within 24 hours.',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

export default function Process() {
  return (
    <section className="px-6 py-32 md:py-44">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.9 }}
        className="mb-20 text-center font-serif text-2xl uppercase tracking-widest2 text-ink md:mb-28 md:text-3xl"
      >
        Three Steps, One Vision
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={container}
        className="mx-auto grid max-w-5xl gap-16 text-center md:grid-cols-3 md:gap-12"
      >
        {steps.map((s) => (
          <motion.div key={s.numeral} variants={item}>
            <div className="mb-6 font-serif text-6xl text-bronze/35 md:text-7xl">
              {s.numeral}
            </div>
            <h3 className="mb-4 text-sm uppercase tracking-widest2 text-ink md:text-base">
              {s.title}
            </h3>
            <p className="mx-auto max-w-[220px] font-serif text-base italic text-ink/70 md:text-lg">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}