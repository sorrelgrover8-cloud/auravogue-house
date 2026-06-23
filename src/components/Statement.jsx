import { motion } from 'framer-motion'

export default function Statement() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6 py-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-150px' }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        <div className="mb-10 h-px w-12 bg-bronze" />
        <p className="font-serif italic leading-snug text-ink text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Each campaign is crafted
          <br />
          with precision,
          <br />
          not generated at scale.
        </p>
        <div className="mt-10 h-px w-12 bg-bronze" />
      </motion.div>
    </section>
  )
}