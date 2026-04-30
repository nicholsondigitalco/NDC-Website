import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const highlights = [
  "Data-driven strategies that deliver measurable results",
  "Personalized approach tailored to your business goals",
  "Experienced team with proven track record",
  "Transparent reporting and regular communication",
]

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
            <Image src="/images/hot-air-balloon.jpg" alt="Hot air balloons in the sky" fill className="object-cover" />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
              Taking Your Business to New Heights
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Nicholson Digital Co., we believe every small business deserves big results. Our team combines
              creativity, technology, and strategic thinking to help you reach your marketing goals and beyond.
            </p>

            <Card className="border-border bg-card">
              <CardContent className="p-6 space-y-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-card-foreground">{highlight}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
