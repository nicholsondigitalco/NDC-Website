import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, FileText, MessageSquare, TrendingUp, Bot, Share2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Craft compelling email campaigns that convert subscribers into loyal customers.",
    features: [
      "Custom email template design",
      "Automated drip campaigns",
      "A/B testing and optimization",
      "Performance analytics and reporting",
    ],
  },
  {
    icon: FileText,
    title: "Blog & SEO",
    description: "Rank higher in search results with strategic content that drives organic traffic.",
    features: [
      "Keyword research and strategy",
      "High-quality content creation",
      "On-page SEO optimization",
      "Link building and outreach",
    ],
  },
  {
    icon: MessageSquare,
    title: "SMS Marketing",
    description: "Reach customers instantly with targeted text message campaigns that get results.",
    features: [
      "Automated text campaigns",
      "Compliance management",
      "Subscriber list growth strategies",
      "Real-time engagement tracking",
    ],
  },
  {
    icon: TrendingUp,
    title: "Paid Advertising",
    description: "Maximize ROI with expertly managed ad campaigns across all major platforms.",
    features: [
      "Google Ads management",
      "Facebook & Instagram ads",
      "Campaign optimization",
      "Budget allocation strategy",
    ],
  },
  {
    icon: Bot,
    title: "AI Workflow Building",
    description: "Automate repetitive tasks and streamline operations with custom AI solutions.",
    features: [
      "Custom workflow automation",
      "AI-powered chatbots",
      "Process optimization",
      "Integration with existing tools",
    ],
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Build engaged communities and amplify your brand voice across social channels.",
    features: [
      "Content calendar planning",
      "Post creation and scheduling",
      "Community engagement",
      "Analytics and growth strategies",
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-sky-50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
              Services That Elevate Your Business
            </h1>
            <p className="text-xl text-muted-foreground text-balance mb-8">
              From strategy to execution, we provide comprehensive marketing solutions tailored to your unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="border-border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-8 space-y-6">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-card-foreground mb-3">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                    </div>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">
              Ready to Take Your Marketing to New Heights?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Let's discuss how our services can help you achieve your business goals.
            </p>
            <Link href="/#contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
