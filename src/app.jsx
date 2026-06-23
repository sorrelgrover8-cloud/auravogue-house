import AnimatedBackground from './components/AnimatedBackground.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Process from './components/Process.jsx'
import Statement from './components/Statement.jsx'
import SubmissionForm from './components/SubmissionForm.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-canvas font-sans text-ink">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Process />
        <Statement />
        <SubmissionForm />
      </main>
      <Footer />
    </div>
  )
}