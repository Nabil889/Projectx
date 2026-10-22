import { Benefits } from './components/Benefits/Benefits'
import { DemoSection } from './components/DemoSection/DemoSection'
import { Faq } from './components/Faq/Faq'
import { Features } from './components/Features/Features'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { HowItWorks } from './components/HowItWorks/HowItWorks'
import { LearningExample } from './components/LearningExample/LearningExample'
import { Privacy } from './components/Privacy/Privacy'
import { TeacherSection } from './components/TeacherSection/TeacherSection'

function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Zum Inhalt springen
      </a>
      <div id="top" />
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <TeacherSection />
        <HowItWorks />
        <Benefits />
        <LearningExample />
        <Privacy />
        <Features />
        <DemoSection />
        <Faq />
      </main>
      <Footer />
    </>
  )
}

export default App
