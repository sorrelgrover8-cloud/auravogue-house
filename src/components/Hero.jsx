import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  const scrollToSubmission = () => {
    document.getElementById("private-submission")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="max-w-5xl"
      >
        <motion.p
          variants={item}
          className="mb-8 text-[11px] uppercase tracking-[0.4em] text-bronze md:text-xs"
        >
          AI-POWERED LUXURY CREATIVE HOUSE
        </motion.p>

        <motion.h1
          variants={item}
          className="font-serif text-5xl leading-none text-ink sm:text-6xl md:text-8xl"
        >
          Luxury campaigns,
        </motion.h1>

        <motion.h2
          variants={item}
          className="font-serif text-5xl italic leading-none text-ink/80 sm:text-6xl md:text-8xl"
        >
          composed through AI
        </motion.h2>

        <motion.p
          variants={item}
          className="mx-auto mt-10 max-w-md text-lg text-ink/70"
        >
          No photoshoot. No studio. Only vision, rendered.
        </motion.p>

        <motion.div variants={item} className="mt-12">
          <button
            type="button"
            onClick={scrollToSubmission}
            className="border border-bronze px-8 py-3 text-[11px] uppercase tracking-[0.3em] text-bronze transition duration-500 hover:bg-bronze hover:text-canvas"
          >
            REQUEST ACCESS
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 h-10 w-px bg-bronze/40"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}