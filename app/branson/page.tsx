import { BransonHero } from "@/components/branson/hero"
import { BransonFeatures } from "@/components/branson/features"
import { BransonForm } from "@/components/branson/form"

export const metadata = {
  title: "Discover the Magic of Branson | Nicholson Digital Co.",
  description:
    "Experience world-class entertainment, stunning natural beauty, and unforgettable memories with our 3-day all-inclusive Branson package for just $299.",
}

export default function BransonPage() {
  return (
    <main className="min-h-screen">
      <BransonHero />
      <BransonFeatures />
      <BransonForm />
    </main>
  )
}
