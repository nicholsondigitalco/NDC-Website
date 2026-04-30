import { Card, CardContent } from "@/components/ui/card"
import { Mail, FileText, MessageSquare, TrendingUp, Bot, Share2 } from "lucide-react"

const services = [
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Craft compelling email campaigns that convert subscribers into loyal customers.",
  },
  {
    icon: FileText,
    title: "Blog & SEO",
    description: "Rank higher in search results with strategic content that drives organic traffic.",
  },
  {
    icon: MessageSquare,
    title: "SMS Marketing",
    description: "Reach customers instantly with targeted text message campaigns that get results.",
  },
  {
    icon: TrendingUp,
    title: "Paid Advertising",
    description: "Maximize ROI with expertly managed ad campaigns across all major platforms.",
  },
  {
    icon: Bot,
    title: "AI Workflow Building",
    description: "Automate repetitive tasks and streamline operations with custom AI solutions.",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Build engaged communities and amplify your brand voice across social channels.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Services That Elevate Your Business
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            From strategy to execution, we provide comprehensive marketing solutions tailored to your unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
