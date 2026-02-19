import SmoothScroll from './components/SmoothScroll'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Services from './components/Services'
import Process from './components/Process'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <SmoothScroll>
      <div className="bg-purple-950 min-h-screen text-white overflow-hidden selection:bg-orange-500 selection:text-white pb-20 font-sans">
        <Navbar />
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Process />
        <Marquee />
        <Portfolio />
        <Contact />

        <Footer />
      </div>
    </SmoothScroll>
  )
}

export default App
