import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-dark text-white relative overflow-hidden">
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 -right-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}

export default App