import { useState } from 'react'
import { motion } from 'framer-motion'

// ------------------------------------------------------------
// IMPORTANT: Replace YOUR_FORM_ID below with your actual
// Formspree endpoint (https://formspree.io/f/XXXXXXX) before
// deploying. Until then, submissions will fail silently to
// the placeholder endpoint.
// ------------------------------------------------------------
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/maqvqdkv'

const fields = [
  { name: 'brandName', label: 'Brand Name', type: 'input' },
  { name: 'brandSentence', label: 'Brand In One Sentence', type: 'input' },
  { name: 'brandEssence', label: 'Brand Essence', type: 'textarea' },
  { name: 'brandPresence', label: 'Brand Presence', type: 'textarea' },
  { name: 'creativeDirection', label: 'Creative Direction', type: 'textarea' },
  { name: 'visualReference', label: 'Visual Reference', type: 'textarea' },
  { name: 'creativeBoundaries', label: 'Creative Boundaries', type: 'textarea' },
  { name: 'email', label: 'Contact Email', type: 'email' },
]

const initialState = fields.reduce((acc, f) => ({ ...acc, [f.name]: '' }), {})

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function SubmissionForm() {
  const [values, setValues] = useState(initialState)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(values),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    // scroll-mt-24 offsets the landing point so the heading clears the fixed header
    <section id="private-submission" className="scroll-mt-24 px-6 py-32 md:py-44">
      <div className="mx-auto max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-4 text-center text-[11px] uppercase tracking-widest3 text-bronze md:text-xs"
        >
          Private Submission
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-4 text-center font-serif text-4xl uppercase tracking-wide text-ink md:text-5xl"
        >
          Enter Your Vision
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 text-center font-serif text-base italic text-ink/60 md:text-lg"
        >
          Submissions are reviewed with discretion.
        </motion.p>

        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="border border-hairline px-8 py-16 text-center"
          >
            <p className="font-serif text-xl italic text-ink">
              Your vision has been received.
            </p>
            <p className="mt-4 text-sm uppercase tracking-widest2 text-bronze">
              A response is issued within 24 hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={container}
            className="space-y-10"
          >
            {fields.map((f) => (
              <motion.div key={f.name} variants={item}>
                <label
                  htmlFor={f.name}
                  className="mb-2 block text-[11px] uppercase tracking-widest2 text-ink/70"
                >
                  {f.label}
                </label>
                {f.type === 'textarea' ? (
                  <textarea
                    id={f.name}
                    name={f.name}
                    rows={3}
                    value={values[f.name]}
                    onChange={handleChange}
                    required
                    className="w-full resize-none border-b border-hairline bg-transparent py-2 font-sans text-ink placeholder-ink/30 outline-none transition-colors focus:border-bronze"
                  />
                ) : (
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type === 'email' ? 'email' : 'text'}
                    value={values[f.name]}
                    onChange={handleChange}
                    required
                    className="w-full border-b border-hairline bg-transparent py-2 font-sans text-ink placeholder-ink/30 outline-none transition-colors focus:border-bronze"
                  />
                )}
              </motion.div>
            ))}

            <motion.div variants={item} className="pt-6 text-center">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="inline-block border border-bronze px-10 py-3 text-[11px] uppercase tracking-widest2 text-bronze transition-colors duration-500 hover:bg-bronze hover:text-canvas disabled:opacity-50 md:text-xs"
              >
                {status === 'submitting' ? 'Submitting…' : 'Submit Vision'}
              </button>
              <p className="mt-6 text-xs italic text-ink/50">
                A response is issued within 24 hours.
              </p>
              {status === 'error' && (
                <p className="mt-4 text-xs text-bronze">
                  Something went wrong. Please try again, or confirm the
                  Formspree endpoint has been configured.
                </p>
              )}
            </motion.div>
          </motion.form>
        )}
      </div>
    </section>
  )
}
