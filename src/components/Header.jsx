import { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToSubmission = () => {
    document.getElementById('private-submission')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-700 ${
        scrolled ? 'bg-canvas/85 backdrop-blur-md border-b border-hairline' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12">
        <span className="font-serif text-lg tracking-widest2 text-ink md:text-xl">
          AURA VOGUE
        </span>
        <button
          type="button"
          onClick={scrollToSubmission}
          className="text-[11px] uppercase tracking-widest2 text-bronze transition-opacity hover:opacity-70 md:text-xs"
        >
          Request Access
        </button>
      </div>
    </header>
  )
}
