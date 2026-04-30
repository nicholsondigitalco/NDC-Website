"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function BransonHero() {
  const scrollToForm = () => {
    document.getElementById("reservation-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-[700px] flex items-center justify-center text-center px-4 py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/branson-ferris-wheel-at-dusk-scenic-night-sky.jpg" alt="Branson Ferris Wheel" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
          LIMITED TIME OFFER
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">Discover the Magic of Branson</h1>

        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty">
          Experience world-class entertainment, stunning natural beauty, and unforgettable memories
        </p>

        <div className="flex items-center justify-center gap-6 mb-10">
          <div className="text-orange-500 text-6xl font-bold">$299</div>
          <div className="text-left text-white">
            <div className="text-lg font-semibold">3 Days</div>
            <div className="text-sm text-white/80">All-Inclusive Package</div>
          </div>
        </div>

        <Button onClick={scrollToForm} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
          Reserve Your Spot Now
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  )
}
