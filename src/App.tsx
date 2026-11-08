import { type ComponentType, useEffect, useState } from 'react'
import { Benefits } from './components/Benefits/Benefits'
import { Datenschutz } from './components/Datenschutz/Datenschutz'
import { DemoSection } from './components/DemoSection/DemoSection'
import { Faq } from './components/Faq/Faq'
import { Features } from './components/Features/Features'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { HowItWorks } from './components/HowItWorks/HowItWorks'
import { Impressum } from './components/Impressum/Impressum'
import { LearningExample } from './components/LearningExample/LearningExample'
import { Privacy } from './components/Privacy/Privacy'
import { TeacherSection } from './components/TeacherSection/TeacherSection'

const DEFAULT_TITLE = document.title

/** Eigenständige Unterseiten, die per Hash statt der Startseite angezeigt werden. */
const pages: Record<string, { title: string; Component: ComponentType } | undefined> = {
  '#impressum': { title: 'Impressum – EduGo Learn', Component: Impressum },
  '#datenschutzerklaerung': {
    title: 'Datenschutzerklärung – EduGo Learn',
    Component: Datenschutz,
  },
}

function useHash() {
  const [hash, setHash] = useState(() => window.location.hash)

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return hash
}

function App() {
  const hash = useHash()
  const page = pages[hash]
  const pageTitle = page?.title

  useEffect(() => {
    document.title = pageTitle ?? DEFAULT_TITLE
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pageTitle])

  // Nach dem Wechsel von einer Unterseite zurück zur Startseite existiert der
  // Anker-Zielbereich erst nach dem Rendern – daher hier manuell scrollen.
  useEffect(() => {
    if (pageTitle || !hash || hash === '#top') return
    document.getElementById(hash.slice(1))?.scrollIntoView()
  }, [pageTitle, hash])

  return (
    <>
      <a href="#main" className="skip-link">
        Zum Inhalt springen
      </a>
      <div id="top" />
      <Header />
      <main id="main" tabIndex={-1}>
        {page ? (
          <page.Component />
        ) : (
          <>
            <Hero />
            <TeacherSection />
            <HowItWorks />
            <Benefits />
            <LearningExample />
            <Privacy />
            <Features />
            <DemoSection />
            <Faq />
          </>
        )}
      </main>
      <Footer />
    </>
  )
}

export default App
