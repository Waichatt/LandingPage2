import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import ProblemSolution from "@/components/problem-solution"
import Features from "@/components/features"
import Integrations from "@/components/integrations"
import Pricing from "@/components/pricing"
import Testimonials from "@/components/testimonials"
import Education from "@/components/education"
import FinalCTA from "@/components/final-cta"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Features />
      <Integrations />
      <Pricing />
      <Testimonials />
      <Education />
      <FinalCTA />
      <Contact />
      <Footer />
    </main>
  )
}