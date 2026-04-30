import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Target, Users, Zap, Award } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on delivering measurable outcomes that matter to your bottom line.",
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description: "Your success is our success. We work alongside you as a dedicated partner.",
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "We stay ahead of trends to give you a competitive edge in the market.",
  },
  {
    icon: Award,
    title: "Proven Excellence",
    description: "Our track record speaks for itself with consistent results for our clients.",
  },
]

const highlights = [
  "Data-driven strategies that deliver measurable results",
  "Personalized approach tailored to your business goals",
  "Experienced team with proven track record",
  "Transparent reporting and regular communication",
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-sky-50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
              Taking Your Business to New Heights
            </h1>
            <p className="text-xl text-muted-foreground text-balance">
              At Nicholson Digital Co., we believe every small business deserves big results.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/hot-air-balloon.jpg"
                alt="Hot air balloons in the sky"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We combine creativity, technology, and strategic thinking to help small businesses reach their marketing
                goals and beyond. Our team is dedicated to understanding your unique challenges and crafting solutions
                that drive real growth.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're just starting out or looking to scale, we're here to elevate your brand and help you soar
                above the competition.
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

      {/* Values Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">What Drives Us</h2>
            <p className="text-lg text-muted-foreground text-balance">
              Our core values guide everything we do and shape how we serve our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-border bg-card hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">Let's Grow Together</h2>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Ready to partner with a team that's committed to your success? Let's start the conversation.
            </p>
            <Link href="/#contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
