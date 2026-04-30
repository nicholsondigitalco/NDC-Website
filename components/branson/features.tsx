import { Music, Mountain, Utensils, Ticket, Star, MapPin } from "lucide-react"

const features = [
  {
    icon: Music,
    title: "Live Entertainment",
    description:
      "World-famous shows featuring country music, comedy, and spectacular performances that'll keep you on your feet.",
  },
  {
    icon: Mountain,
    title: "Natural Beauty",
    description:
      "Explore the stunning Ozark Mountains, pristine lakes, and scenic trails perfect for adventure and relaxation.",
  },
  {
    icon: Utensils,
    title: "Amazing Dining",
    description:
      "Savor delicious southern cuisine and local specialties at some of the finest restaurants in the region.",
  },
  {
    icon: Ticket,
    title: "Theme Parks & Attractions",
    description: "From Silver Dollar City to thrilling water parks, there's endless fun for the whole family.",
  },
  {
    icon: Star,
    title: "World-Class Resorts",
    description: "Comfortable accommodations with modern amenities and breathtaking views of the Ozarks.",
  },
  {
    icon: MapPin,
    title: "Perfect Location",
    description: "Located in the heart of Missouri, Branson is easily accessible and packed with experiences.",
  },
]

const packageIncludes = [
  "3 nights premium accommodation",
  "Welcome gift package",
  "Dining discounts at local restaurants",
  "Complimentary travel guide",
]

export function BransonFeatures() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Makes Branson Unforgettable</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From live shows to outdoor adventures, your 3-day getaway includes everything you need for an amazing
            experience
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature) => (
            <div key={feature.title} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Package Includes */}
        <div className="bg-muted rounded-lg p-10">
          <h3 className="text-3xl font-bold text-center mb-8">Your $299 Package Includes:</h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 max-w-3xl mx-auto">
            {packageIncludes.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
