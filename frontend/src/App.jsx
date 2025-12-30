import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white snap-y snap-mandatory overflow-y-scroll h-screen">
      <Navbar />
      <section className="snap-start snap-always h-screen">
        <Hero />
      </section>
      <section className="snap-start snap-always min-h-screen">
        <About />
      </section>
      <section className="snap-start snap-always min-h-screen">
        <Skills />
      </section>
      <section className="snap-start snap-always min-h-screen">
        <Experience />
      </section>
      <section className="snap-start snap-always min-h-screen">
        <Education />
      </section>
      <section className="snap-start snap-always min-h-screen">
        <Projects />
      </section>
      <section className="snap-start snap-always min-h-screen">
        <Contact />
      </section>
      <Footer />
    </div>
  )
}

export default App
