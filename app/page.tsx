import Navbar from '@/components/sections/navbar'
import Hero from '@/components/sections/hero'
import Marquee from '@/components/sections/marquee'
import Approach from '@/components/sections/approach'
import Services from '@/components/sections/services'
import Skills from '@/components/sections/skills'
import Projects from '@/components/sections/projects'
import Process from '@/components/sections/process'
// import Contact from '@/components/sections/contact'
import Footer from '@/components/sections/footer'

export default function Page() {
  return (
    <main className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grid-overlay" />

      <Navbar />
      <Hero />
      <Marquee />
      <Approach />
      <Services />
      <Skills />
      <Projects />
      <Process />
      {/* <Contact /> */}
      <Footer />
    </main>
  )
}