import { Hero } from "@/components/hero"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <CTA />
      <Footer />
    </main>
  )
}
