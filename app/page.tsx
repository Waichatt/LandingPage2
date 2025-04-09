import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Benefits from "@/components/benefits"
import Plans from "@/components/plans"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section id="inicio" className="pt-16">
        <Hero />
      </section>
      <section id="que-es-waichatt" className="py-20">
        <About />
      </section>
      <section id="beneficios" className="py-20 bg-gradient-to-b from-white to-green-50">
        <Benefits />
      </section>
      <section id="planes" className="py-20">
        <Plans />
      </section>
      <section id="testimonios" className="py-20 bg-gradient-to-b from-green-50 to-white">
        <Testimonials />
      </section>
      <section id="contacto" className="py-20">
        <Contact />
      </section>
      <Footer />
    </main>
  )
}

